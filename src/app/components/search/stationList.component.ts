import { Component, Input, OnInit } from '@angular/core';

import { IRailService } from '../../services/iRail.service';

@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html'
})

export class StationList implements OnInit {
    stations: any;
    currQuery: string;
    selectedStation: any;
    autocomplete: any = {
        data: { },
        limit: 5 };

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
            this.convStationsToAutocomplete(this.stations);
        }).catch(e => console.log(e));
    }

    convStationsToAutocomplete(stations) {
        const firststation = this.autocomplete.data[stations[0]];
        this.autocomplete.data = {};
        this.autocomplete.data[stations[0].standardname] = null;
        for (let i =  0; i < stations.length; i++) {
            this.autocomplete.data[stations[i].standardname] = null;
        }
    }

    clickStation(val) {
        console.log(val);
        this.currQuery = val;
        this.selectedStation = this.stations.find((e) => {
            return e.standardname.valueOf() === this.currQuery.valueOf();
        });
        console.log(this.selectedStation);
    }
}
