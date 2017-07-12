import { expect } from 'chai';
import { Calc } from "../src/app/classes/calc";

/* Calc clipPercentage */
describe('calc.ts clipPercentage', () => {
    it('should return 0', () => {
        const i = Calc.clipPercentage(-0.2);
        expect(i).to.equal(0);
    });
});
describe('calc.ts clipPercentage', () => {
    it('should return 0.3', () => {
        const i = Calc.clipPercentage(0.3);
        expect(i).to.equal(0.3);
    });
});
describe('calc.ts clipPercentage', () => {
    it('should return 1', () => {
        const i = Calc.clipPercentage(1.2);
        expect(i).to.equal(1);
    });
});
