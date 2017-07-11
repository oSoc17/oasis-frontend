import 'rxjs/add/operator/toPromise';

const lc_query_result = require('../../dummydata/lc-query-result.json');

export class RouteMockService {

    query(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(lc_query_result);
            } , Math.ceil( 500 + Math.random() * 500));
        });
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
