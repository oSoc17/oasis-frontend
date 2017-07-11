import 'rxjs/add/operator/toPromise';

import {SearchData} from '../classes/searchData';

import {SimpleEventDispatcher, ISimpleEvent} from 'strongly-typed-events';

const Client = require('lc-client');

export class RouteService {
    private planner;
    private _onQueryResult = new SimpleEventDispatcher<any>();
    // example: ['http://belgianrail.linkedconnections.org/']
    constructor(entryPoints: [string]) {
        this.planner = new Client({'entrypoints': entryPoints});
    }

    query(searchData: SearchData): Promise<any> {
        return new Promise((resolve, reject) => {
            const stop_condition = false;
            this.planner.query(searchData.toJSON(), function (resultStream, source) {
                    resultStream.on('result', function (path) {
                        this._onQueryResult.dispatch(path);
                        return resolve(path);
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
    public queryPeriod(searchDataList: SearchData[]) {
        return new Promise((resolve, reject) => {
             const ret = [];
        searchDataList.forEach(searchData => {
            this.query(searchData).then((result) => {
                ret.push(result);
            });
        });
        while (ret.length < searchDataList.length) {}
        return resolve(ret);
        });
    }
    public get onQueryResult(): ISimpleEvent<any> {
        return this._onQueryResult.asEvent();
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
