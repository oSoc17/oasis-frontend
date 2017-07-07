/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Non-Angular libraries */
import { ChartsModule } from 'ng2-charts/ng2-charts';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './components/app.component';
import { StationList } from './components/stationList.component';
import { ConnectionQuery } from './components/connectionQuery.component';
import { DepartTime } from './components/departTime.component';
import { DepartDate } from './components/departDate.component';

/* Services */
import { IRailService } from './services/iRail.service'

@NgModule({
  declarations: [
    AppComponent,
    StationList,
    ConnectionQuery,
    DepartTime,
    DepartDate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [ IRailService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }