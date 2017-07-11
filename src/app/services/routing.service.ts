import 'rxjs/add/operator/toPromise';

import {SearchData} from '../classes/searchData';

const Client = require('lc-client');

export class RouteService {
    private planner;
     private static zeroPad(num: number, places: number) {
        const zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join('0') + num;
    }

    // example: ['http://belgianrail.linkedconnections.org/']
    constructor(entryPoints: [string]) {
        this.planner = new Client({'entrypoints': entryPoints});
    }

    query(searchData: SearchData): Promise<any> {
        return new Promise((resolve, reject) => {
            const stop_condition = false;
            this.planner.query(searchData.toJSON(), function (resultStream, source) {
                    resultStream.on('result', function (path) {
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
    /**
     * Does multiple queries with the same configuration. Only the date is different.
     * The time between query dates is determened by the second parameter
     * @param searchData object containing information regarding the query
     * @param period time in days between the dates to query
     * @returns an array of query results
     */
    queryPeriod(searchdata: SearchData, period: number ): Promise<any> {
        return new Promise((resolve, reject) => {
            const searchData = searchdata;
            const ret = [];
            let day = 0;
            let month = 0;
            let year = 0;
            let newdate = '';
            while (ret.length < 10) {
                ret.push(this.query(searchData));
                day = Number(searchData.travelDate.split('/')[0]);
                month = Number(searchData.travelDate.split('/')[1]);
                year = Number(searchData.travelDate.split('/')[2]);
                day -= period;
                newdate = RouteService.zeroPad(day, 2) + '/' + RouteService.zeroPad(month, 2) + '/' + RouteService.zeroPad(year, 2);
                searchData.travelDate = newdate;
            }


            return ret;
        });
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
