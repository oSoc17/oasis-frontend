export class Average {
    public static calculate(values: number[]): number {
        /* calculates average */
        let sum = 0;
        for(let i of values)
            sum += i;
        return sum / values.length;
    }

    public static recalculate(oldAverage: number, newValue: number, totalAmount: number): number {
        /* recalculates an old average based on a new value and the total amount of values */
        return oldAverage + (newValue - oldAverage)/totalAmount;
    }
}
