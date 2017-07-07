import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/* DUMMYDATA */
const tripsData = require("../../dummydata/trips.json");
const connectionsData = require("../../dummydata/connections.json");
const stationsData = require("../../dummydata/stations.json");

@Injectable()
export class IRailService {
    private iRailUrl = "http://api.irail.be";
    private options = new RequestOptions({
        headers: new Headers({
            'Accept': 'application/json'
        }),
        responseType: ResponseContentType.Json
    });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    fakeReply(data:any): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                console.log(data);
                resolve(data);
            } catch (e) {
                // Require failed
                reject(e);
            }
        });
    }

    getStations(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getAllStations().then((data) => {
                resolve(data.station.filter((curr) => {
                    let names = [curr.standardname.toLowerCase(), curr.name.toLowerCase()];
                    query = query.toLowerCase();

                    return names[0].indexOf(query) > -1 || names[1].indexOf(query) > -1;
                }));
            }).catch(e => this.handleError(e));
        });
    }

    getAllStations(): Promise<any> {
        /* TODO: find a way to cache this for about a day? */
        return this.http.get(`${this.iRailUrl}/stations?format=json`, this.options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);
        /* USE DUMMY DATA */
        /*return this.fakeReply(stationsData);*/
    }

    /* DATE FORMAT: DD/MM/YYYY */
    /* TIME FORMAT: HH:MM */
    getRoutesReadable(to:string, from:string, time:string, date:string, timeSel:string):Promise<any>{
        date = new Date(date).toLocaleDateString('en-GB');
        time = time.replace(/\:/g,'');
        console.log(date);
        date = date.replace(/\//g,'');
        date = `${date.substring(0, 4)}${date.substring(6, 8)}`;
        console.log("Time: " + time + " Date: " + date);
        return this.getRoutes(to, from, time, date, timeSel);
    }

    getRoutes(to:string, from:string, time:string, date:string, timeSel:string):Promise<any>{
      let params = new URLSearchParams();
        params.set("to", to);
        params.set("from", from);
        params.set("time", time);
        params.set('timeSel', timeSel);
        params.set('date', date);
        params.set("format", "json");
        let options = new RequestOptions();
        options.headers = this.options.headers;
        options.responseType = this.options.responseType;
        options.search = params;

        return this.http.get(`${this.iRailUrl}/connections`, options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);

        /* Return Fake Data */
        /* return this.fakeReply(connectionsData);*/
    }
}
