import 'core-js';
import 'src/polyfills';
import { expect } from 'chai';
import { Language } from './src/app/classes/language';
import { AppModule } from './src/app/app.module';
import { inject } from '@angular/core/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';

let language: Language;

beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            Language
        ]
    });
});

/* setLanguage test right language */
describe('language.ts setLanguage()', () => {
    it('should set language to nl_BE', inject([Language], (language: Language) => {
        language.setLanguage("nl_BE");
        expect(Language.language).to.equal("nl_BE");
    }));
});

/* setLanguage test wrong language */
/*describe('language.ts setLanguage()', () => {
    it('should keep language to nl_BE', () => {
        const l: Language = new Language();
        l.setLanguage("nl_NL");
        expect(Language.language).to.equal("nl_BE");
    });
});*/
