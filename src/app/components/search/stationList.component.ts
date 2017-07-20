import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { IRailService } from '../../services/iRail.service';


@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html',
    styleUrls: ['./styles/stationList.component.scss']
})

export class StationList implements OnInit {
    selectedStation = null;
    stationCtrl: FormControl;
    filteredStations: any;
    stations: any;
    inputValue: string;

    /**
     * Constructor, load in all stations
     * @param iRailService iRail service instance
     */
    constructor(iRailService: IRailService) {
        iRailService.getAllStations().then((data) => {
            this.stations = (data as any).station;
        }).catch(e => console.log(e));
        this.stationCtrl = new FormControl();
        this.filteredStations = this.stationCtrl.valueChanges
            .startWith(null)
            .map(station => this.filterStations(station));
        // this.stationCtrl.valueChanges.toPromise().then(val => console.log(val)).catch(e => console.log(e))
    }

    /**
     * Component initialised
     */
    ngOnInit() {}

    /**
     * filter stations on value change
     * @param val the value to filter on
     */
    filterStations(val: string) {
        this.inputValue = val;
        if (val) {
            const filtered = this.stations.filter(s => s.standardname.toLowerCase().indexOf(val.toLowerCase()) === 0);
            if (filtered.length > 0 &&
                    filtered[0].standardname.toLowerCase().indexOf(val.toLowerCase()) === 0) {
                this.selectedStation = filtered[0];
            }
            return filtered;
        }
        return this.stations;
    }
}
