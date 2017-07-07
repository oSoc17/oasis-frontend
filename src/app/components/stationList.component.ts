import { Component, Input, OnInit } from '@angular/core';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html',
    styleUrls: ['./styles/stationList.component.scss']
})

export class StationList implements OnInit {
    stations: any;
    currQuery: string;
    selectedStation: any;

    constructor(
        private IRailService: IRailService
    ) { }

    private transformiRailResponse(data) {
        console.log(data);
        return data.station.sort((a, b) => a.standardname > b.standardname ? 1 : (a.standardname < b.standardname) ? -1 : 0);
    }

    ngOnInit() {
        this.IRailService.getAllStations().then((d) => {
            this.stations = this.transformiRailResponse(d);
            this.selectedStation = this.stations[0];
        }).catch(e => console.log(e));
    }

    getSuggestions() {
        this.IRailService.getStations(this.currQuery).then((d) => {
            this.stations = this.transformiRailResponse(d);
        }).catch(e => console.log(e));
    }

    onSelect() {
        console.log(this.selectedStation)
    }
}