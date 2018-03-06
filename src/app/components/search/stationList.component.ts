// Node modules
import { Component, EventEmitter, OnInit, Output, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// Custom modules
import { TripscoreService } from '../../services/tripscore.service';

@Component({
    selector: 'stationlist',
    templateUrl: './templates/stationList.component.html',
    styleUrls: ['./styles/stationList.component.scss']
})

/**
 * A form input field with autocomplete for stations
 */
export class StationList implements OnInit {
    selectedStation = null;
    stationCtrl: FormControl;
    inputValue: string;
    tripscoreService: TripscoreService;
    qresults: any[];
    stations: any[];
    lastQuery: string;
    imgstart = 'assets/img/';
    transportTypes = [{ type: 'bus', icon: 'directions_bus' },
    { type: 'emt-bus', icon: 'location_city' },
    { type: 'metro', icon: 'subway' },
    { type: 'tram', icon: 'tram' },
    { type: 'train', icon: 'train' }]
    @ViewChild(MatInput) matInput: MatInput;
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    @Output() valueChange: EventEmitter<any> = new EventEmitter();
    @Input() type: string;
    @Input() company: string;

    /**
     * Constructor, load in all stations
     * @param http iRail service instance
     */
    constructor(tripscoreService: TripscoreService) {
        this.tripscoreService = tripscoreService;
        this.stationCtrl = new FormControl();
        this.stationCtrl.valueChanges.subscribe((val) => {
            this.querystations(val);
        });
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
            const filtered = this.stations.filter(s => s.standardname.toLowerCase().indexOf(val.toLowerCase()) >= 0);
            if (filtered.length > 0 &&
                filtered[0].standardname.toLowerCase().indexOf(val.toLowerCase()) === 0) {
                this.selectedStation = filtered[0];
                if (this.selectedStation) {
                    // Emit that station has been selected, for station combining depart and arrival and company/type lock
                    this.valueChange.emit(this.selectedStation);
                }
            }
            this.qresults = filtered;
            return filtered;
        }
        return this.qresults;
    }

    /**
     * This function queries the tripscore API for stations
     * @param val the search query (station name)
     */
    querystations(val: string) {
        this.inputValue = val;

        if (val === '') {
            // Clears selected station and emits the valueChange event for type & company lock
            this.selectedStation = null;
            this.valueChange.emit(this.selectedStation);
        }

        if (this.qresults) {
            this.qresults.forEach(res => {
                if (res.standardname === val) {
                    this.lastQuery = val;
                }
            });
        }

        if (this.lastQuery && val.toLowerCase().indexOf(this.lastQuery.toLowerCase()) === 0) {
            // We already queried using this filter
            // Filter this locally.
            return this.filterStations(val);
        }

        this.tripscoreService.queryStations(val, this.company, this.type).then((res) => {
            this.qresults = res.stations;
            this.stations = this.qresults;
            // If there is a next page keep getting results from server
            if (!res.nextPage) {
                this.lastQuery = val;
            }
        });
    }

    /**
     * Grabs focus
     */
    focus() {
        this.matInput.focus();
    }

    /**
     * Requests parent to focus the next field
     */
    requestFocusNext() {
        this.notifyParent.emit(null);
    }
}
