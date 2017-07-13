import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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

    constructor(private route: ActivatedRoute,
        private location: Location, private router: Router) {}

    ngOnInit(): void {
        // this.searchData = JSON.parse(this.route.params['_value']);
        if (AppComponent.searchData) {
            this.searchData = AppComponent.searchData;
            Manager.getQoE(this.searchData).then((result) => {
                this.qoeResults = result;
                this.loading = false;
                console.log(this.qoeResults.getAvgChangesAmount())
                console.log(this.qoeResults);
                console.log(this.qoeResults.getAvgTravelTime());
            }).catch(e => this.error = e);
        } else {
            this.router.navigate(['/']);
        }
    }

    goBack() {
        this.location.back();
    }
}
