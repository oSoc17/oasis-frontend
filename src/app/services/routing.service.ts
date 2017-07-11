import 'rxjs/add/operator/toPromise';

import {SearchData} from '../classes/searchData';

import { SimpleEventDispatcher, ISimpleEvent } from 'strongly-typed-events';

const Client = require('lc-client');

export class RouteService {
    private planner;
    private _onQueryResult;
    // example: ['http://belgianrail.linkedconnections.org/']
    constructor(entryPoints: [string]) {
        this.planner = new Client({'entrypoints': entryPoints});
        this._onQueryResult = new SimpleEventDispatcher<any>();
    }

    query(searchData: SearchData): Promise<any> {
        return new Promise((resolve, reject) => {
            const stop_condition = false;
            this.planner.query(searchData.toJSON(), (resultStream, source) => {
                    resultStream.on('result',  (path) => {
                        this._onQueryResult.dispatchAsync(path);
                        resolve(path);
                    });
                    resultStream.on('data', function (connection) {
                        // console.log(connection);
                        // if you're not interested anymore, you can stop the processing by doing this
                        if (stop_condition) {
                            source.close();
                        }
                    });
                    // you can also count the number of HTTP requests done by the interface as follows
                    source.on('request', function (url) {
                        // console.log('Requesting', url);
                    });
                    // you can also catch when a response is generated HTTP requests done by the interface as follows
                    source.on('response', function (url) {
                        // console.log('Response received for', url);
                    });
                });
        });
    }
    /**
     * Does a query for each of the SearchData objects in searchDataList. promise resolves when all queries resolve.
     * @param searchDataList list of SearchData objects
     */
    public queryPeriod(searchDataList: SearchData[]): Promise<any> {
        const promiselist = [];
         searchDataList.forEach(searchData => {
            promiselist.push(this.query(searchData));
        });
        return Promise.all(promiselist);
    }
    public get onQueryResult(): ISimpleEvent<any> {
        return this._onQueryResult.asEvent();
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
