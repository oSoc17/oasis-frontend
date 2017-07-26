// Custom modules
import { Route } from './route';
import { Calc } from '../utils/calc';

export class RouteHistory {
    public routes: Route[];

    /**
     * construct the routeHistory object
     * This contains historic data of a route
     * @param routes an array of route objects
     */
    constructor(routes: Route[]) {
        if (!routes) {
            this.routes = [];
        }
        this.routes = routes;
    }

    /**
     * get the median travel duration of the historic array
     */
    public getAvgTravelTime(): Date {
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.totalTravelTime.valueOf());
        }
        return new Date(Calc.median(data));
    }

    /**
     * get the median amount of changes over the historic data array
     */
    public getAvgChangesAmount(): number {
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.changesAmount);
        }
        return Calc.median(data);
    }

    /**
     * Returns an array of changes
     */
    public getChanges() {
        return this.routes[0].getChanges();
    }

    /**
     * get the average delay duration over the historic data array
     */
    public getAvgDelay(): Date {
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.delay.valueOf());
        }
        return new Date(Calc.avg(data));
    }

    /**
     * get the average time for a change over the historic array
     */
    public getAvgChangeTime(): Date {
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.avgChangeTime.valueOf());
        }
        return new Date(Calc.avg(data));
    }

    /**
     * get the consistency of the delays over the historic data array
     */
    public getDelayConsistency() {
        const data: number[] = [];
        for (const route of this.routes) {
            data.push(route.delay.valueOf());
        }
        return new Date(Calc.stdDev(data));
    }

    /**
     * get a total of all the possible missed connections over the historic data array
     */
    public getChangeMissedChance(): number {
        // TODO: check if this actually makes sense?
        let missed = 0;
        let changes = 0;
        for (const route of this.routes) {
            missed += route.getChangesMissed();
            // console.log('missed', missed);
            changes += route.changesAmount;
        }
        // console.log(missed + ' / ' + changes);
        // Divide by 0 check... - there are no changes...
        return changes > 0 ? missed / changes : 0;
    }
}
