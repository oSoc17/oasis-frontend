import { Component, Input } from '@angular/core';
import { Language } from '../../classes/language';

@Component({
  selector: 'languagechooser',
  templateUrl: './templates/languagechooser.component.html'
})


export class LanguageChooser {
  language: Language = new Language();
  languages: string[] = this.language.getLanguages();


  onClick(){
    //TODO: change language on click
  }
}
