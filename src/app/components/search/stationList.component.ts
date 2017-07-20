// Node modules
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdInputContainer } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// Custom modules
import { StationService } from '../../services/stations.service';

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
     * @param http iRail service instance
     */
    constructor(stationService: StationService) {
        this.stationservice = stationService;
        this.stationCtrl = new FormControl();
        this.stationCtrl.valueChanges.subscribe((val) => {
            this.querystations(val);
        });
        this.filteredStations = this.qresults;
    }

    /**
     * Component initialised
     */
    ngOnInit() { }

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

    /**
     *
     * @param val
     */
    querystations(val: string) {
        this.inputValue = val;
        if (val && val.length > 3) {
            this.stationservice.queryStations(val).then((res) => {
                this.qresults = res;
            });
        } else {
            this.qresults = [];
        }
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
