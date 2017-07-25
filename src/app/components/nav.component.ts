// Node modules
import { Component } from '@angular/core';

// Custom modules
import { AppComponent } from './app.component';
import { Language } from '../classes/userData/language';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

/**
 * Navbar containing language select and options button
 */
export class NavComponent {
    language: Language = new Language();

    constructor(public snackBar: MdSnackBar) { }

    /**
     * Handles the click on settings icon
     */
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

    /**
     * Goes back one page
     */
    private goBack() {
        AppComponent.goBack();
    }
}
