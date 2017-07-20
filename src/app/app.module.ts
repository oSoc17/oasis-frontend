/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { Components } from './components.module';
import { AppComponent } from './components/app.component';

/* Services */
import { Services } from './services.module';

/* Material by Angular */
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdAutocompleteModule, MaterialModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';

/* custom classes */
import { Options } from './classes/userData/options';

const appRoutes: Routes = [
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: Components.components,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MdAutocompleteModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: Services.providers,
  bootstrap: [ AppComponent ]
})

export class AppModule {
  static options: Options = new Options();

  constructor() {
    AppModule.options.load();
  }
}
