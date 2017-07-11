export class Language {
    public static language = 'en_GB';

    getLanguageData(): string {
        // returns locales/[currentLanguage].json
        try {
            const language = require(`../../locales/${Language.language}.json`);
            return language;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    getMessage(key: string): string {
        // returns message in current language
        const lang = this.getLanguageData();
        if (lang) {
            return lang[key];
        }
        return null;
    }

    getLanguages(): string[] {
        // returns locales/languages.json
        try {
            const file = require('../../locales/languages.json');
            return file['languages'];
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    setLanguage(tag: string) {
        // checks if language appears in locales/languages.json and selects if so
        const languages = this.getLanguages();
        for(let pair of languages) {
            if(pair['tag'] == tag) {
                Language.language = tag;
            }
        }
    }

    toTag(name: string): string {
        // returns ISO tag for a language name
        const languages: string[] = this.getLanguages();
        for(let pair of languages) {
            if(pair['name'] == name) {
                return pair['tag'];
            }
        }
        return null;
    }

    toName(tag: string): string {
        // returns a readable name for the language ISO tag
        const languages: string[] = this.getLanguages();
        for(let pair of languages) {
            if(pair["tag"] == tag) {
                return pair["name"];
            }
        }
        return null;
    }
}
