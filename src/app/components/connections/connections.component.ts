import { Component, Input, OnInit, NgZone } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/connections/searchData';
import { Language } from '../../classes/userData/language';

import { Manager } from '../../classes/connections/manager';
import { QoE } from '../../classes/connections/qoe';
import { Route } from '../../classes/connections/route';
import { ServerConfig } from '../../classes/utils/serverConfig';

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

    constructor(private zone: NgZone) {
        if (AppComponent.searchData) {
            const searchQuery = AppComponent.searchData[0];
            if (ServerConfig.equalUris(searchQuery.depStation, searchQuery.arrStation)) {
                console.log(AppComponent.searchData[0].depStation);
                const entrypoint = ServerConfig.getServerByStation(AppComponent.searchData[0].depStation);
                this.manager = new Manager(entrypoint);
                this.qoeList = this.manager.qoeList;
                this.manager.getRouteListener.subscribe(() => {
                    this.zone.run(() => {
                        console.log('Refresh connections');
                    });
                });
                return;
            }
        }
        AppComponent.setPage(0);
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
