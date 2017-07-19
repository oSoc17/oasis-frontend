import { Component, ViewChild, OnInit } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

export class NavComponent {
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
