import { Component, Input } from '@angular/core';

@Component({
    selector: 'traveldate',
    templateUrl: './templates/travelDate.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

export class TravelDate {
    selectedDate: string = new Date().toLocaleDateString('en-GB');

    changeDate(val) {
        console.log(new Date(this.selectedDate).toLocaleDateString('en-GB'))
    }
}
