import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

import { Manager } from '../../classes/manager';
import { QoE} from '../../classes/qoe'

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

    /* Interactive loading */
    dataCount = 0;
    httpRequests = 0;
    httpResponses = 0;

    constructor(private ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            Manager.getRouteService.onDataUpdate.subscribe(dataCount => {
                this.dataCount = dataCount;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            Manager.getRouteService.onHttpRequest.subscribe(httpRequests => {
                this.httpRequests = httpRequests;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            Manager.getRouteService.onHttpResponse.subscribe(httpResponses => {
                this.httpResponses = httpResponses;
                // Force update because subscribe is async and angular doesn't catch that in autoupdate
                this.ref.detectChanges();
            });
            Manager.getRouteService.onQueryResult.subscribe(() => console.log('Query result received.'));
            Manager.getQoE(this.searchData).then((result) => {
                this.qoeResults = result;
                this.loading = false;
                this.qualityOfExperienceStyle = {
                    width: `${this.toPercentage(this.qoeResults.getQoE())}%`
                }
                console.log(this.qoeResults);
            }).catch(e => this.error = e);
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
