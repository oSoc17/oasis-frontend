import { Component, ViewChild } from '@angular/core';

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
    searchData: SearchData[];
    error: string;
    language: Language = new Language();

    constructor() {}

    /**
     * Request connections and process them
     */
    clickCalculate() {
        const arriveSt = this.arrStation.selectedStation;
        const departSt = this.depStation.selectedStation;
        const stationList = this.depStation.stations;
        const arrInputValue = this.arrStation.inputValue;
        const depInputValue = this.depStation.inputValue;
        if (!(arriveSt && departSt)) {
            this.error = this.language.getMessage('errNoStations');
        } else if (!stationList.some(x => x.standardname.toLowerCase() === arrInputValue.toLowerCase()) ||
                    !stationList.some(x => x.standardname.toLowerCase() === depInputValue.toLowerCase())) {
            this.error = this.language.getMessage('errWrongStations');
        } else if ( arriveSt.id === departSt.id) {
            this.error = this.language.getMessage('errEqualStations');
        } else if (this.travelTime.selectedTime === '') {
            this.error = this.language.getMessage('errNoTime');
        } else if (this.travelDate.selectedDay === null) {
            this.error = this.language.getMessage('errNoDays');
        } else {
            this.searchData = [];
            this.searchData = SearchData.createPeriodicList(departSt['@id'], arriveSt['@id'],
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
}
