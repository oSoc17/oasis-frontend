import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language'
import { Utils } from '../../classes/utils/utils';

@Component({
    selector: 'traveltime',
    templateUrl: './templates/travelTime.component.html'
})

export class TravelTime {
    language: Language = new Language;
    selectedTime = Utils.zeroPad(new Date().getHours(), 2) + ':' + Utils.zeroPad(new Date().getMinutes(), 2);
    selectedType = 'depart';

    constructor() {}

    /**
     * Change the time
     */
    changeTime() {
        // console.log(this.selectedTime);
    }

    /**
     *  set the selected time to now
     */
    setNow() {
        this.selectedTime = Utils.zeroPad(new Date().getHours(), 2) + ':' + Utils.zeroPad(new Date().getMinutes(), 2);
    }
}
