import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDate } from './travelDate.component';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(TravelTime) depTime: TravelTime;
    @ViewChild(TravelDate) depDate: TravelDate;
    @Output() routeUpdated = new EventEmitter();

    constructor(
        private IRailService: IRailService,

    ){
        this.routeUpdated.emit('hello world');
    }

    calcDuration() {
        console.log(`${this.depStation.selectedStation} to ${this.arrStation.selectedStation}`);
    }

    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        if (arriveSt.id === departSt.id) {
            console.log('stations can\'t be the same.');
        } else {
            this.IRailService.getRoutesReadable(arriveSt.id, departSt.id, this.depTime.selectedTime,
                this.depDate.selectedDate, 'arrive').then((data) => {
                    console.log(data.connection[0]);
                    this.routeUpdated.emit(data);
                }).catch(e => console.log(e));
        }
    }
}
