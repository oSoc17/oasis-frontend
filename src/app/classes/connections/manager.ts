/* Node modules */
import { ISimpleEvent } from 'strongly-typed-events';

/* Custom modules */
import { Route } from './route';
import { QoE } from './qoe';
import { SearchData } from './searchData';
import { Connection } from './connection';
import { RouteHistory } from './routeHistory';
import { Utils } from '../utils/utils';
import { RouteService } from '../../services/routing.service';

export class Manager {
    // private entryPoints = this.config.servers.reduce((array, server) => array.concat(server.uri), []);
    private entryPoints: [string];
    private routeService: RouteService;
    private _qoeList: QoE[] = [];

    private _dataCount = 0;
    private _httpRequests = 0;
    private _httpResponses = 0;

    constructor(entrypoints: [string]) {
        this.entryPoints = entrypoints;
        if (!this.routeService) {
            this.routeService = new RouteService(this.entryPoints);
        }
        this.routeService.onQueryResult.subscribe((result) => {
            const route = new Route(result.map(con => new Connection(con)));
            for (const qoe of this._qoeList) {
                if (qoe.departureTime.toTimeString() === route.departureTime.toTimeString()) {
                    return qoe.addRoute(route);
                }
            }
            const routeHistory = new RouteHistory([route]);
            this._qoeList.push(new QoE(routeHistory));
            this._qoeList.sort((a, b) => {
                const aTime = (Utils.dateFromTime(a.departureTime.getHours(), a.departureTime.getMinutes()));
                const bTime = (Utils.dateFromTime(b.departureTime.getHours(), b.departureTime.getMinutes()));
                return aTime.valueOf() - bTime.valueOf();
            });
        });
    }

    /**
     * gets QoE object
     * @param searchDataList datalist to query
     * @param deploycheck wether or not deployment should be checked (default: true)
     */
    public getQoE(searchDataList: SearchData[], deploycheck: boolean = true): ISimpleEvent<any> {
        this.onDataUpdate.subscribe(e => this._dataCount++);
        this.onHttpRequest.subscribe(e => this._httpRequests++);
        this.onHttpResponse.subscribe(e => this._httpResponses++);
        return this.routeService.queryPeriod(searchDataList);
    }

    stop() {
        this.routeService.stop();
    }

    /**
     * Returns the eventhandler for Query Results
     */
    public get getRouteListener() {
        return this.routeService.onQueryResult;
    }

    /**
     * Returns the list of all routes with their calculated QoE
     */
    public get qoeList() {
        return this._qoeList;
    }

    /**
     * Returns the amount of connections processed
     */
    public get dataCount() {
        return this._dataCount;
    }

    /**
     * Returns the amount of http requests done
     */
    public get httpRequests() {
        return this._httpRequests;
    }

    /**
     * Returns the amount of http responses received
     */
    public get httpResponses() {
        return this._httpResponses;
    }

    /**
     * Returns the dataUpdate eventhandler
     */
    public get onDataUpdate(): ISimpleEvent<number> {
        return this.routeService.onDataUpdate;
    }

    /**
     * Returns the http Requests eventhandler
     */
    public get onHttpRequest(): ISimpleEvent<number> {
        return this.routeService.onHttpRequest;
    }

    /**
     * Returns the http Responses eventhandler
     */
    public get onHttpResponse(): ISimpleEvent<number> {
        return this.routeService.onHttpResponse;
    }

    /**
     * Returns event that tells when all queries are finished
     */
    public get onComplete(): ISimpleEvent<any> {
        return this.routeService.onComplete;
    }
}
