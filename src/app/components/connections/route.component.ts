import { Component, Input } from '@angular/core';
import { Language } from '../../classes/language';

import { AppComponent } from '../app.component';
import { QoE } from "../../classes/qoe";

@Component({
    selector: 'route',
    templateUrl: './templates/route.component.html',
    styleUrls: ['./styles/route.component.scss']
})

export class Route {
    language: Language = new Language();
    QoE: QoE = null;
    constructor() {}

}
