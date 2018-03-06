// Node modules
import { Component, ViewChild } from '@angular/core';

// Custom modules
import { Language } from '../../classes/userData/language'
import { Utils } from '../../classes/utils/utils';
import { MatInput } from '@angular/material';

@Component({
    selector: 'traveltime',
    templateUrl: './templates/travelTime.component.html'
})

/**
 * A form input to select a time in HH:MM format
 */
export class TravelTime {
    language: Language = new Language;
    selectedTime = Utils.timeStringFromDate(new Date());
    selectedType = 'depart';
    @ViewChild(MatInput) matInput: MatInput;

    constructor() {}

    /**
     * Change the time
     */
    changeTime() {
        // console.log(this.selectedTime);
    }

    /**
     * Set the selected time to now
     */
    setNow() {
        this.selectedTime = Utils.timeStringFromDate(new Date());
    }

    /**
     * Grab the focus to the field
     */
    focus() {
        this.matInput.focus();
    }
}
