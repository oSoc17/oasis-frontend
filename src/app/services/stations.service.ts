/**
 * Julian still has to make the linked connections endpoint to get stations
 * TODO: Make this once Julian's done
 * Maybe make an intermediate server we can query
 */

 import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';

 const config = require('../../config.json');


 export class StationService {
    private uri = config.servers[0].uri;
    private requestOptions = new RequestOptions({
        headers: new Headers({'Accept': 'application/json'}),
        responseType: ResponseContentType.Json,
        params: new URLSearchParams('')
    });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

     public queryStations(query: string): Promise<any> {
        const myParams = new URLSearchParams();
        myParams.append('q', query);
        const options = new RequestOptions({
        headers: new Headers({'Accept': 'application/json'}),
        responseType: ResponseContentType.Json,
        params: myParams
        });
        return this.http.get(`http://localhost:3000/station`, options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }
 }
