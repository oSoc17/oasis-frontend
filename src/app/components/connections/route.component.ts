import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language';

import { AppComponent } from '../app.component';
import { QoE } from '../../classes/connections/qoe';
import { AppModule } from "../../app.module";

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

    private getSubScores() {
        if (this.qoe) {
            return [{
                name: this.language.getMessage('avgTravelTime'),
                tooltip: this.language.getMessage('travelTime_tooltip') + '\n\nfoo',
                value: this.toUTCTime(this.qoe.getAvgTravelTime().value.valueOf()),
                icon: 'av-timer'
            },
            {
                name: this.language.getMessage('delay'),
                tooltip: this.language.getMessage('delay_tooltip'),
                value: this.toUTCTime(this.qoe.getAvgDelay().value.valueOf()),
                icon: 'av-timer',
            },
            {
                name: this.language.getMessage('delayConsistency'),
                tooltip: this.language.getMessage('delayConsistency_tooltip'),
                value: this.qoe.getDelayConsistency().value.valueOf(),
                icon: 'chart-line'
            },
            {
                name: this.language.getMessage('amountOfChanges'),
                tooltip: this.language.getMessage('amountOfChanges_tooltip'),
                value: this.qoe.getAvgChangesAmount().value,
                icon: 'transit-transfer'
            },
            {
                name: this.language.getMessage('changeTime'),
                tooltip: this.language.getMessage('changeTime_tooltip'),
                value: this.qoe.getAvgChangesAmount().value ? this.toUTCTime(this.qoe.getAvgChangeTime().value.valueOf()) : '--:--',
                icon: 'transit-transfer'
            }];

        }
    }

    private get basedOn(): string{
        return this.language.getMessage('basedOn').replace('XX', this.qoe.amount + '');
    }

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
