import { RouteHistory } from './routeHistory';
import { IQoE } from '../interfaces/iQoE';

export class QoE implements IQoE {

    routeHistory: RouteHistory;

    constructor(routeHistory: RouteHistory) {
        this.routeHistory = routeHistory;
    }

    getAvgDelay(): Date {
        return undefined;
    }

    getAvgChangesAmount(): Date {
        return undefined;
    }

    getAvgChangeTime(): Date {
        return undefined;
    }

    getDelayConsistency(): Date {
        return undefined;
    }

    getAvgTravelTime(): Date {
        return undefined;
    }

    getNumberOfRoutesWithinHour(): number {
        return undefined;
    }

    getNumberOfMissedConnections(): number {
        return undefined;
    }

    getPrice(): number {
        return undefined;
    }

    getQoE(weights): number {
        return undefined;
    }
}
