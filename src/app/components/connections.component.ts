import { Component, Input, OnInit } from '@angular/core';

import { IRailService } from '../services/iRail.service';

@Component({
    selector: 'connections',
    templateUrl: './templates/connections.component.html',
    styleUrls: ['./styles/connections.component.scss']
})

export class Connections {
    loading: any = true;

    constructor() {
        console.log('Show connections.');
    }
}
