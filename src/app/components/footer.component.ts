// Node modules
import { Component } from '@angular/core';

// Custom modules
import { Language } from '../classes/userData/language';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

/**
 * Footer containing licence and more-info
 */
export class FooterComponent {
    language: Language = new Language();

    constructor() { }

}
