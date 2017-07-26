// Node modules
import { Component } from '@angular/core';

// Custom modules
import { Language } from '../../classes/userData/language';

@Component({
    selector: 'travelday',
    templateUrl: './templates/travelDay.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

/**
 * A form combobox to select a day of the week
 */
export class TravelDay {
    selectedDay: number = (new Date()).getDay(); // weekday index starting at sunday (0)
    language = new Language();

    /**
     * Set the selectedDay index to the current machines day
     */
    setNow() {
        this.selectedDay = (new Date()).getDay();
    }
}
