/**
 * formats date object into DD/MM/YYY string
 */
export function formatDate(date: Date): string {
    return zeroPad(date.getDate(), 2) + '/' + zeroPad(date.getMonth() + 1, 2) + '/' + zeroPad(date.getFullYear(), 4);
}

export function GetLatest(dayOfWeek: number) {
    const d = new Date();
    const day = d.getDay();
    d.setDate(d.getDate() - day + dayOfWeek);
    return d;
}

/**
 * returns string of number of the specified width (or larger), padded with leading zeroes
 */
export function zeroPad(num: number, width: number): string {
    const zero = width - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
}

export class SearchData {
    public depStation: string; // id of departure station
    public arrStation: string; // id of arrival station
    public travelTime: string; // travel time in HH:MM
    public travelDate: string; // travel date in DD/MM/YYYY
    public timeType: string;   // either 'depart' or 'arrival'
    public latestDepartTime: Date;
    public departureTime: Date;

    /**
     * returns a list of SearchData objects where the travelDate is split according to the provided parameters
     * @param depStation id of departure station
     * @param arrStation id of arrival station
     * @param travelTime traveltime in HH:MM
     * @param startDate startDate as 'MM/DD/YY'
     * @param timeType either 'departureTime' or 'arrivalTime'
     * @param period days between trips
     * @param amount amount of SearchDataObjects wanted (default = 5)
     * @param goesForward wether or not the days should be added instead of removed to the startdate (default = false)
     */
    public static createPeriodicList(depStation, arrStation, travelTime, startDate, timeType, period: number, amount: number = 5,
                                     goesForward: boolean = false): SearchData[] {
        const dataList = [];
        console.log('period: ', period, ' amount: ', amount);
        const calcdate = new Date(Date.parse(startDate));
        if (!goesForward) {
            period = -period;
        }
        let dateString = formatDate(calcdate);
        dataList.push(new SearchData(depStation, arrStation, travelTime, dateString, timeType));
        for (let i = 1; i < amount; i++) {
            calcdate.setDate(calcdate.getDate() + period);
            dateString = formatDate(calcdate);
            dataList.push(new SearchData(depStation, arrStation, travelTime, dateString, timeType));
        }
        return dataList;
    }

    constructor(depStation, arrStation, travelTime, travelDate, timeType) {
        this.depStation = depStation;
        this.arrStation = arrStation;
        this.travelTime = travelTime;
        this.travelDate = travelDate;
        this.timeType = timeType;
    }

    toJSON(): any {
        const hour = Number(this.travelTime.split(':')[0]);
        const min = Number(this.travelTime.split(':')[1]);
        const day = Number(this.travelDate.split('/')[0]);
        const month = Number(this.travelDate.split('/')[1]) - 1;
        const year = Number(this.travelDate.split('/')[2]);
        const datetime = new Date(year, month, day, hour, min);
        const inAnHour = new Date(datetime.getTime() + 60 * 60 * 1000);
        const fifteenMins = new Date(15 * 60 * 1000);
        const json = {
            'arrivalStop': this.arrStation,
            'departureStop': this.depStation,
            'latestDepartTime': inAnHour,
            'departureTime': datetime,
            'minimumTransferTime': fifteenMins
        };

        /* TODO: Make arrivalTime possible with lc-client update
        switch (this.timeType) {
            case 'arrival':
                json['arrivalTime'] = datetime;
                break;
            default:
                json['departureTime'] = datetime;
        }*/

        return json;
    }
}
