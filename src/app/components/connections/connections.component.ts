import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

import { Manager } from '../../classes/manager';
import { QoE } from '../../classes/qoe';
import { Route } from '../../classes/route';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html',
    styleUrls: ['./styles/connections.component.scss']
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
    qoeList: QoE[];

    /* Interactive loading */
    dataCount = 0;
    httpRequests = 0;
    httpResponses = 0;

    constructor(private ref: ChangeDetectorRef) {
        this.manager = new Manager();
        this.qoeList = this.manager.qoeList;
        // This improves performance
        setInterval(() => {
            this.ref.detectChanges();
        }, 100);
    }

    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            const onQueryResult = this.manager.getQoE(this.searchData);
            onQueryResult.subscribe(result => this.loading = false);
            this.manager.onDataUpdate.subscribe(e => this.dataCount = this.manager.dataCount);
            this.manager.onHttpRequest.subscribe(e => this.httpRequests = this.manager.httpRequests);
            this.manager.onHttpResponse.subscribe(e => this.httpResponses = this.manager.httpResponses);
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
