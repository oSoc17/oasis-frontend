import { Component, Input, OnInit } from '@angular/core';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html',
    styleUrls: ['./styles/stationList.component.scss']
})

export class StationList implements OnInit {
    /* this.stations might dissapear once we improve performance with caching */
    stations: any;
    currQuery: string;
    selectedStation: any;
    filteredStations: any;
    showSuggestions: any = false;

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
            this.filteredStations = this.stations;
            this.selectedStation = this.filteredStations[0];
        }).catch(e => console.log(e));
    }

    getSuggestions() {
        if (!this.currQuery) {return}
        this.IRailService.filterStations(this.stations, this.currQuery).then(fstations => {
            this.filteredStations = fstations;
            this.selectedStation = this.filteredStations[0];
        }).catch(e => console.log(e));
    }

    onSelect() {
        console.log(this.selectedStation)
    }

    clickSuggestion(station) {
        if (!station) {return}
        this.currQuery = station.standardname;
        this.selectedStation = station;

        console.log(this.selectedStation);
    }

    hideSuggestions() {
        /* TODO: Find a better solution for this */
        window.setTimeout(() => {
            this.showSuggestions = false;
        }, 100);
    }
}
