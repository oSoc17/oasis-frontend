// Custom modules
import { IUserPreferences } from '../../interfaces/iUserPreferences'
import { Options } from './options';
import { AppModule } from '../../app.module';

/**
 * this class is deprecated, use options instead
 */
export class UserPreferences implements IUserPreferences {
    private options: Options = AppModule.options;

    avgDelay: number;
    avgChangesAmount: number;
    avgChangeTime: number;
    delayConsistency: number;
    avgTravelTime: number;
    numberOfRoutesWithinHour: number;
    numberOfMissedConnections: number;
    price: number;

    constructor() {
        this.setAll();
        this.rescale();
    }

    /**
     * Set all variables based on the user options
     */
    private setAll() {
        this.avgDelay = this.options.qoeParameters.avgDelay;
        this.avgChangesAmount = this.options.qoeParameters.avgChangesAmount;
        this.avgChangeTime = this.options.qoeParameters.avgChangeTime;
        this.delayConsistency = this.options.qoeParameters.delayConsistency;
        this.avgTravelTime = this.options.qoeParameters.avgTravelTime;
        this.numberOfRoutesWithinHour = this.options.qoeParameters.numberOfRoutesWithinHour;
        this.numberOfMissedConnections = this.options.qoeParameters.numberOfMissedConnections;
        this.price = this.options.qoeParameters.price;
    }

    /**
     * Rescale all user options to in total become 100%
     */
    private rescale() {
        const total = this.avgChangesAmount + this.avgChangeTime + this.avgDelay + this.delayConsistency;
        if (total) {
            this.avgDelay /= total;
            this.avgChangesAmount /= total;
            this.avgChangeTime /= total;
            this.delayConsistency /= total;
            // this.avgTravelTime /= total;
            // this.numberOfRoutesWithinHour /= total;
            // this.numberOfMissedConnections /= total;
            // this.price /= total;
        } else {
            const max = 4;
            this.avgDelay = 1 / max;
            this.avgChangesAmount =  1 / max;
            this.avgChangeTime =  1 / max;
            this.delayConsistency = 1 / max;
            // this.avgTravelTime =  1 / max;
            // this.numberOfRoutesWithinHour =  1 / max;
            // this.numberOfMissedConnections =  1 / max;
            // this.price =  1 / max;
        }
    }

    /**
     * Rescale and return the weight of avgDelay
     */
    public get weight_AvgDelay() {
        this.setAll();
        this.rescale();
        return this.avgDelay;
    }

    /**
     * Rescale and return the weight of avgChangesAmount
     */
    public get weight_AvgChangesAmount() {
        this.setAll();
        this.rescale();
        return this.avgChangesAmount;
    }

    /**
     * Rescale and return the weight of AvgChangeTime
     */
    public get weight_AvgChangeTime() {
        this.setAll();
        this.rescale();
        return this.avgChangeTime;
    }

    /**
     * Rescale and return the weight of DelayConsistency
     */
    public get weight_DelayConsistency() {
        this.setAll();
        this.rescale();
        return this.delayConsistency;
    }

    /**
     * Rescale and return the weight of AvgTravelTime
     */
    public get weight_AvgTravelTime() {
        this.setAll();
        this.rescale();
        return this.avgTravelTime;
    }

    /**
     * Rescale and return the weight of NumberOfRoutesWithinHour
     */
    public get weight_NumberOfRoutesWithinHour() {
        this.setAll();
        this.rescale();
        return this.numberOfRoutesWithinHour;
    }

    /**
     * Rescale and return the weight of NumberOfMissedConnections
     */
    public get weight_NumberOfMissedConnections() {
        this.setAll();
        this.rescale();
        return this.numberOfMissedConnections;
    }

    /**
     * Rescale and return the weight of Price
     */
    public get weight_Price() {
        this.setAll();
        this.rescale();
        return this.price;
    }
}
