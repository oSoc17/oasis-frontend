import { Component, Input } from '@angular/core';

@Component({
    selector: 'traveldate',
    templateUrl: './templates/travelDate.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

export class TravelDate {
    selectedDays = {
        '0': false,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false
    };

    clickDay(day) {
        if (this.selectedDays[day]) {
            this.selectedDays[day] = false;
        } else {
            this.selectedDays[day] = true;
        }
        console.log(`Selected days: ${JSON.stringify(this.selectedDays)}`)
    }
}
