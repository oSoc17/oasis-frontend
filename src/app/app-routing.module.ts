import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ConnectionQuery } from './components/search/connectionQuery.component';
import { Connections } from './components/connections/connections.component';

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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
