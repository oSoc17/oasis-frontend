import {Route} from "./route";
import {Average} from "./average";

export class RouteHistory {
    /* contains the historic data of a route */
    public routes: Route[] = [];

    constructor(route: Route) {
        this.routes.push(route);
        // TODO: fill array with historic data, how?
    }

    public getAvgTravelTime(): Date {
        /* returns avg travel time based on historic data */
        let data: number[] = [];
        for(let route of this.routes)
            data.push(route.getTotalTravelTime().valueOf());
            return new Date(Average.calculate(data));
    }

    public getAvgChangesAmount(): number {
        /* returns avg change time based on historic data */
        let data: number[] = [];
        for(let route of this.routes)
            data.push(route.getInterMediateStopsAmount().valueOf());
            return Average.calculate(data);
    }

    public getAvgDelay(): Date{
        /* returns avg delay based on historic data */
        let data: number[] = [];
        for(let route of this.routes)
            data.push(route.getDelay().valueOf());
        return new Date(Average.calculate(data));
    }

    public getAvgChangeTime(): Date {
        /* returns avg change time based on historic data */
        let data: number[] = [];
        for(let route of this.routes)
            data.push(route.getAvgChangeTime().valueOf());
        return new Date(Average.calculate(data));
    }

    // TODO: implement more
}
