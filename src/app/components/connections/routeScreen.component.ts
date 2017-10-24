// Node modules
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ISimpleEvent } from 'strongly-typed-events';

// Custom modules
import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/connections/searchData';
import { Language } from '../../classes/userData/language';
import { Manager } from '../../classes/connections/manager';
import { QoE } from '../../classes/connections/qoe';
import { ServerConfig } from '../../classes/utils/serverConfig';

@Component({
    selector: 'route-screen',
    templateUrl: './templates/routeScreen.component.html',
    styleUrls: ['./styles/connections.component.scss']
})

/**
 * A list of route components provided with the search string and interactive loading chips
 */
export class RouteScreen implements OnInit {
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
    @Input() pageChange: ISimpleEvent<number>;

    // Interactive loading
    dataCount = 0;
    httpRequests = 0;
    httpResponses = 0;

    constructor(private cd: ChangeDetectorRef) {
        if (AppComponent.searchData) {
            const searchQuery = AppComponent.searchData[0];
            if (ServerConfig.equalUris(searchQuery.depStation, searchQuery.arrStation)) {
                const entrypoint = ServerConfig.getServerByStation(AppComponent.searchData[0].depStation);
                this.manager = new Manager(entrypoint);
                this.qoeList = this.manager.qoeList;
                this.manager.getRouteListener.subscribe(() => {
                    this.dataCount = this.manager.dataCount;
                    this.httpRequests = this.manager.httpRequests;
                    this.httpResponses = this.manager.httpResponses;
                    this.qoeList = this.manager.qoeList;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    console.log('route found');
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
        this.finished = false;
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            const onQueryResult = this.manager.getQoE(this.searchData);
            onQueryResult.subscribe((result) => { this.loading = false; });
            // Commented out for improved render performance
            /*this.manager.onDataUpdate.subscribe(e => this.dataCount = this.manager.dataCount);
            this.manager.onHttpRequest.subscribe(e => this.httpRequests = this.manager.httpRequests);
            this.manager.onHttpResponse.subscribe(e => this.httpResponses = this.manager.httpResponses);*/
            this.manager.onComplete.subscribe(e => this.finished = true);
        } else {
            AppComponent.setPage(0);
        }
        if (this.pageChange) {
            this.pageChange.subscribe(e => {
                this.finished = true;
                this.manager = null;
            });
        }
    }

    /**
     * Go back one page
     */
    goBack() {
        AppComponent.goBack();
    }

}
