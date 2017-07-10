import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IRailService } from '../../services/iRail.service';

import { SearchData } from '../../classes/searchData';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html',
    styleUrls: ['./styles/connections.component.scss']
})

export class Connections implements OnInit {
    loading: any = true;
    searchData: SearchData;
    error: string;

    constructor(
        private route: ActivatedRoute,
        private IRailService: IRailService) {}

    logParams(search: SearchData) {
        if (search.arrStation && search.depStation && search.timeType && search.travelDate && search.travelTime) {
            console.log('we got a search request!');
            console.log(search);
            console.log('Log available routes!');
            setInterval(() => {
                this.IRailService.getRoutesReadable(search).then((data) => {
                    console.log(data);
                    this.error = JSON.stringify(data);
                    this.loading = false;
                }).catch(e => {
                    this.error = 'No connections found.';
                    console.log(e);
                });
            }, 100);
        } else {
            this.error = 'Please fill in the entire search form.';
        }
    }

    ngOnInit(): void {
            this.logParams(this.route.params['_value']);
    }
}
