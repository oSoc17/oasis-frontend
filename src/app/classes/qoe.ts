import { RouteHistory } from './routeHistory';
import { IQoE } from '../interfaces/iQoE';
import { IUserPreferences } from '../interfaces/iUserPreferences';

export class QoE implements IQoE {

    private routeHistory: RouteHistory;
    private userPreferences: IUserPreferences;

    constructor(routeHistory: RouteHistory, preference: IUserPreferences) {
        this.routeHistory = routeHistory;
        this.userPreferences = preference;
    }

    getAvgDelay(): any {
        const delay: number = this.routeHistory.getAvgDelay().valueOf() / 60000;
        // TODO: review QoE calculation
        // QoE(Delay) = 1 - delay / worst case delay
        const score = this.userPreferences.weight_AvgDelay * (1 - delay / 60);
        return {
            score: score,
            value: delay
        };
    }

    getAvgChangesAmount(): any {
        return undefined;
    }

    getAvgChangeTime(): any {
        return undefined;
    }

    getDelayConsistency(): any {
        return undefined;
    }

    getAvgTravelTime(): any {
        return undefined;
    }

    getNumberOfRoutesWithinHour(): any {
        return undefined;
    }

    getNumberOfMissedConnections(): any {
        return undefined;
    }

    getPrice(): any {
        return undefined;
    }

    getQoE(weights): any {
        return undefined;
    }
}
