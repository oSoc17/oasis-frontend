import { Component, ViewChild, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { Language } from '../classes/userData/language';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

export class NavComponent {
    language: Language = new Language();

    constructor() { }

    private clickSettings() {
        // console.log('open settings');
        if (AppComponent.getPage() === 2) {
            this.goBack();
        } else {
            AppComponent.setPage(2);
        }
    }

    private goBack() {
        AppComponent.goBack();
    }
}
