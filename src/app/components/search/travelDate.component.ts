import { Component, Input } from '@angular/core';

import { Language } from '../../classes/userData/language';

@Component({
    selector: 'traveldate',
    templateUrl: './templates/travelDate.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

export class TravelDate {
    selectedDay: number = ((new Date()).getDay() + 6) % 7;
    language = new Language();

    /**
     * Sets the traveldate to the current pc's date
     */
    setNow() {
        this.selectedDay = ((new Date()).getDay() + 6) % 7;
    }
}
