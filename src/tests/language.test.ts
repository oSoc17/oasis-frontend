import { Language } from '../app/classes/language';

/* setLanguage test right language */
describe('language.ts setLanguage()', () => {
    it('should set language to nl_BE', () => {
        const l: Language = new Language();
        l.setLanguage('nl_BE');
        expect(Language.language).toEqual('nl_BE');
    });
});

/* setLanguage test wrong language */
describe('language.ts setLanguage()', () => {
    it('should keep language to nl_BE', () => {
        const l: Language = new Language();
        l.setLanguage('nl_NL');
        console.log(l);
        expect(Language.language).not.toBe('nl_NL');
    });
});
