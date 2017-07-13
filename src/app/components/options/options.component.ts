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
      value: AppModule.options.qoeParameters['AvgChangesAmount'],
      id: 'AvgChangesAmount'
    },
    {
      name: 'Average change time',
      value: AppModule.options.qoeParameters['AvgChangeTime'],
      id: 'AvgChangeTime'
    },
    {
      name: 'Delay consistency',
      value: AppModule.options.qoeParameters['DelayConsistency'],
      id: 'DelayConsistency'
    },
    {
      name: 'Travel Time',
      value: AppModule.options.qoeParameters['AvgTravelTime'],
      id: 'AvgTravelTime'
    },
    {
      name: 'Routes per hour',
      value: AppModule.options.qoeParameters['NumberOfRoutesWithinHour'],
      id: 'NumberOfRoutesWithinHour'
    },
    {
      name: 'Missed connections',
      value: AppModule.options.qoeParameters['NumberOfMissedConnections'],
      id: 'NumberOfMissedConnections'
    },
    {
      name: 'Price',
      value: AppModule.options.qoeParameters['Price'],
      id: 'Price'
    }
  ]
}
