// Node modules
import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';

// Config
const config = require('../../config.json');

@Injectable()
export class TripscoreService {
    private uri = config.servers['tripscoreAPI'].uri;
    private requestOptions = new RequestOptions({
        headers: new Headers({ 'Accept': 'application/json' }),
        responseType: ResponseContentType.Json,
        params: new URLSearchParams('')
    });

    constructor(private http: Http) { }

    /**
     * handles errors the proper way
     * @param error the error object
     */
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    /**
     * Gets an array of stations from the api
     * @param query name string
     */
    public queryStations(query: string, company: string, type: string): Promise<any> {
        const myParams = new URLSearchParams();
        if (query) {
            myParams.append('q', query);
        }
        if (company) {
            myParams.append('company', company);
        }
        if (type) {
            myParams.append('type', type);
        }
        myParams.append('children', 'false');
        const options = new RequestOptions({
            headers: new Headers({ 'Accept': 'application/json' }),
            responseType: ResponseContentType.Json,
            params: myParams
        });
        return this.http.get(`${this.uri}/station`, options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
    }

    /**
     * Queries the tripscore API for station details based on id
     * @param id the station id
     */
    public searchStation(id: string): Promise<any> {
        const myParams = new URLSearchParams();
        myParams.append('id', id);
        const options = new RequestOptions({
            headers: new Headers({ 'Accept': 'application/json' }),
            responseType: ResponseContentType.Json,
            params: myParams
        });
        return this.http.get(`${this.uri}/station`, options)
            .toPromise()
            .then((response) => response.json().stations)
            .catch(this.handleError);
    }
}
