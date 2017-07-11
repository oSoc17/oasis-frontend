import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html'
})

export class NavComponent {
    constructor(private router: Router) { }

    clickSettings() {
        console.log('open settings');

        this.router.navigate(['options']);
    }
}
