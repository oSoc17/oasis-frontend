import 'rxjs/add/operator/toPromise';

import {SearchData} from '../classes/searchData';

import { SimpleEventDispatcher, ISimpleEvent } from 'strongly-typed-events';

const Client = require('lc-client');

export interface IRouteService {
    onQueryResult: ISimpleEvent<any>;
    query(searchData: SearchData): Promise<any>;
    queryPeriod(searchDataList: SearchData[]): Promise<any[]>;
}

export class RouteService implements IRouteService {
    private planner;
    private _onQueryResult;
    // example: ['http://belgianrail.linkedconnections.org/']
    constructor(entryPoints: [string]) {
        this.planner = new Client({'entrypoints': entryPoints});
        this._onQueryResult = new SimpleEventDispatcher<any>();
    }

    private continuousQuery(searchData: SearchData, cb, paths = [], dataCount = 0) {
        if (!searchData.latestDepartTime) {
            // reject('Invalid latestDepartTime!');
            return console.log('Invalid latestDepartTime!');
        }

        if (searchData.departureTime.valueOf() + 60000 > searchData.latestDepartTime.valueOf()) {
            console.log('Total connections processed ', dataCount);
            return cb(paths);
        }

        this.planner.query(searchData, (resultStream, source) => {
            resultStream.on('result',  (path) => {
                // Route found
                console.log('Route found!');
                console.log('Depart time: ', path[0].departureTime);
                console.log(path);
                searchData.departureTime = new Date(new Date(path[0].departureTime).getTime() + 60000);
                paths.push(path);
                this.continuousQuery(searchData, cb, paths, dataCount);
            });

            resultStream.on('data', function (connection) {
                // Processed connections
                console.log('Datacount: ', dataCount);
                dataCount++;
            });

            source.on('request', function (url) {
                // HTTP Request
            });

            source.on('response', function (url) {
                // HTTP Respons
            });
        });
    }

    query(searchData: SearchData): Promise<any> {
        searchData = searchData.toJSON();
        return new Promise((resolve, reject) => {
            console.log(searchData);

            this.continuousQuery(searchData, (data) => {
                console.log('resolve data');
                console.log(data);
                resolve(data[0]);
            });
        });
    }

    /**
     * Does a query for each of the SearchData objects in searchDataList. promise resolves when all queries resolve.
     * @param searchDataList list of SearchData objects
     */
    public queryPeriod(searchDataList: SearchData[]): Promise<any[]> {
        const promiselist = [];
        searchDataList.forEach(searchData => {
            promiselist.push(this.query(searchData));
        });
        console.log(promiselist);
        return Promise.all(promiselist);
    }

    public get onQueryResult(): ISimpleEvent<any> {
        return this._onQueryResult.asEvent();
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
