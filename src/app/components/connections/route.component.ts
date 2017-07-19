import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language';

import { AppComponent } from '../app.component';
import { QoE } from '../../classes/connections/qoe';

@Component({
    selector: 'route',
    templateUrl: './templates/route.component.html',
    styleUrls: ['./styles/route.component.scss']
})

export class Route {
    language: Language = new Language();
    @Input() qoe: QoE;
    sliderValue = 0;

    constructor() {
    }


    toScore(val: number) {
        return (Math.round(val * 2) / 2);
    }

    toPercentage(val) {
        return Math.round(val * 100);
    }

    private formatNumber(number) {
        return ('0' + number).slice(-2);
    }

    toTime(val) {
        const date = new Date(val);
        return `${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}`;
    }

    toUTCTime(val) {
        const date = new Date(val);
        return `${this.formatNumber(date.getUTCHours())}:${this.formatNumber(date.getUTCMinutes())}`;
    }

    getSliderValue() {
        return this.toScore(this.qoe.getQoE() * 10) * 10;
    }

}
