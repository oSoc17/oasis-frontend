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
import { 
  MatDividerModule, 
  MatButtonToggleModule, 
  MatAutocompleteModule, 
  MatSliderModule, 
  MatTooltipModule, 
  MatInputModule, 
  MatMenuModule, 
  MatProgressSpinnerModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatCardModule, 
  MatSelectModule,
  MatListModule,
  MatExpansionModule,
  MatChipsModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';

/* Custom form validation*/
import { CustomFormsModule } from 'ng2-validation'

/* Custom classes */
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
    CustomFormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatSliderModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: Services.providers,
  bootstrap: [AppComponent]
})

export class AppModule {
  static options: Options = new Options();

  constructor() {
    AppModule.options.load();
  }
}
