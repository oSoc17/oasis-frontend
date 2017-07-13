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
            const totinp = avgDelay + avgChangesAmount + avgChangeTime +
            delayConsistency + avgTravelTime + routenumber + missedConnections + price;
            this.weight_AvgDelay = avgDelay / totinp;
            this.weight_AvgChangesAmount = avgChangesAmount / totinp;
            this.weight_AvgChangeTime = avgChangeTime / totinp;
            this.weight_DelayConsistency = delayConsistency / totinp;
            this.weight_AvgTravelTime = avgTravelTime / totinp;
            this.weight_NumberOfRoutesWithinHour = routenumber / totinp;
            this.weight_NumberOfMissedConnections = missedConnections / totinp;
            this.weight_Price = price / totinp;

            const tot = this.weight_AvgChangesAmount + this.weight_AvgChangeTime
                        + this.weight_AvgDelay + this.weight_AvgTravelTime
                        + this.weight_DelayConsistency + this.weight_NumberOfMissedConnections
                        + this.weight_NumberOfRoutesWithinHour + this.weight_Price;
        }
}
