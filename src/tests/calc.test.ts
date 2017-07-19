import { Calc } from '../app/classes/utils/calc';

/* Calc clipPercentage */
describe('calc.ts clipPercentage', () => {
    it('should return 0', () => {
        const i = Calc.clipPercentage(-0.2);
        expect(i).toEqual(0);
    });
});
describe('calc.ts clipPercentage', () => {
    it('should return 0.3', () => {
        const i = Calc.clipPercentage(0.3);
        expect(i).toEqual(0.3);
    });
});
describe('calc.ts clipPercentage', () => {
    it('should return 1', () => {
        const i = Calc.clipPercentage(1.2);
        expect(i).toEqual(1);
    });
});
