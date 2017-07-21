import { Component, Input } from '@angular/core';
import { Language } from '../../classes/userData/language';

import { AppModule } from '../../app.module';

@Component({
  selector: 'languagechooser',
  templateUrl: './templates/languagechooser.component.html'
})


export class LanguageChooser {
  language: Language = new Language();
  languages: string[] = this.language.getLanguages();
  currentLanguage: string = this.language.toName(Language.language);

  /**
   * Triggered when a language change is request (onSelect)
   * @param lang the language object
   */
  onSelect(lang: any) {
    const tag = lang['tag'];
    this.currentLanguage = this.language.toName(tag);
    AppModule.options.language = this.language.setLanguage(tag);
    AppModule.options.save();
  }
}
