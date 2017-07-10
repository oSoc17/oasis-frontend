import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'connectiondetail',
    templateUrl: './templates/connectionDetail.component.html'
})

export class ConnectionDetail {
    percentage = Math.floor(Math.random() * 100);
    train = 'P23412';

    constructor(private location: Location) {}

    goBack() {
        this.location.back();
    }
}
