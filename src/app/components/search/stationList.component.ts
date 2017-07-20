import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { IRailService } from '../../services/iRail.service';
import { StationService} from '../../services/stations.service';
import { Http } from '@angular/http';
import { MdInputContainer } from '@angular/material';


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
    stationservice: StationService;
    qresults;
    @ViewChild(MdInputContainer) mdInput: MdInputContainer;
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();

    /**
     * Constructor, load in all stations
     * @param iRailService iRail service instance
     */
    constructor(iRailService: IRailService, http: Http) {
        this.stationservice = new StationService(http)
        iRailService.getAllStations().then((data) => {
            this.stations = (data as any).station;
        }).catch(e => console.log(e));
        this.stationCtrl = new FormControl();
        this.stationCtrl.valueChanges.subscribe((val) => {
            this.querystations(val);
        });
        // this.filteredStations = this.stationCtrl.valueChanges
        //     .startWith(null)
        //     .map(station => this.querystations(station));
        this.filteredStations = this.qresults;
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

    querystations(val: string) {
        this.inputValue = val;
        if (val && val.length > 3) {
              this.stationservice.queryStations(val).then((res) => {
                 this.qresults = res;
              });
        } else {
            this.qresults = [];
        }

    /**
     * Grabs focus
     */
    focus() {
        this.mdInput._focusInput();
    }

    /**
     * Requests parent to focus the next field
     */
    requestFocusNext() {
        this.notifyParent.emit(null);
    }
}
