// Node modules
import { Component } from '@angular/core';

// Custom modules
import { AppComponent } from './app.component';
import { Language } from '../classes/userData/language';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

/**
 * Navbar containing language select and options button
 */
export class NavComponent {
    language: Language = new Language();

    constructor(public snackBar: MatSnackBar) { }

    /**
     * Handles the click on settings icon
     */
    private clickSettings() {
        if (AppComponent.getPage() === 2) {
            AppComponent.setPage(0);
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
