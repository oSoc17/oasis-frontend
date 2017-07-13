export interface IQoE {

    getAvgDelay(): any

    getAvgChangesAmount(): any

    getAvgChangeTime(): any

    getDelayConsistency(): any

    getAvgTravelTime(): any

    getNumberOfRoutesWithinHour(): any

    getNumberOfMissedConnections(): any

    getPrice(): any

    getQoE(weights): any

}
