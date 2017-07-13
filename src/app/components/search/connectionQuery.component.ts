import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDate } from './travelDate.component';

import { SearchData, GetLatest } from '../../classes/searchData';
import { Language } from '../../classes/language';

import { AppComponent } from '../app.component';

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
    searchData: SearchData[];
    error: string;
    language: Language = new Language();

    constructor(private router: Router) {
    }

    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        console.log(!(arriveSt && departSt));
        console.log(arriveSt);
        console.log(departSt);
        if (!(arriveSt && departSt) || arriveSt.id === departSt.id) {
            this.error = this.language.getMessage('errEqualStations');
        } else {
            this.searchData = []
            for (let i = 0; i < 7; i++) {
                    if (this.travelDate.selectedDays['' + i]) {
                        this.searchData = this.searchData.concat(
                            SearchData.createPeriodicList(departSt.id, arriveSt.id, this.travelTime.selectedTime,
                                GetLatest((i + 1) % 6), this.travelTime.selectedType, 7, 1 ));
                    }
            }

            AppComponent.searchData = this.searchData;

            this.router.navigate(['/connections']);
        }
    }
}
