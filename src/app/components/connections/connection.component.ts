import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'connection',
    templateUrl: './templates/connection.component.html'
})

export class Connection {
    depart = 'Depart station';
    arrival = 'Arrival station';
    percentage = Math.floor(Math.random() * 100);
    departTime = '00:00';
    arrivalTime = '05:00';
    departPlatform = 'P01';
    arrivalPlatform = 'P04';

    constructor(private router: Router) {}

    getDetails() {
        this.router.navigate(['/connectiondetail']);
    }
}
