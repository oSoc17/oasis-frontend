import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/connections/searchData';
import { Language } from '../../classes/userData/language';

import { Manager } from '../../classes/connections/manager';
import { QoE } from '../../classes/connections/qoe';
import { Route } from '../../classes/connections/route';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html',
    styleUrls: ['./styles/connections.component.scss']
})

export class Connections implements OnInit {
    loading: any = true;
    finished: any = false;
    searchData: SearchData[];
    error: string;
    language: Language = new Language();
    qoeResults: QoE;
    foundRoutes: any[];
    qualityOfExperienceStyle;
    manager: Manager;
    qoeList: QoE[];
    searchString = AppComponent.searchString;

    // Interactive loading
    dataCount = 0;
    httpRequests = 0;
    httpResponses = 0;

    constructor(private ref: ChangeDetectorRef) {
        this.manager = new Manager();
        this.qoeList = this.manager.qoeList;
        // This improves performance
        setInterval(() => {
            this.ref.detectChanges();
            // timeout handled by lc-client now
            // if ((this.dataCount > 2000 || this.httpResponses > 1500) && this.qoeList.length === 0) {
            //     this.finished = true;
            //     this.manager.stop()
            //     this.error = 'routing timed out';
            // }
        }, 100);
    }

    /**
     * Triggers when the component initializes
     */
    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            const onQueryResult = this.manager.getQoE(this.searchData);
            onQueryResult.subscribe((result) => {this.loading = false; });
            this.manager.onDataUpdate.subscribe(e => this.dataCount = this.manager.dataCount);
            this.manager.onHttpRequest.subscribe(e => this.httpRequests = this.manager.httpRequests);
            this.manager.onHttpResponse.subscribe(e => this.httpResponses = this.manager.httpResponses);
            this.manager.onComplete.subscribe(e => this.finished = true);
        } else {
            AppComponent.setPage(0);
        }
    }

    /**
     * Go back one page
     */
    goBack() {
        AppComponent.goBack();
    }

}
