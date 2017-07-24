import { Component } from '@angular/core';

import { Language } from '../classes/userData/language';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    language: Language = new Language();

    constructor() { }

}
