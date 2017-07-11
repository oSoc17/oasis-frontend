import {Route} from "./route";

export class RouteHistory {
    /* contains the historic data of a route */
    public routes: Route[] = [];

    constructor(route: Route) {
        this.routes.push(route);
        // TODO: fill array with historic data
    }

    // TODO: provide avg calculator functions

}
