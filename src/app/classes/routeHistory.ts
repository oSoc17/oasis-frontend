import { Route } from './route';
import { Calc } from './calc';

export class RouteHistory {
    /* contains the historic data of a route */
    public routes: Route[];

    constructor(routes: Route[]) {
        this.routes = routes;
        // TODO: fill array with historic data, how?
    }

    public getAvgTravelTime(): Date {
        /* returns avg travel time based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.getTotalTravelTime().valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getAvgChangesAmount(): number {
        /* returns avg change time based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.getChangesAmount());
        }
        return Calc.avg(data);
    }

    public getAvgDelay(): Date {
        /* returns avg delay based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.getDelay().valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getAvgChangeTime(): Date {
        /* returns avg change time based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.getAvgChangeTime().valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getDelayConsistency() {
        /* returns standard deviation of delays */
        const data: number[] = [];
        for (const route of this.routes){
            data.push(route.getDelay().valueOf());
        }
        return new Date(Calc.stdDev(data));
    }

    public getChangeMissedChance(): number {
        let missed = 0;
        const changes = this.getAvgChangesAmount();
        for (const route of this.routes){
            missed += route.getChangesMissed();
        }
        return missed / changes;
    }

    // TODO: implement more
}
