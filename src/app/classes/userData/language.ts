// Custom modules
import { AppModule } from '../../app.module';

export class Language {
    public static language = 'en_GB';

    constructor() {
        if (AppModule.options.language) {
            this.setLanguage(AppModule.options.language);
        }
    }

    /**
     * returns all language data for the currently loaded language.
     */
    getLanguageData(): string {
        try {
            const language = require(`../../../locales/${Language.language}.json`);
            return language;
        } catch (e) {
            // console.log(e);
            return null;
        }
    }

    /**
     * Returns a message of a language filtered by key
     * @param key the key value defined for the message
     */
    getMessage(key: string): string {
        // returns message in current language
        const lang = this.getLanguageData();
        if (lang) {
            return lang[key];
        }
        return null;
    }

    /**
     * Returns the value of languages.json
     */
    getLanguages(): string[] {
        try {
            const file = require('../../../locales/languages.json');
            return file['languages'];
        } catch (e) {
            // console.log(e);
            return null;
        }
    }

    /**
     * Checks if a language exists and sets it accordingly
     * @param tag The language tag lang_COUNTRY - ISO
     */
    setLanguage(tag: string) {
        // checks if language appears in locales/languages.json and selects if so
        const languages = this.getLanguages();
        for (const pair of languages) {
            if (pair['tag'] === tag) {
                Language.language = tag;
                return tag;
            }
        }
    }

    /**
     * Return the ISO tag of the given language
     * @param name the language's name
     */
    toTag(name: string): string {
        const languages: string[] = this.getLanguages();
        for (const pair of languages) {
            if (pair['name'] === name) {
                return pair['tag'];
            }
        }
        return null;
    }

    /**
     * Returns the name of the language if any is found
     * @param tag the ISO tag of the laguage
     */
    toName(tag: string): string {
        // returns a readable name for the language ISO tag
        const languages: string[] = this.getLanguages();
        for (const pair of languages) {
            if (pair['tag'] === tag) {
                return pair['name'];
            }
        }
        return null;
    }
}
