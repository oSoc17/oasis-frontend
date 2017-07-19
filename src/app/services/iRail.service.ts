// Node Modules
import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Saved dummydata
const stationsData = require('../../dummydata/stations.json');
const config = require('../../config.json');

// Custom modules
import { SearchData } from '../classes/connections/searchData';
import { Utils } from '../classes/utils/utils';

@Injectable()
export class IRailService {
    private uri = config.servers[0].uri;
    private requestOptions = new RequestOptions({
        headers: new Headers({'Accept': 'application/json'}),
        responseType: ResponseContentType.Json
    });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    /**
     * Do a reply in the form as a promise which is delayed by a few seconds
     * @param data an object you expect as a reply
     * @param delay the amount of delay to set in milliseconds - defaulted to 1 second
     */
    fakeReply(data: any, delay: number = Utils.getSecondsValue(1)): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                // console.log(data);
                resolve(data);
            } catch (e) {
                reject(e);
            }
        });
    }

    /**
     * Filter the stations based on a searchQuery
     * @param stations an array of station objects
     * @param query a part of a station name
     */
    filterStations(stations: any, query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(stations.filter((curr) => {
                const names = [curr.standardname.toLowerCase(), curr.name.toLowerCase()];
                query = query.toLowerCase();

                return names[0].indexOf(query) > -1 || names[1].indexOf(query) > -1;
            }));
        });
    }

    /**
     * Get all stations from the server or cache and filter it
     * @param query the name or part of a name of the station
     */
    getStations(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getAllStations().then((data) => {
                return(this.filterStations(data, query));
            }).catch(e => this.handleError(e));
        });
    }

    getAllStations(): Promise<any> {
        /*return this.http.get(`${this.iRailUrl}/stations?format=json`, this.options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);*/

        /* Reply fake data for developement */
        return this.fakeReply(stationsData);
    }

    /* DATE FORMAT: DD/MM/YYYY */
    /* TIME FORMAT: HH:MM */
    getRoutesReadable(query: SearchData): Promise<any> {
        let date = query.travelDate;
        let time = query.travelTime;
        date = new Date(date).toLocaleDateString('en-GB');
        time = time.replace(/\:/g, '');
        date = date.replace(/\//g, '');
        date = `${date.substring(0, 4)}${date.substring(6, 8)}`;
        return this.getRoutes(new SearchData(query.depStation, query.arrStation, time, date, query.timeType));
    }

    getRoutes(query: SearchData): Promise<any> {
      const params = new URLSearchParams();
      params.paramsMap = new Map([['to', [query.arrStation]], ['from', [query.depStation]],
                            ['time', [query.travelTime]], ['timeSel', [query.timeType]],
                            ['date', [query.travelDate]], ['format', ['json']]]);
        const options = new RequestOptions();
        options.headers = this.requestOptions.headers;
        options.responseType = this.requestOptions.responseType;
        options.search = params;

        return new Promise((resolve, reject) => {
            this.http.get(`${this.uri}/connections`, options)
                .toPromise()
                .then((response) => {
                    return resolve(response.json());
                }).catch(er => reject(er));
        });
    }
}
