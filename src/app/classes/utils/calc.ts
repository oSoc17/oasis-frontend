export class Calc {
    /**
     * Calculates an average based on the number array
     * @param values an array filled with numbers to calc avg from
     */
    public static avg(values: number[]): number {
        let sum = 0;
        for (const i of values) {
            sum += i;
        }
        return sum / values.length;
    }

    /**
     * Recalculate the average based on the old average, total amount of values and a newly added value
     * @param oldAverage the average we need to recalculate
     * @param newValue the new value added to the average
     * @param totalAmount the total amount of values
     */
    public static newAvg(oldAverage: number, newValue: number, totalAmount: number): number {
        return oldAverage + (newValue - oldAverage) / totalAmount;
    }

    /**
     * Calculate standard deviation
     * @param values an array of values used to calc the standard deviation
     */
    public static stdDev(values: number[]): number {
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

    /**
     * Clips given value to never over or underflow the percentage value (0-1)
     * @param value the value that needs clipping
     */
    public static clipPercentage(value: number): number {
        if (value > 1) {
            return 1;
        }
        if (value < 0) {
            return 0;
        }
        return value;
    }

    /**
     * returns the ratio of a given value between a max and a min
     * @param value the value to calculate ratio from
     * @param min the minimum value (which will rescale to 0)
     * @param max the maximum value (which will rescale to 1)
     */
    public static linearInterpolatePercentage(value: number, min: number, max: number): number {
        if (max === min) {
            console.error('can\'t interpolate when max and min are the same value');
            return 0.5;
        }
        return Calc.clipPercentage((value - min) / (max - min));
    }
}
