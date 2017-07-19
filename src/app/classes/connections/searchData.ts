// Custom modules
import { Utils } from '../utils/utils';

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
        // console.log('period: ', period, ' amount: ', amount);
        const calcdate = new Date(Date.parse(startDate));
        if (!goesForward) {
            period = -period;
        }
        let dateString = Utils.formatDate(calcdate);
        dataList.push(new SearchData(depStation, arrStation, travelTime, dateString, timeType));
        for (let i = 1; i < amount; i++) {
            calcdate.setDate(calcdate.getDate() + period);
            dateString = Utils.formatDate(calcdate);
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

    /**
     * convert the searchData object into a queryable object
     */
    toJSON(): any {
        const datetime = Utils.combineTimeAndDate(this.travelTime, this.travelDate);
        const inAnHour = new Date(datetime.getTime() + Utils.getHoursValue(1));
        const transferTime = 180;
        const json = {
            'arrivalStop': this.arrStation,
            'departureStop': this.depStation,
            'latestDepartTime': inAnHour,
            'departureTime': datetime,
            'minimumTransferTime': transferTime
        };

        return json;
    }
}
