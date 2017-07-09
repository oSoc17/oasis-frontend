export class SearchData {
    public depStation: string;
    public arrStation: string;
    public travelTime: string;
    public travelDate: string;
    public timeType: string;

    constructor(depStation, arrStation, travelTime, travelDate, timeType) {
        this.depStation = depStation;
        this.arrStation = arrStation;
        this.travelTime = travelTime;
        this.travelDate = travelDate;
        this.timeType = timeType;
    }
}
