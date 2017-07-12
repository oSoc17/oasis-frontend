import { RouteHistory } from './routeHistory';
import { IQoE } from '../interfaces/iQoE';

export class QoEMock implements IQoE {

    routeHistory: RouteHistory;

    constructor(routeHistory: RouteHistory) {
        this.routeHistory = routeHistory;
    }

    getAvgDelay(): any {
        return {
            score: '3',
            value: '4'
        }
    }

    getAvgChangesAmount(): any {
        return {
            score: '0',
            value: '1'
        }
    }

    getAvgChangeTime(): any {
        return {
            score: '0',
            value: '00:12'
        }
    }

    getDelayConsistency(): any {
        return {
            score: '',
            value: '00:02'
        }
    }

    getAvgTravelTime(): any {
        return {
            score: '0',
            value: '00:53'
        }
    }

    getNumberOfRoutesWithinHour(): any {
        return {
            score: '2',
            value: '8'
        }
    }

    getNumberOfMissedConnections(): any {
        return {
            score: '2',
            value: ''
        }
    }

    getPrice(): any {
        return {
            score: '2',
            value: ''
        }
    }

    getQoE(weights: any): any {
        return {
            score: '10'
        }
    }

}
