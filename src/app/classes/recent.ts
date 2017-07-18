import { SearchData } from './searchData';
export class Recent {
    public searchData: SearchData[];
    public depStationReadable: string;
    public arrStationReadable: string;
    public travelTimeReadable: string;
    public travelDay: number;

    constructor(searchData, depStationReadable, arrStationReadable, travelTimeReadable, travelDay) {
        this.searchData = searchData;
        this.depStationReadable = depStationReadable;
        this.arrStationReadable = arrStationReadable;
        this.travelTimeReadable = travelTimeReadable;
        this.travelDay = travelDay;
    }

}
