// Node modules
import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';

// Config
const config = require('../../config.json');

@Injectable()
export class TripscoreService {
    private static stationIDs: any = {};
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
    public queryStations(query: string): Promise<any> {
        const myParams = new URLSearchParams();
        myParams.append('q', query);
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
        if (TripscoreService.stationIDs[id]) {
            return new Promise((resolve, reject) => {
                // Set timeout to emulate server lag and to prevent extreme hanging of the app
                setTimeout(() => {
                    resolve(TripscoreService.stationIDs[id]);
                }, 100);
            });
        } else {
            return this.http.get(`${this.uri}/station`, options)
                .toPromise()
                .then((response: any) => {
                    const stations = response.json().stations;
                    if (stations && stations[0]) {
                        TripscoreService.stationIDs[stations[0]['id']] = stations;
                    }
                    return stations;
                })
                .catch(this.handleError);
        }
    }
}
