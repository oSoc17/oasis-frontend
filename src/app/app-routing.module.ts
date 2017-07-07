import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { GraphSection } from './components/graphSection.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'graph',  component: GraphSection }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}