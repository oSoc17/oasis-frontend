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
    private _qoeList: QoE[] = [];

    private _dataCount = 0;
    private _httpRequests = 0;
    private _httpResponses = 0;

    private genTime(hours, minutes) {
        const date = new Date(0);
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
    }

    constructor() {
        if (!this.routeService) {
            this.routeService = new RouteService(this.entryPoints);
        }
        this.routeService.onQueryResult.subscribe((result) => {
            const route = new Route(result);
            for (const qoe of this._qoeList) {
                if (qoe.departureTime.toTimeString() === route.departureTime.toTimeString()) {
                    return qoe.addRoute(route);
                }
            }
            const routeHistory = new RouteHistory([route]);
            this._qoeList.push(new QoE(routeHistory, new UserPreferences()));
            this._qoeList.sort((a, b) => {
                const aTime = (this.genTime(a.departureTime.getHours(), a.departureTime.getMinutes()));
                const bTime = (this.genTime(b.departureTime.getHours(), b.departureTime.getMinutes()));
                return aTime.valueOf() - bTime.valueOf();
            });
            // console.log(this._qoeList);
        });
    }

    /**
     * gets QoE object
     * @param searchDataList datalist to query
     * @param deploycheck wether or not deployment should be checked (default: true)
     */
    getQoE(searchDataList: SearchData[], deploycheck: boolean = true): ISimpleEvent<any> {
        // console.log(searchDataList);
        this.onDataUpdate.subscribe(e => this._dataCount++);
        this.onHttpRequest.subscribe(e => this._httpRequests++);
        this.onHttpResponse.subscribe(e => this._httpResponses++);
        return this.routeService.queryPeriod(searchDataList);
    }

    public get getRouteListener() {
        return this.routeService.onQueryResult;
    }

    public get qoeList() {
        // TODO: Make it able to calculate QoE per route.
        return this._qoeList;
    }

    public get dataCount() {
        return this._dataCount;
    }

    public get httpRequests() {
        return this._httpRequests;
    }

    public get httpResponses() {
        return this._httpResponses;
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
