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
        // QoE(delay) = 1 - delay / worst case delay
        const score = weight * Calc.clipPercentage(1 - delay / 60);
        return {
            score: score,
            value: this.routeHistory.getAvgDelay() // Date
        };
    }

    getAvgChangesAmount(): any {
        const changes: number = this.routeHistory.getAvgChangesAmount();
        const weight: number = this.userPreferences.weight_AvgChangesAmount;
        // QoE(changes) = 1 - changes / worst case changes
        const score: number = weight * Calc.clipPercentage(1 - changes / 5);
        return {
            score: score,
            value: changes
        };
    }

    getAvgChangeTime(): any {
        const changeTime: number = this.routeHistory.getAvgChangeTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgChangeTime;
        // QoE(changeTime) = 0 if less than 3 min., otherwise compare to 20 min.
        const score: number = weight * Calc.clipPercentage(changeTime < 3 ? 0 : 1 - ((changeTime - 3) / 17));
        return {
            score: score,
            value: this.routeHistory.getAvgChangeTime() // Date
        };
    }

    getDelayConsistency(): any {
        const stdDev: number = this.routeHistory.getDelayConsistency().valueOf();
        const avg: number = this.routeHistory.getAvgDelay().valueOf();
        const cov: number = stdDev / avg; // coefficient of variation
        const weight: number = this.userPreferences.weight_DelayConsistency;
        /**
         *  < 0.21: on schedule (100%)
         *  > 0.75: mostly delayed (0%)
         */
        const score = weight * Calc.clipPercentage(Calc.linearInterpolatePercentage(cov, 0.75, 0.21));
        return {
            score: score,
            value: this.routeHistory.getDelayConsistency() // Date
        };
    }

    getAvgTravelTime(): any {
        const travelTime: number = this.routeHistory.getAvgTravelTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgTravelTime;
        // QoE(travelTime) = TODO: figure out formula
        const score = weight * Calc.clipPercentage(travelTime / 60);
        return {
            score: undefined,
            value: this.routeHistory.getAvgTravelTime() // Date
        };
    }

    getNumberOfRoutesWithinHour(): any {
        // TODO: modify lc-client
        const period = 30; // minutes between trips
        const weight: number = this.userPreferences.weight_NumberOfRoutesWithinHour;
        /**
         *  < 5: very frequent (100%)
         *  > 60: poor frequency (0%)
         */
        const score = weight * Calc.clipPercentage(Calc.linearInterpolatePercentage(period, 60, 5));
        return undefined;
    }

    getNumberOfMissedConnections(): any {
        // TODO: modify lc-client
        return undefined;
    }

    getPrice(): any {
        // TODO
        return undefined;
    }

    getQoE(): number {
        let sum = 0;
        // sum += this.getAvgTravelTime().score;
        sum += this.getAvgChangeTime().score;
        sum += this.getAvgChangesAmount().score;
        sum += this.getDelayConsistency().score;
        sum += this.getAvgDelay().score;
        // sum += this.getNumberOfMissedConnections().score;
        // sum += this.getNumberOfRoutesWithinHour().score;
        // sum += this.getPrice().score;
        return sum;
    }
}
