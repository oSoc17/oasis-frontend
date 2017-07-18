import { Component, ViewChild, OnInit } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

export class NavComponent {
    constructor() { }

    clickSettings() {
        // console.log('open settings');
        AppComponent.setPage(2);
    }
}
