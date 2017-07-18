export class Calc {
    public static avg(values: number[]): number {
        /* calculates average */
        let sum = 0;
        for (const i of values) {
            sum += i;
        }
        return sum / values.length;
    }

    public static newAvg(oldAverage: number, newValue: number, totalAmount: number): number {
        /* recalculates an old average based on a new value and the total amount of values */
        return oldAverage + (newValue - oldAverage) / totalAmount;
    }

    public static stdDev(values: number[]): number {
        /* returns the standard deviation */
        const avg = Calc.avg(values);

        const squareDiffs = values.map(function(value){
            const diff = value - avg;
            const sqrDiff = diff * diff;
            return sqrDiff;
        });

        const avgSquareDiff = Calc.avg(squareDiffs);

        const stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }

    public static clipPercentage(value: number): number {
        /* clips given value to a percentage between 0 and 1 */
        if (value > 1) {
            return 1;
        }
        if (value < 0) {
            return 0;
        }
        return value;
    }

    public static linearInterpolatePercentage(value: number, min: number, max: number): number {
        /* returns the ratio of a given value between a max and a min */
        if (max === min) {
            throw Error('max & min can\'t be the same');
        }
        return Calc.clipPercentage((value - min) / (max - min));
    }
}
