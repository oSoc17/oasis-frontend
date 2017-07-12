import { RouteHistory } from './routeHistory';
import { IQoE } from '../interfaces/iQoE';
import { IUserPreferences } from "../interfaces/iUserPreferences";

export class QoE implements IQoE {

    private routeHistory: RouteHistory;
    private userPreferences: IUserPreferences;

    constructor(routeHistory: RouteHistory, preference: IUserPreferences = null) {
        this.routeHistory = routeHistory;
        this.userPreferences = preference;
    }

    getAvgDelay(): any {
        const delay: number = this.routeHistory.getAvgDelay().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgDelay;
        // QoE(delay) = 1 - delay / worst case delay
        const score = weight * (1 - delay / 60);
        return {
            score: score,
            value: delay
        };
    }

    getAvgChangesAmount(): any {
        const changes: number = this.routeHistory.getAvgChangesAmount();
        const weight: number = this.userPreferences.weight_AvgChangesAmount;
        // QoE(changes) = 1 - changes / worst case changes
        const score: number = weight * (1 - changes / 5);
        return {
            score: score,
            value: changes
        };
    }

    getAvgChangeTime(): any {
        const changeTime: number = this.routeHistory.getAvgChangeTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgChangeTime;
        // QoE(changeTime) = 0 if less than 3 min., otherwise compare to 20 min.
        const score: number = weight * (changeTime < 3 ? 0 : 1 - ((changeTime - 3) / 17));
        return {
            score: score,
            value: changeTime
        };
    }

    getDelayConsistency(): any {
        const delayConsistency: number = this.routeHistory.getDelayConsistency().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_DelayConsistency;
        // QoE(stdDev) = 1 - stdDev / worst case stdDev
        const score = weight * (1 - delayConsistency / 60);
        return {
            score: score,
            value: delayConsistency
        };
    }

    getAvgTravelTime(): any {
        const travelTime: number = this.routeHistory.getAvgTravelTime().valueOf() / 60000; // in minutes
        const weight: number = this.userPreferences.weight_AvgTravelTime;
        // QoE(travelTime) = TODO: figure out formula
        const score = weight * (travelTime / 60);
        return {
            score: score,
            value: travelTime
        };
    }

    getNumberOfRoutesWithinHour(): any {
        // TODO: modify lc-client
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

    getQoE(weights): number {
        let sum = 0;
        sum += this.getAvgTravelTime();
        sum += this.getAvgChangeTime();
        sum += this.getAvgChangesAmount();
        sum += this.getDelayConsistency();
        sum += this.getAvgDelay();
        // sum += this.getNumberOfMissedConnections();
        // sum += this.getNumberOfRoutesWithinHour();
        // sum += this.getPrice();
        return sum;
    }
}
