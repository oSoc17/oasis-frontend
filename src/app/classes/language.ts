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
}
