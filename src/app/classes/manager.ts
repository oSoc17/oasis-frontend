import { Route } from './route';
import { QoE } from './qoe';
import { SearchData } from './searchData';
import { RouteService } from '../services/routing.service';
import { Connection } from './connection';
import { RouteHistory } from './routeHistory';
import { environment } from '../../environments/environment';
import { UserPreferencesMock } from './userprefs.mock';
import { UserPreferences } from './userprefs';

import { ISimpleEvent } from 'strongly-typed-events';

export class Manager {
    private static config = require('../../config.json');
    // private entryPoints = this.config.servers.reduce((array, server) => array.concat(server.uri), []);
    private entryPoints = Manager.config.entrypoints;
    private routeService: RouteService;
    private routesProcessed: Route[] = [];

    constructor() {
        if (!this.routeService) {
            this.routeService = new RouteService(this.entryPoints);
        }
        this.routeService.onQueryResult.subscribe((result) => {
            this.routesProcessed.push(new Route(result as Connection[]));
            console.log(this.routesProcessed);
        });
    }

    /**
     * gets QoE object
     * @param searchDataList datalist to query
     * @param deploycheck wether or not deployment should be checked (default: true)
     */
    getQoE(searchDataList: SearchData[], deploycheck: boolean = true): ISimpleEvent<any> {
        return this.routeService.queryPeriod(searchDataList);
    }

    public get getRouteListener() {
        return this.routeService.onQueryResult;
    }

    public get routes() {
        // TODO: Make it able to calculate QoE per route.
        return this.routesProcessed;
    }

    public get onDataUpdate(): ISimpleEvent<number> {
        return this.routeService.onDataUpdate;
    }

    public get onHttpRequest(): ISimpleEvent<number> {
        return this.routeService.onHttpRequest;
    }

    public get onHttpResponse(): ISimpleEvent<number> {
        return this.routeService.onHttpResponse;
    }
}
