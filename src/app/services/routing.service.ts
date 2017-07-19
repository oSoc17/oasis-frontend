// Node modules
import 'rxjs/add/operator/toPromise';
import { SimpleEventDispatcher, ISimpleEvent } from 'strongly-typed-events';
const Client = require('lc-client');

// Custom modules
import {SearchData} from '../classes/connections/searchData';

export interface IRouteService {
    onQueryResult: ISimpleEvent<any>;
    query(searchData: SearchData): Promise<any>;
    queryPeriod(searchDataList: SearchData[]): ISimpleEvent<any>;
}

export class RouteService implements IRouteService {
    private planner;
    private _onQueryResult;
    private _onDataUpdate;
    private _onHttpRequest;
    private _onHttpResponse;
    private _onComplete;

    /**
     * Constructor to create a routing service instance
     * @param entryPoints example: ['http://belgianrail.linkedconnections.org/']
     */
    constructor(entryPoints: [string]) {
        this.planner = new Client({'entrypoints': entryPoints});
        this._onQueryResult = new SimpleEventDispatcher<any>();
        this._onDataUpdate = new SimpleEventDispatcher<any>();
        this._onHttpRequest = new SimpleEventDispatcher<any>();
        this._onHttpResponse = new SimpleEventDispatcher<any>();
        this._onComplete = new SimpleEventDispatcher<any>();
    }

    /**
     * Continuously query the linked connections for a certain timespan
     * @param searchData a searchData object to query
     * @param cb a callback when all the results are found
     * @param paths the array of paths where it should add to
     * @param dataCount the amount of connections processed
     * @param httpRequests the amount of httpRequests done
     * @param httpResponses the amount of httpResponses received
     */
    private continuousQuery(searchData: SearchData, cb, paths = [], dataCount = 0, httpRequests = 0, httpResponses = 0) {
        const self = this;

        if (!searchData.latestDepartTime) {
            // reject('Invalid latestDepartTime!');
            return console.log('Invalid latestDepartTime!');
        }

        if (searchData.departureTime.valueOf() + 60000 > searchData.latestDepartTime.valueOf()) {
            console.log('Total connections processed ', dataCount);

            return cb(paths);
        }

        this.planner.query(searchData, (resultStream, source) => {
            let result = false;

            resultStream.once('result',  (path) => {
                searchData.departureTime = new Date(new Date(path[0].departureTime).getTime() + 60000);
                paths.push(path);
                self.continuousQuery(searchData, cb, paths, dataCount, httpRequests, httpResponses);
                this._onQueryResult.dispatch(path);
                result = true;
            });

            resultStream.on('data', (data) => {
                // console.log(data);
                // Processed connections
                dataCount++;
                self._onDataUpdate.dispatch(dataCount);
                if (result) {
                    if (result) {
                        for (const event of resultStream._events.data) {
                            source.removeListener('data', event);
                        }
                    }
                }
            });

            source.on('request', () => {
                // HTTP Request
                httpRequests++;
                self._onHttpRequest.dispatch(httpRequests);
                if (result) {
                    for (const event of source._events.request) {
                        source.removeListener('request', event);
                    }
                }
            });

            source.on('response', () => {
                // HTTP Respons
                httpResponses++;
                self._onHttpResponse.dispatch(httpResponses);
                // console.log(source);
                // console.log(require('events').EventEmitter.listenerCount(source, 'response'));
                if (result) {
                    for (const event of source._events.response) {
                        source.removeListener('response', event);
                    }
                }
            });
        });
    }

    /**
     * do a single query on the linkedconnections data
     * @param searchData searchData instance to query on
     */
    query(searchData: SearchData): Promise<any> {
        searchData = searchData.toJSON();
        return new Promise((resolve, reject) => {
            // console.log(searchData);

            this.continuousQuery(searchData, resolve);
        });
    }

    /**
     * Does a query for each of the SearchData objects in searchDataList. promise resolves when all queries resolve.
     * @param searchDataList list of SearchData objects
     */
    public queryPeriod(searchDataList: SearchData[]): ISimpleEvent<any>  {
        const promiselist = [];
        searchDataList.forEach(searchData => {
             promiselist.push(this.query(searchData));
        });
            Promise.all(promiselist).then((res) => {
                this._onComplete.dispatch(res);
            });
        return this._onQueryResult;

        // Test event handlers
        /*this.onDataUpdate.subscribe(dataCount => console.log(`Connections processed: ${dataCount}`));
        this.onHttpRequest.subscribe(httpRequests => console.log(`HTTP Requests: ${httpRequests}`));
        this.onHttpResponse.subscribe(httpResponses => console.log(`HTTP Responses: ${httpResponses}`));
        this.onQueryResult.subscribe(queryResult => console.log(`HTTP Responses: ${queryResult}`));*/
    }

    /**
     * An event handlers that triggers when we get a query result
     */
    public get onQueryResult(): ISimpleEvent<any> {
        return this._onQueryResult.asEvent();
    }

    /**
     * Event that triggers when all queries are completed
     */
    public get onComplete(): ISimpleEvent<any> {
        return this._onComplete.asEvent();
    }

    /**
     * Event that triggers when a connection is processed
     */
    public get onDataUpdate(): ISimpleEvent<number> {
        return this._onDataUpdate.asEvent();
    }

    /**
     * Event that triggers when a http request is executed
     */
    public get onHttpRequest(): ISimpleEvent<number> {
        return this._onHttpRequest.asEvent();
    }

    /**
     * Event that triggers on http Responses
     */
    public get onHttpResponse(): ISimpleEvent<number> {
        return this._onHttpResponse.asEvent();
    }

    /**
     * Function to properly handle errors
     * @param error an Error instance
     */
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
