import { Component, ViewChild, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { Language } from '../classes/userData/language';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

export class NavComponent {
    language: Language = new Language();

    constructor(public snackBar: MdSnackBar) { }

    private clickSettings() {
        // console.log('open settings');
        if (AppComponent.getPage() === 2) {
            this.goBack();
            this.snackBar.open('Saved!', '', {
                duration: 500
            });
        } else {
            AppComponent.setPage(2);
        }
    }

    private goBack() {
        AppComponent.goBack();
    }
}
