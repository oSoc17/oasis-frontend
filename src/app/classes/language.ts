export class Language {
    public static language = 'en_GB';

    getLanguageData() {
        try {
            const language = require(`../../locales/${Language.language}.json`);
            return language;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getMessage(key: string) {
        const lang = this.getLanguageData();
        if (lang) {
            return lang[key];
        }
        return null;
    }

    getLanguages(): string[] {
      try {
        const file = require('../../locales/languages.json');
        return file['languages'];
      } catch (e) {
          console.log(e);
          return null;
      }
    }

    setLanguage(code: string) {
      // checks if language code appears in languages.json and sets it to that code if so
      const languages = this.getLanguages();
      for(let couple of languages) {
        if(couple["tag"] == code) {
          Language.language = code;
        }
      }
    }
}
