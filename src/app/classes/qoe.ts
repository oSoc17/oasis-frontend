import { RouteHistory } from './routeHistory';
import { IQoE } from '../interfaces/iQoE';
import { IUserPreferences } from '../interfaces/iUserPreferences';
import { Calc } from './calc';

export class QoE implements IQoE {

    private routeHistory: RouteHistory;
    private userPreferences: IUserPreferences;

    constructor(routeHistory: RouteHistory, preference: IUserPreferences) {
        this.routeHistory = routeHistory;
        this.userPreferences = preference;
    }

    getAvgDelay(): any {
        const delay: number = this.routeHistory.getAvgDelay().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgDelay;
        /**
         *  < 6: on schedule (100%)
         *  > 60: worst case (0%) -> not based on real evidence
         */
        const score = weight * Calc.linearInterpolatePercentage(delay, 60, 6);
        return {
            score: score,
            value: this.routeHistory.getAvgDelay() // Date
        };
    }

    getAvgChangesAmount(): any {
        const changes: number = this.routeHistory.getAvgChangesAmount();
        const weight: number = this.userPreferences.weight_AvgChangesAmount;
        /**
         *  = 0: best case (100%)
         *  > 4: worst case (0%) -> not based on real evidence
         */
        const score: number = weight * Calc.linearInterpolatePercentage(changes, 4, 0);
        return {
            score: score,
            value: changes
        };
    }

    getAvgChangeTime(): any {
        const changeTime: number = this.routeHistory.getAvgChangeTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgChangeTime;
        /**
         *  < 3: impossible (0%)
         *  = 7: best case (100%) -> not based on real evidence
         *  > 20: worst case (0%) -> not based on real evidence
         */
        const scoreLower = Calc.linearInterpolatePercentage(changeTime, 3, 7);
        const scoreUpper = Calc.linearInterpolatePercentage(changeTime, 20, 7);
        const score: number = weight * (changeTime < 7 ? scoreLower : scoreUpper);
        return {
            score: score,
            value: this.routeHistory.getAvgChangeTime() // Date
        };
    }

    getDelayConsistency(): any {
        const stdDev: number = this.routeHistory.getDelayConsistency().valueOf();
        const avg: number = this.routeHistory.getAvgDelay().valueOf();
        const cov: number = avg ? stdDev / avg : 0; // coefficient of variation
        const weight: number = this.userPreferences.weight_DelayConsistency;
        /**
         *  < 0.21: on schedule (100%)
         *  > 0.75: mostly delayed (0%)
         */
        const score = weight * Calc.linearInterpolatePercentage(cov, 0.75, 0.21);
        return {
            score: score,
            value: this.routeHistory.getDelayConsistency() // Date
        };
    }

    getAvgTravelTime(): any {
        const travelTime: number = this.routeHistory.getAvgTravelTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgTravelTime;
        /**
         *  < 0: perfect (100%)
         *  > 120: long trip (0%) -> note based on real evidence
         */
        const score = weight * Calc.linearInterpolatePercentage(travelTime, 120, 0);
        return {
            score: score,
            value: this.routeHistory.getAvgTravelTime() // Date
        };
    }

    getNumberOfRoutesWithinHour(): any {
        // TODO: modify lc-client
        const period = 30; // minutes between trips, generated
        const weight: number = this.userPreferences.weight_NumberOfRoutesWithinHour;
        /**
         *  < 5: very frequent (100%)
         *  > 60: poor frequency (0%)
         */
        const score = weight * Calc.linearInterpolatePercentage(period, 60, 5);
        return {
            score: score,
            value: period // Generated
        };
    }

    getNumberOfMissedConnections(): any {
        // TODO: modify lc-client
        const missedConnections = 1;
        const weight: number = this.userPreferences.weight_NumberOfMissedConnections;
        const score = weight * Calc.linearInterpolatePercentage(missedConnections, 3, 0);
        return {
            score: score,
            value: missedConnections // Generated
        };
    }

    getPrice(): any {
        const price = 5;
        const priceRatio = price / (this.routeHistory.getAvgTravelTime().valueOf() / 60000);
        const weight: number = this.userPreferences.weight_Price;
        const score = weight * Calc.linearInterpolatePercentage(priceRatio, 3, 0);
        return {
            score: score,
            value: price // Generated
        };
    }

    getQoE(): number {
        let sum = 0;
        sum += this.getAvgTravelTime().score;
        sum += this.getAvgChangeTime().score;
        sum += this.getAvgChangesAmount().score;
        sum += this.getDelayConsistency().score;
        sum += this.getAvgDelay().score;
        sum += this.getNumberOfMissedConnections().score;
        sum += this.getNumberOfRoutesWithinHour().score;
        sum += this.getPrice().score;
        return sum;
    }
}
