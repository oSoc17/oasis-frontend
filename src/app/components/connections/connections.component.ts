import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

import { Manager } from '../../classes/manager';
import { QoE } from '../../classes/qoe';
import { Route } from '../../classes/route';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html'
})

export class Connections implements OnInit {
    loading: any = true;
    searchData: SearchData[];
    error: string;
    language: Language = new Language();
    qoeResults: QoE;
    foundRoutes: any[];
    qualityOfExperienceStyle;
    manager: Manager;
    routes: Route[];

    /* Interactive loading */
    dataCount = 0;
    httpRequests = 0;
    httpResponses = 0;

    constructor(private ref: ChangeDetectorRef) {
        this.manager = new Manager();
        this.routes = this.manager.routes;
    }

    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            this.manager.onDataUpdate.subscribe(dataCount => {
                this.dataCount = dataCount;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            this.manager.onHttpRequest.subscribe(httpRequests => {
                this.httpRequests = httpRequests;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            this.manager.onHttpResponse.subscribe(httpResponses => {
                this.httpResponses = httpResponses;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            const onQueryResult = this.manager.getQoE(this.searchData);
            onQueryResult.subscribe(result => {
                console.log(this.routes[0].departureStation);
                this.loading = false;
            });
        } else {
            AppComponent.setPage(0);
        }
    }

    goBack() {
        AppComponent.goBack();
    }

    toPercentage(val) {
        return Math.round(val * 100);
    }

    private formatNumber(number) {
        return ('0' + number).slice(-2);
    }

    toTime(val) {
        const date = new Date(val);
        return `${this.formatNumber(date.getUTCHours())}:${this.formatNumber(date.getUTCMinutes())}`;
    }
}
