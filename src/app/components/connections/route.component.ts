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

    constructor() {}

    private toScore(val: number) {
        return (Math.round(val * 2) / 2);
    }

    private toPercentage(val) {
        return Math.round(val * 100);
    }

    private formatNumber(number) {
        return ('0' + number).slice(-2);
    }

    private toTime(val) {
        const date = new Date(val);
        return `${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}`;
    }

    private toUTCTime(val) {
        const date = new Date(val);
        return `${this.formatNumber(date.getUTCHours())}:${this.formatNumber(date.getUTCMinutes())}`;
    }

    private getSliderValue() {
        return this.toScore(this.qoe.getQoE() * 10) * 10;
    }

}
