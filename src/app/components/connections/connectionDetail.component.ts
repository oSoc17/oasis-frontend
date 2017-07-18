import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language';

import { AppComponent } from '../app.component';

@Component({
    selector: 'connectiondetail',
    templateUrl: './templates/connectionDetail.component.html'
})

export class ConnectionDetail {
    percentage = Math.floor(Math.random() * 100);
    train = 'P23412';
    language: Language = new Language();

    constructor() {}

    goBack() {
        AppComponent.goBack();
    }
}
