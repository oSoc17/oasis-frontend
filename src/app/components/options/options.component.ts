import { Component, Input } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { AppModule } from '../../app.module';

import { Language } from '../../classes/userData/language';
import { AppComponent } from '../app.component';

@Component({
    selector: 'options',
    templateUrl: './templates/options.component.html'
})

export class Options {

    private language;
    private delay;
    private delayConsistency;
    private hops;
    private hopWaitingTime;
    private hopsMissed;
    private crowdedness;
    private price;

    constructor(public snackBar: MdSnackBar) {
        this.language = new Language();
        this.delay = {
            name: () => this.language.getMessage('delay'),
            tooltip: () => this.language.getMessage('delay_tooltip'),
            value: AppModule.options.qoeParameters['AvgDelay'],
            id: 'AvgDelay',
            unit: () => this.language.getMessage('minutes'),
            min: 0,
            max: 60,
        };
        this.delayConsistency = {
            name: () => this.language.getMessage('delayConsistency'),
            tooltip: () => this.language.getMessage('delayConsistency_tooltip'),
            value: AppModule.options.qoeParameters['delayConsistency'],
            id: 'delayConsistency',
            icons: ['consistency0', 'consistency1', 'consistency2', 'consistency3']
        };
        this.hops = {
            name: () => this.language.getMessage('amountOfChanges'),
            tooltip: () => this.language.getMessage('amountOfChanges_tooltip'),
            value: AppModule.options.qoeParameters['avgChangesAmount'],
            id: 'avgChangesAmount',
            unit: () => this.language.getMessage('hops'),
            min: 0,
            max: 3,
        };
        this.hopWaitingTime = {
            name: () => this.language.getMessage('changeTime'),
            tooltip: () => this.language.getMessage('changeTime_tooltip'),
            value: AppModule.options.qoeParameters['avgChangeTime'],
            id: 'avgChangeTime',
            unit: () => this.language.getMessage('minutes'),
            min: 0,
            max: 60,
        };
        this.hopsMissed = {
            name: () => this.language.getMessage('optMissedConnections'),
            tooltip: () => this.language.getMessage('missedConnections_tooltip'),
            value: AppModule.options.qoeParameters['numberOfMissedConnections'],
            id: 'numberOfMissedConnections',
            unit: () => '%',
            min: 0,
            max: 100,
        };
        this.crowdedness = {
            name: () => this.language.getMessage('price'),
            tooltip: () => this.language.getMessage('price_tooltip'),
            value: AppModule.options.qoeParameters['price'],
            id: 'price',
        };
        this.price = {
            name: () => this.language.getMessage('price'),
            tooltip: () => this.language.getMessage('price_tooltip'),
            value: AppModule.options.qoeParameters['price'],
            id: 'price',
        };
    }

    private resetOptions() {
        AppModule.options.reset();
        location.reload();
    }

    private goBack() {
        location.reload();
        this.snackBar.open('Saved!', '', {
            duration: 1000
        })
    }

}
