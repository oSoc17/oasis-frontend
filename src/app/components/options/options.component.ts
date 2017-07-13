import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';

import { Language } from '../../classes/language';

@Component({
  selector: 'options',
  templateUrl: './templates/options.component.html'
})

export class Options {
  language = new Language();

  slider = [
    {
      name: this.language.getMessage('delay'),
      value: AppModule.options.qoeParameters['AvgDelay'],
      id: 'AvgDelay'
    },
    {
      name: this.language.getMessage('amountOfChanges'),
      value: AppModule.options.qoeParameters['avgChangesAmount'],
      id: 'avgChangesAmount'
    },
    {
      name: this.language.getMessage('changeTime'),
      value: AppModule.options.qoeParameters['avgChangeTime'],
      id: 'avgChangeTime'
    },
    {
      name: this.language.getMessage('delayConsistency'),
      value: AppModule.options.qoeParameters['delayConsistency'],
      id: 'delayConsistency'
    },
    {
      name: this.language.getMessage('travelTime'),
      value: AppModule.options.qoeParameters['avgTravelTime'],
      id: 'avgTravelTime'
    },
    {
      name: this.language.getMessage('routesPerHour'),
      value: AppModule.options.qoeParameters['numberOfRoutesWithinHour'],
      id: 'numberOfRoutesWithinHour'
    },
    {
      name: this.language.getMessage('optMissedConnections'),
      value: AppModule.options.qoeParameters['numberOfMissedConnections'],
      id: 'numberOfMissedConnections'
    },
    {
      name: this.language.getMessage('price'),
      value: AppModule.options.qoeParameters['price'],
      id: 'price'
    }
  ]
}
