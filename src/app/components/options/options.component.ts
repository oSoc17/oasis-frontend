import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';

import { Language } from '../../classes/userData/language';
import { AppComponent } from '../app.component';

@Component({
    selector: 'options',
    templateUrl: './templates/options.component.html'
})

export class Options {
    language = new Language();

    // Array with all the sliders and their properties

    delay = {
        name: this.language.getMessage('delay'),
        tooltip: this.language.getMessage('delay_tooltip'),
        value: AppModule.options.qoeParameters['AvgDelay'],
        id: 'AvgDelay',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    delayConsistency = {
        name: this.language.getMessage('delayConsistency'),
        tooltip: this.language.getMessage('delayConsistency_tooltip'),
        value: AppModule.options.qoeParameters['delayConsistency'],
        id: 'delayConsistency',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    hops = {
        name: this.language.getMessage('amountOfChanges'),
        tooltip: this.language.getMessage('amountOfChanges_tooltip'),
        value: AppModule.options.qoeParameters['avgChangesAmount'],
        id: 'avgChangesAmount',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    hopWaitingTime = {
        name: this.language.getMessage('changeTime'),
        tooltip: this.language.getMessage('changeTime_tooltip'),
        value: AppModule.options.qoeParameters['avgChangeTime'],
        id: 'avgChangeTime',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    missedHops = {
        name: this.language.getMessage('optMissedConnections'),
        tooltip: this.language.getMessage('missedConnections_tooltip'),
        value: AppModule.options.qoeParameters['numberOfMissedConnections'],
        id: 'numberOfMissedConnections',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    crowdedness = {
        name: this.language.getMessage('price'),
        tooltip: this.language.getMessage('price_tooltip'),
        value: AppModule.options.qoeParameters['price'],
        id: 'price',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };
    price = {
        name: this.language.getMessage('price'),
        tooltip: this.language.getMessage('price_tooltip'),
        value: AppModule.options.qoeParameters['price'],
        id: 'price',
        unit: this.language.getMessage('minutes'),
        min: 0,
        max: 60,
    };

    private resetOptions() {
        AppModule.options.reset();
        location.reload();
    }
}
