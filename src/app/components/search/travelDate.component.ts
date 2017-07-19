import { Component, Input } from '@angular/core';

import { Language } from '../../classes/userData/language';

@Component({
    selector: 'traveldate',
    templateUrl: './templates/travelDate.component.html',
    styleUrls: ['./styles/travelDate.component.scss']
})

export class TravelDate {
    selectedDay: number = null;
    language = new Language();
}
