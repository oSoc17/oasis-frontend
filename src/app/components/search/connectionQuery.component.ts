import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDate } from './travelDate.component';

import { SearchData } from '../../classes/searchData';
import { Language } from '../../classes/language';

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
    language: Language = new Language();

    constructor(private router: Router) {}

    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        console.log(!(arriveSt && departSt));
        console.log(arriveSt);
        console.log(departSt);
        if (!(arriveSt && departSt) || arriveSt.id === departSt.id) {
            this.error = this.language.getMessage('errEqualStations');
        } else {
            this.searchData = new SearchData(departSt.id, arriveSt.id, this.travelTime.selectedTime,
                                    new Date(), this.travelTime.selectedType);

            this.router.navigate(['/connections', this.searchData]);
        }
    }
}
