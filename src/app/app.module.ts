/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { Components } from './components.module';
import { AppComponent } from './components/app.component';
import { MaterializeModule } from 'ng2-materialize';

/* Services */
import { Services } from './services.module';

@NgModule({
  declarations: Components.components,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule.forRoot()
  ],
  providers: Services.providers,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
