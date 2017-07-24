// Node modules
import { Component, ViewChild } from '@angular/core';

// Custom modules
import { StationList } from './stationList.component';
import { TravelTime } from './travelTime.component';
import { TravelDate } from './travelDate.component';
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

export class ConnectionQuery {
    @ViewChild('departure') depStation: StationList;
    @ViewChild('arrival') arrStation: StationList;
    @ViewChild(TravelTime) travelTime: TravelTime;
    @ViewChild(TravelDate) travelDate: TravelDate;
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
        const arrInputValue = this.arrStation.inputValue;
        const depInputValue = this.depStation.inputValue;
        if (!(arriveSt && departSt && departSt['id'] && arriveSt['id'])) {
            this.error = this.language.getMessage('errNoStations');
        } else if (!ServerConfig.equalUris(arriveSt['id'], departSt['id'])) {
            this.error = this.language.getMessage('errStationServer');
        } else if ( arriveSt.id === departSt.id) {
            this.error = this.language.getMessage('errEqualStations');
        } else if (this.travelTime.selectedTime === '') {
            this.error = this.language.getMessage('errNoTime');
        } else if (this.travelDate.selectedDay === null) {
            this.error = this.language.getMessage('errNoDays');
        } else {
            this.searchData = [];
            this.searchData = SearchData.createPeriodicList(departSt['id'], arriveSt['id'],
                this.travelTime.selectedTime, Utils.getLatest(this.travelDate.selectedDay), 'departureTime', 14);
            AppComponent.searchData = this.searchData;
            AppComponent.searchString = {
                stations: departSt.standardname + ' - ' + arriveSt.standardname,
                time: this.travelTime.selectedTime + ' ' + this.language.getMessage('weekdays')[this.travelDate.selectedDay]
            };
            AppModule.options.addRecent(new Recent(this.searchData, departSt.standardname, arriveSt.standardname,
                this.travelTime.selectedTime, this.travelDate.selectedDay));
            AppModule.options.save();
            AppComponent.setPage(1);
        }
    }

    stationSelected(selected) {
        if (selected && selected['company'] && selected['type']) {
            this.company = selected['company'];
            this.transportType = selected['type'];
        }
    }

    /**
     * Requests parent to focus the next field
     */
    focusNext(evt) {
        if (evt === 'depature') {
            this.arrStation.focus();
        } else if (evt === 'arrival') {
            this.travelTime.focus();
        }
    }
}
