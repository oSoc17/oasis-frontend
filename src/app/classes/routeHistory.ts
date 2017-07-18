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
            data.push(route.totalTravelTime.valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getAvgChangesAmount(): number {
        /* returns avg change time based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.changesAmount);
        }
        return Calc.avg(data);
    }

    public getAvgDelay(): Date {
        /* returns avg delay based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.delay.valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getAvgChangeTime(): Date {
        /* returns avg change time based on historic data */
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.avgChangeTime.valueOf());
        }
        return new Date(Calc.avg(data));
    }

    public getDelayConsistency() {
        /* returns standard deviation of delays */
        const data: number[] = [];
        for (const route of this.routes){
            data.push(route.delay.valueOf());
        }
        return new Date(Calc.stdDev(data));
    }

    public getChangeMissedChance(): number {
        let missed = 0;
        let changes = 0;
        for (const route of this.routes){
            missed += route.getChangesMissed();
            changes += route.changesAmount;
        }
        console.log(missed + ' / ' + changes)
        return missed / changes;
    }

    // TODO: implement more
}
