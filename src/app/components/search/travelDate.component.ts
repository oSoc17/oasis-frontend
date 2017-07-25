// Node modules
import { Component } from '@angular/core';

// Custom modules
import { Language } from '../../classes/userData/language';

@Component({
    selector: 'traveldate',
    templateUrl: './templates/travelDate.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

/**
 * A form combobox to select a day of the week
 */
export class TravelDate {
    selectedDay: number = (new Date()).getDay(); // weekday index starting at sunday (0)
    language = new Language();

    /**
     * Set the selectedDay index to the current machines day
     */
    setNow() {
        this.selectedDay = (new Date()).getDay();
    }
}
