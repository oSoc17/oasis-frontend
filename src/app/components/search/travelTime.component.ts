import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language';
import { utils } from "protractor";

@Component({
    selector: 'traveltime',
    templateUrl: './templates/travelTime.component.html'
})

export class TravelTime {
    language: Language = new Language;
    selectedTime = (new Date()).getHours() + ':' + (new Date()).getMinutes();
    selectedType = 'depart';

    constructor() {}

    /**
     * Change the time
     */
    changeTime() {
        // console.log(this.selectedTime);
    }

    setNow() {
        this.selectedTime =  (new Date()).getHours() + ':' + (new Date()).getMinutes();
    }
}
