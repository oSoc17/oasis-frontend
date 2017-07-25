// Custom modules
import { RouteHistory } from '../connections/routeHistory';

// Interfaces
import { IQoE } from '../../interfaces/iQoE';

export class QoEMock implements IQoE {

    routeHistory: RouteHistory;

    constructor(routeHistory: RouteHistory) {
        this.routeHistory = routeHistory;
    }

    getAvgDelay(): any {
        return {
            score: 0.3,
            value: new Date()
        }
    }

    getAvgChangesAmount(): any {
        return {
            score: 0,
            value: 1
        }
    }

    getAvgChangeTime(): any {
        return {
            score: 0,
            value: new Date()
        }
    }

    getDelayConsistency(): any {
        return {
            score: 0.5,
            value: 0.75
        }
    }

    getAvgTravelTime(): any {
        return {
            score: 1,
            value: new Date()
        }
    }

    getNumberOfRoutesWithinHour(): any {
        return {
            score: 0.7,
            value: 2
        }
    }

    getNumberOfMissedConnections(): any {
        return {
            score: 0.2,
            value: 1
        }
    }

    getPrice(): any {
        return {
            score: 0.2,
            value: 5
        }
    }

    getQoE(): any {
        return {
            score: 0.85
        }
    }

}
