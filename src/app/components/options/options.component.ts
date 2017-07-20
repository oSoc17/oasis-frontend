import { Component, Input } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { AppModule } from '../../app.module';

import { Language } from '../../classes/userData/language';
import { AppComponent } from '../app.component';

@Component({
  selector: 'options',
  templateUrl: './templates/options.component.html'
})

export class Options {
  private language;
  private slider;
  constructor(public snackBar: MdSnackBar) {
    this.language = new Language();

    // Array with all the sliders and their properties
    this.slider = [
    {
      name: this.language.getMessage('delay'),
      tooltip: this.language.getMessage('delay_tooltip'),
      value: AppModule.options.qoeParameters['AvgDelay'],
      id: 'AvgDelay',
    },
    {
        name: this.language.getMessage('delayConsistency'),
        tooltip: this.language.getMessage('delayConsistency_tooltip'),
        value: AppModule.options.qoeParameters['delayConsistency'],
        id: 'delayConsistency'
    },
    {
      name: this.language.getMessage('amountOfChanges'),
      tooltip: this.language.getMessage('amountOfChanges_tooltip'),
      value: AppModule.options.qoeParameters['avgChangesAmount'],
      id: 'avgChangesAmount'
    },
    {
      name: this.language.getMessage('changeTime'),
      tooltip: this.language.getMessage('changeTime_tooltip'),
      value: AppModule.options.qoeParameters['avgChangeTime'],
      id: 'avgChangeTime'
    }/*,
    {
      name: this.language.getMessage('travelTime'),
      tooltip: this.language.getMessage('travelTime_tooltip'),
      value: AppModule.options.qoeParameters['avgTravelTime'],
      id: 'avgTravelTime'
    },
    {
      name: this.language.getMessage('routesPerHour'),
      tooltip: this.language.getMessage('routesPerHour_tooltip'),
      value: AppModule.options.qoeParameters['numberOfRoutesWithinHour'],
      id: 'numberOfRoutesWithinHour'
    },
    {
      name: this.language.getMessage('optMissedConnections'),
      tooltip: this.language.getMessage('missedConnections_tooltip'),
      value: AppModule.options.qoeParameters['numberOfMissedConnections'],
      id: 'numberOfMissedConnections'
    },
    {
      name: this.language.getMessage('price'),
      tooltip: this.language.getMessage('price_tooltip'),
      value: AppModule.options.qoeParameters['price'],
      id: 'price'
    }*/
  ];
  }

  private resetOptions() {
    AppModule.options.reset();
    location.reload();
  }
  private goBack() {
    AppComponent.goBack();
    this.snackBar.open('Saved!', '', {
      duration: 1000
    })
  }
}
