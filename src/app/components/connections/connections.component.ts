import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { IRailService } from '../../services/iRail.service';
import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html'
})

export class Connections implements OnInit {
    loading: any = true;
    searchData: SearchData;
    error: string;
    language: Language = new Language();

    constructor(
        private route: ActivatedRoute,
        private IRailService: IRailService,
        private location: Location) {}

    logParams(search: SearchData) {
        console.log(search);
        if (search.arrStation && search.depStation && search.timeType && search.travelDate && search.travelTime) {
            console.log('we got a search request!');
            console.log(search);
            this.IRailService.getRoutesReadable(search).then((data) => {
                console.log(data);
                console.log('Log available routes!');
                // this.error = JSON.stringify(data);
                this.loading = false;
            }).catch(e => {
                this.error = this.language.getMessage('noConnections');
                this.loading = false;
                console.log(e);
            });
        } else {
            this.error = this.language.getMessage('fillEntireSearchForm');
        }
    }

    ngOnInit(): void {
            this.logParams(this.route.params['_value']);
    }

    goBack() {
        this.location.back();
    }
}
