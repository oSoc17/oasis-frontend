export interface IQoE {

    getAvgDelay(): Date

    getAvgChangesAmount(): Date

    getAvgChangeTime(): Date

    getDelayConsistency(): Date

    getAvgTravelTime(): Date

    getNumberOfRoutesWithinHour(): number

    getNumberOfMissedConnections(): number

    getPrice(): number

    getQoE(weights): number

}
