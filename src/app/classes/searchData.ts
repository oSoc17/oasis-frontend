export class SearchData {
    public depStation: string; // id of departure station
    public arrStation: string; // id of arrival station
    public travelTime: string; // travel time in HH:MM
    public travelDate: string; // travel date in DD/MM/YYYY
    public timeType: string;   // either 'departureTime' or 'arrivalTime'

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
        const datetime = new Date(year, month, day, hour, min).toISOString();
        const json = {
            'arrivalStop': this.arrStation,
            'departureStop': this.depStation
        };
        json[this.timeType] = datetime;
        return json;
    }
}
