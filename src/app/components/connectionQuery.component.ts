import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { StationList } from './stationList.component';
import { DepartTime } from './departTime.component';
import { DepartDate } from './departDate.component';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(DepartTime) depTime: DepartTime;
    @ViewChild(DepartDate) depDate: DepartDate;
    @Output() routeUpdated = new EventEmitter();    

    constructor(
        private IRailService: IRailService,
        
    ){
        this.routeUpdated.emit("hello world");
    }

    calcDuration() {
        console.log(`${this.depStation.selectedStation} to ${this.arrStation.selectedStation}`);
    }

    clickCalculate() {
        let arriveSt = this.arrStation.selectedStation;
        let departSt = this.depStation.selectedStation;
        if (arriveSt.id === departSt.id) {
            console.log("stations can't be the same.");
        } else {
            this.IRailService.getRoutesReadable(arriveSt.id, departSt.id, this.depTime.selectedTime, 
                this.depDate.selectedDate, "arrive").then((data) => {
                    console.log(data.connection[0]);
                    this.routeUpdated.emit(data);
                }).catch(e => console.log(e));
        }
    }
}