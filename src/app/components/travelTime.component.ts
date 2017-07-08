import { Component, Input } from '@angular/core';

@Component({
    selector: 'traveltime',
    templateUrl: './templates/travelTime.component.html',
    styleUrls: ['./styles/travelTime.component.scss']
})

export class TravelTime {
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
