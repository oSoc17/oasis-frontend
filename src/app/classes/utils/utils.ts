export class Utils {
    /**
     * Convert a date object into a time string
     * @param date the date to extract the time string from
     */
    public static timeStringFromDate(date: Date): string {
        return `${Utils.zeroPad(date.getHours(), 2)}:${Utils.zeroPad(date.getMinutes(), 2)}`;
    }

    /**
     * Convert to UTC time string
     * @param val date value
     */
    public static toUTCTime(val: number) {
        const date = new Date(val);
        return `${Utils.zeroPad(date.getUTCHours(), 2)}:${Utils.zeroPad(date.getUTCMinutes(), 2)}`;
    }

    /**
     * convert value to percentage
     * @param val value 0-1
     */
    public static toPercentage(val: number) {
        return Math.round(val * 100);
    }

    /**
     * Format the date in a defined style
     * @param date the date that needs formatting
     * @param typeStyle the style it should be formatted in defaults to Belgian
     */
    public static formatDate(date: Date, typeStyle: string = 'BE_NL'): string {
        const day = Utils.zeroPad(date.getDate(), 2);
        const month = Utils.zeroPad(date.getMonth() + 1, 2);
        const year = Utils.zeroPad(date.getFullYear(), 4);
        switch (typeStyle) {
            default:
                // If an unknown typeStyle is set return BE_NL.
                return `${day}/${month}/${year}`;
        }
    }

    /**
     * Add 0's to a number untill it matches the wished pattern
     * @param num the original number
     * @param width the wished length of the result with 0's added
     */
    public static zeroPad(num: number, width: number): string {
        const zero = width - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join('0') + num;
    }


    /**
     * generate date object which only contains time
     * @param hours
     * @param minutes
     */
    public static dateFromTime(hours: number, minutes: number) {
        const date = new Date(0);
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
    }

    /**
     * Get latest past day that equals the dayOfWeek value
     * @param dayOfWeek a number indicating the day of the week (0-6)
     */
    public static getLatest(dayOfWeek: number) {
        const d = new Date();
        const day = d.getDay();
        d.setDate(d.getDate() - day + dayOfWeek);
        return d;
    }

    /**
     * Returns a date object combining both the timestring and datestring
     * @param time time in HH:MM format
     * @param date date in dd/mm/yyyy format
     */
    public static combineTimeAndDate(time: string, date: string) {
        const timeSplit = time.split(':');
        const dateSplit = date.split('/');

        const hour = Number(timeSplit[0]);
        const min = Number(timeSplit[1]);
        const day = Number(dateSplit[0]);
        const month = Number(dateSplit[1]) - 1;
        const year = Number(dateSplit[2]);

        return new Date(year, month, day, hour, min);
    }

    /**
     * Returns a value (in milliseconds) of the given amount of seconds
     * @param amount amount of seconds
     */
    public static getSecondsValue(amount: number) {
        return amount * 1000;
    }

    /**
     * Returns a value (in milliseconds) of the given amount of minutes
     * @param amount amount of minutes
     */
    public static getMinutesValue(amount: number) {
        return amount * 60 * 1000;
    }

    /**
     * Returns a value (in milliseconds) of the given amount of hours
     * @param amount amount of hours
     */
    public static getHoursValue(amount: number) {
        return amount * 60 * 60 * 1000;
    }
}
