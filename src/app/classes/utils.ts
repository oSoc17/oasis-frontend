export class Utils {
    public static timeFromDate(date: Date): string {
        return `${Utils.zeroPad(date.getHours(), 2)}:${Utils.zeroPad(date.getMinutes(), 2)}`;
    }

    public static formatDate(date: Date): string {
        return Utils.zeroPad(date.getDate(), 2) + '/' + Utils.zeroPad(date.getMonth() + 1, 2) + '/' +
                    Utils.zeroPad(date.getFullYear(), 4);
    }

    public static zeroPad(num: number, width: number): string {
        const zero = width - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join('0') + num;
    }
}
