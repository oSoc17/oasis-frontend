import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';

@Component({
  selector: 'options',
  templateUrl: './templates/options.component.html'
})

export class Options {
  slider = [
    {
      name: 'Delay',
      value: AppModule.options.qoeParameters['AvgDelay'],
      id: 'AvgDelay'
    },
    {
      name: 'Amount of changes',
      value: AppModule.options.qoeParameters['avgChangesAmount'],
      id: 'avgChangesAmount'
    },
    {
      name: 'Average change time',
      value: AppModule.options.qoeParameters['avgChangeTime'],
      id: 'avgChangeTime'
    },
    {
      name: 'Delay consistency',
      value: AppModule.options.qoeParameters['delayConsistency'],
      id: 'delayConsistency'
    },
    {
      name: 'Travel Time',
      value: AppModule.options.qoeParameters['avgTravelTime'],
      id: 'avgTravelTime'
    },
    {
      name: 'Routes per hour',
      value: AppModule.options.qoeParameters['numberOfRoutesWithinHour'],
      id: 'numberOfRoutesWithinHour'
    },
    {
      name: 'Missed connections',
      value: AppModule.options.qoeParameters['numberOfMissedConnections'],
      id: 'numberOfMissedConnections'
    },
    {
      name: 'price',
      value: AppModule.options.qoeParameters['price'],
      id: 'price'
    }
  ]
}
