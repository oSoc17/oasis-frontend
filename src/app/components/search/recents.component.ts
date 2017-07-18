import { Component, ViewChild } from '@angular/core';
import { Language } from '../../classes/language';

@Component({
    selector: 'recents',
    templateUrl: './templates/recents.component.html',
    styleUrls: ['./styles/recents.component.scss']
})

export class Recents {
    language: Language = new Language();

    constructor() {
    }

    // TO DO

}
