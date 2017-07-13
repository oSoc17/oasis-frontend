import { Component, Input, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

import { Manager } from '../../classes/manager';
import { QoE} from '../../classes/qoe'

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

    constructor() {}

    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
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
        return `${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}`;
    }
}
