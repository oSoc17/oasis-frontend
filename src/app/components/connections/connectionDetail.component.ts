// Node modules
import { Component, Input } from '@angular/core';

// Custom modules
import { Language } from '../../classes/userData/language';
import { AppComponent } from '../app.component';

@Component({
    selector: 'connectiondetail',
    templateUrl: './templates/connectionDetail.component.html'
})

/**
 * This component is deprecated, use Connections component instead
 */
export class ConnectionDetail {
    percentage = Math.floor(Math.random() * 100);
    train = 'P23412';
    language: Language = new Language();

    constructor() {}

    /**
     * Go back one page
     */
    goBack() {
        AppComponent.goBack();
    }
}
