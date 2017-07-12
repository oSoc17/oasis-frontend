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

/* Services */
import { Services } from './services.module';

@NgModule({
  declarations: Components.components,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: Services.providers,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
