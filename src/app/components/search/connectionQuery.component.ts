// Node modules
import { Component, ViewChild } from '@angular/core';

// Custom modules
import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDay } from './travelDay.component';
import { SearchData } from '../../classes/connections/searchData';
import { Language } from '../../classes/userData/language';
import { Utils } from '../../classes/utils/utils';
import { AppComponent } from '../app.component';
import { Recents } from './recents.component';
import { AppModule } from '../../app.module';
import { Recent } from '../../classes/userData/recent';
import { ServerConfig } from '../../classes/utils/serverConfig';

@Component({
    selector: 'connectionquery',
    templateUrl: './templates/connectionQuery.component.html',
    styleUrls: ['./styles/connectionQuery.component.scss']
})

/**
 * A search form to query the tripscore
 */
export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(TravelTime) travelTime: TravelTime;
    @ViewChild(TravelDay) travelDate: TravelDay;
    @ViewChild(Recents) recents: Recents;
    @ViewChild('calculate') calculate;
    searchData: SearchData[];
    error: string;
    language: Language = new Language();
    company: string;
    transportType: string;

    constructor() {}

    /**
     * Request connections and process them
     */
    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        console.log('arriveStation', arriveSt);
        console.log('departStation', departSt);
        const arrInputValue = this.arrStation.inputValue;
        const depInputValue = this.depStation.inputValue;
        if (!(arriveSt && departSt && departSt['id'] && arriveSt['id'])) {
            // no stations are selected
            this.error = this.language.getMessage('errNoStations');
        } else if (!ServerConfig.equalUris(arriveSt['id'], departSt['id'])) {
            // the station server is down
            this.error = this.language.getMessage('errStationServer');
        } else if ( arriveSt.id === departSt.id) {
            // the same stations are selected
            this.error = this.language.getMessage('errEqualStations');
        } else if (this.travelTime.selectedTime === '') {
            // no time is selected
            this.error = this.language.getMessage('errNoTime');
        } else if (this.travelDate.selectedDay === null) {
            // no day is selected
            this.error = this.language.getMessage('errNoDays');
        } else {
            this.searchData = [];
            this.searchData = SearchData.createPeriodicList(departSt['id'], arriveSt['id'],
                this.travelTime.selectedTime, Utils.getLatest(this.travelDate.selectedDay), 'departureTime', 14);
            AppComponent.searchData = this.searchData;
            AppComponent.searchString = {
                stations: departSt.standardname + ' - ' + arriveSt.standardname,
                time: this.travelTime.selectedTime + ' ' + this.language.getMessage('weekdays')[this.travelDate.selectedDay]
            }; // set the searchString to a readable value to display in frontend
            AppModule.options.addRecent(new Recent(this.searchData, departSt.standardname, arriveSt.standardname,
                this.travelTime.selectedTime, this.travelDate.selectedDay)); // add the query to recents
            AppModule.options.save(); // save recents to localstorage
            AppComponent.setPage(1); // set page to score screen (value 1)
        }
    }

    /**
     * Set company and type to those of a given object
     * @param selected an object with a 'company' and 'type' attribute
     */
    stationSelected(selected, nr) {
        if (selected && selected['company'] && selected['type']) {
            this.company = selected['company'];
            this.transportType = selected['type'];
        }
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        if (!arriveSt && !departSt) {
            this.company = null;
            this.transportType = null;
        }
    }

    /**
     * Request parent component to focus the next field
     */
    focusNext(evt) {
        if (evt === 'depature') {
            this.arrStation.focus();
        } else if (evt === 'arrival') {
            this.travelTime.focus();
        }
    }
}
