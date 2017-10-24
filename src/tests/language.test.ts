import { Language } from '../app/classes/userData/language';

/**
 * Check if setlang sets settings to correct language
 */
describe('language.ts setLanguage()', () => {
    it('should set language to nl_BE', () => {
        const l: Language = new Language();
        l.setLanguage('nl_BE');
        expect(Language.language).toEqual('nl_BE');
    });
});

/**
 * Tests if setlang handles incorrect languages
 */
describe('language.ts setLanguage()', () => {
    it('should keep language to nl_BE', () => {
        const l: Language = new Language();
        l.setLanguage('nl_NL');
        expect(Language.language).not.toBe('nl_NL');
    });
});
