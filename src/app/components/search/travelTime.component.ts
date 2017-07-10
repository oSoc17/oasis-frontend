import { Component, Input } from '@angular/core';
import { Language } from '../../classes/language';

@Component({
    selector: 'traveltime',
    templateUrl: './templates/travelTime.component.html'
})

export class TravelTime {
    language: Language = new Language;
    selectedTime = '00:00'
    selectedType = 'depart'

    constructor() {}

    changeType() {
        console.log(this.selectedType);
    }

    changeTime() {
        console.log(this.selectedTime);
    }
}
