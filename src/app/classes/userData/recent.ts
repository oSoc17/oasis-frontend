// Custom modules
import { SearchData } from '../connections/searchData';
import { Utils } from '../utils/utils';

export class Recent {
    public searchData: SearchData[];
    public depStationReadable: string;
    public arrStationReadable: string;
    public travelTimeReadable: string;
    public travelDay: number;

    /**
     * Convert a json back into a proper usable recent object
     * @param recentJson a json object describing a recent object
     */
    public static fromJson(recentJson: any): Recent {
        const searchData: SearchData[] = [];
        for (const search of recentJson.searchData) {
            search.departureTime = new Date(search.departureTime);
            searchData.push(new SearchData(search.departureStop, search.arrivalStop,
                Utils.timeStringFromDate(search.departureTime), Utils.formatDate(search.departureTime), 'departure'));
        }
        // console.log(searchData);
        return new Recent(searchData, recentJson.depStationReadable, recentJson.arrStationReadable,
            recentJson.travelTimeReadable, recentJson.travelDay);
    }

    /**
     * constructs the Recent objects
     * @param searchData the latest SearchData instance
     * @param depStationReadable standardname of departure station
     * @param arrStationReadable standardname of arrival station
     * @param travelTimeReadable traveltime in hh:mm format
     * @param travelDay index of the queried day (starts at sunday = 0)
     */
    constructor(searchData, depStationReadable, arrStationReadable, travelTimeReadable, travelDay) {
        this.searchData = searchData;
        this.depStationReadable = depStationReadable;
        this.arrStationReadable = arrStationReadable;
        this.travelTimeReadable = travelTimeReadable;
        this.travelDay = travelDay;
    }
}
