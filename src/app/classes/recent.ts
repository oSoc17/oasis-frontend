import { SearchData } from './searchData';
import { Utils } from './utils';

export class Recent {
    public searchData: SearchData[];
    public depStationReadable: string;
    public arrStationReadable: string;
    public travelTimeReadable: string;
    public travelDay: number;

    public static fromJson(recentJson: any): Recent {
        const searchData: SearchData[] = [];
        for (const search of recentJson.searchData) {
            // Todo: convert departuretime to HH:MM
            // And to dd/mm/yyyy
            search.departureTime = new Date(search.departureTime);
            searchData.push(new SearchData(search.departureStop, search.arrivalStop,
                Utils.timeFromDate(search.departureTime), Utils.formatDate(search.departureTime), 'departure'));
        }
        // console.log(searchData);
        return new Recent(searchData, recentJson.depStationReadable, recentJson.arrStationReadable,
            recentJson.travelTimeReadable, recentJson.travelDay);
    }

    constructor(searchData, depStationReadable, arrStationReadable, travelTimeReadable, travelDay) {
        this.searchData = searchData;
        this.depStationReadable = depStationReadable;
        this.arrStationReadable = arrStationReadable;
        this.travelTimeReadable = travelTimeReadable;
        this.travelDay = travelDay;
    }
}
