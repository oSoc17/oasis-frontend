// Node modules
import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';

// Config
const config = require('../../config.json');

@Injectable()
export class StationService {
    private uri = config.servers[3].uri;
    private requestOptions = new RequestOptions({
        headers: new Headers({ 'Accept': 'application/json' }),
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
            headers: new Headers({ 'Accept': 'application/json' }),
            responseType: ResponseContentType.Json,
            params: myParams
        });
        return this.http.get(this.uri, options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }
}
