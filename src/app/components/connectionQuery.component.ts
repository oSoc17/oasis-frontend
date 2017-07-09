import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDate } from './travelDate.component';

import { SearchData } from '../classes/searchData';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(TravelTime) travelTime: TravelTime;
    @ViewChild(TravelDate) travelDate: TravelDate;
    @Output() routeUpdated = new EventEmitter();
    searchData: SearchData;
    error: string;

    constructor(private router: Router) {}

    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        if (arriveSt.id === departSt.id) {
            this.error = 'stations can\'t be the same.';
        } else {
            this.searchData = new SearchData(departSt.id, arriveSt.id, this.travelTime.selectedTime,
                                    this.travelDate.selectedDate, this.travelTime.selectedType);

            this.router.navigate(['/connections', this.searchData]);
        }
    }
}
