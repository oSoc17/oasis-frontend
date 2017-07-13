import {IUserPreferences} from '../interfaces/iUserPreferences'

export class UserPreferencesMock implements IUserPreferences {
    weight_AvgDelay: number;
    weight_AvgChangesAmount: number;
    weight_AvgChangeTime: number;
    weight_DelayConsistency: number;
    weight_AvgTravelTime: number;
    weight_NumberOfRoutesWithinHour: number;
    weight_NumberOfMissedConnections: number;
    weight_Price: number;
    constructor() {
        this.weight_AvgDelay = 0.1;
        this.weight_AvgChangesAmount = 0.1;
        this.weight_AvgChangeTime = 0.1;
        this.weight_DelayConsistency = 0.1;
        this.weight_AvgTravelTime = 0.1;
        this.weight_NumberOfRoutesWithinHour = 0.1;
        this.weight_NumberOfMissedConnections = 0.2;
        this.weight_Price = 0.2;
    }
}
