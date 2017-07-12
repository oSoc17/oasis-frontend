import 'rxjs/add/operator/toPromise';
import { IRouteService } from './routing.service';
import { ISimpleEvent } from 'strongly-typed-events';
import { SearchData } from '../classes/searchData';

const lc_query_result = require('../../dummydata/lc-query-result.json');

export class RouteMockService implements IRouteService {

    onQueryResult: ISimpleEvent<any>;

    query(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(lc_query_result);
            }, Math.ceil(500 + Math.random() * 500));
        });
    }

    queryPeriod(searchDataList: SearchData[]): Promise<any[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([lc_query_result]);
            }, Math.ceil(500 + Math.random() * 500));
        });
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
