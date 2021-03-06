import { Calc } from '../app/classes/utils/calc';

/**
 * Calculate percentage
 */
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

/**
 * Calculate stdDev
 */
describe('calc.ts stdDev', () => {
    it('should return 12.298996142875', () => {
        const i = Calc.stdDev([10, 2, 38, 23, 38, 23, 21]);
        expect(i).toBeCloseTo(12.298996142875);
    });
});

/**
 * Calculate median
 */
describe('calc.ts median odd amount', () => {
    it('should return 23', () => {
        const i = Calc.median([10, 2, 38, 23, 38, 23, 21]);
        expect(i).toBe(23);
    });
});

describe('calc.ts median even amount', () => {
    it('should return 22', () => {
        const i = Calc.median([10, 2, 38, 38, 23, 21]);
        expect(i).toBe(22);
    });
});
