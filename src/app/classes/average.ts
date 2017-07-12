export class Average {

    public static calculate(values: number[]): number {
        /* calculates average */
        let sum = 0;
        for (const i of values) {
            sum += i;
        }
        return sum / values.length;
    }

    public static recalculate(oldAverage: number, newValue: number, totalAmount: number): number {
        /* recalculates an old average based on a new value and the total amount of values */
        return oldAverage + (newValue - oldAverage) / totalAmount;
    }

    public static standardDeviation(values: number[]): number {
        /* returns the standard deviation */
        const avg = Average.calculate(values);

        const squareDiffs = values.map(function(value){
            let diff = value - avg;
            let sqrDiff = diff * diff;
            return sqrDiff;
        });

        const avgSquareDiff = Average.calculate(squareDiffs);

        const stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }
}
