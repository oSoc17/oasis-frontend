import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ConnectionQuery } from './components/search/connectionQuery.component';
import { Connections } from './components/connections/connections.component';
import { Options } from './components/options/options.component';
import { ConnectionDetail } from './components/connections/connectionDetail.component';

/* Services */
import { IRailService } from './services/iRail.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: ConnectionQuery
  },
  {
    path: 'connections',
    component: Connections
  },
  {
    path: 'options',
    component: Options
  },
  {
    path: 'connectiondetail',
    component: ConnectionDetail
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
