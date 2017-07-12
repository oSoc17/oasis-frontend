import {IUserPreferences} from '../interfaces/iUserPreferences'
export class UserPreferences implements IUserPreferences {
    weight_AvgDelay: number;
    weight_AvgChangesAmount: number;
    weight_AvgChangeTime: number;
    weight_DelayConsistency: number;
    weight_AvgTravelTime: number;
    weight_NumberOfRoutesWithinHour: number;
    weight_NumberOfMissedConnections: number;
    weight_Price: number;
    constructor(avgDelay: number, avgChangesAmount: number, avgChangeTime: number,
        delayConsistency: number, avgTravelTime: number,
        routenumber: number, missedConnections: number, price: number) {
        this.weight_AvgDelay = avgDelay;
        this.weight_AvgChangesAmount = avgChangesAmount;
        this.weight_AvgChangeTime = avgChangeTime;
        this.weight_DelayConsistency = delayConsistency;
        this.weight_AvgTravelTime = avgTravelTime;
        this.weight_NumberOfRoutesWithinHour = routenumber;
        this.weight_NumberOfMissedConnections = missedConnections;
        this.weight_Price = price;

        const tot = this.weight_AvgChangesAmount + this.weight_AvgChangeTime
                    + this.weight_AvgDelay + this.weight_AvgTravelTime
                    + this.weight_DelayConsistency + this.weight_NumberOfMissedConnections
                    + this.weight_NumberOfRoutesWithinHour + this.weight_Price;
        if (tot !== 1) {
            throw new Error('total should be 1');
        }
        }
}
