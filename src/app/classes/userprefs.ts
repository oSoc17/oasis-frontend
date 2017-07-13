import {IUserPreferences} from '../interfaces/iUserPreferences'
import { Options } from 'app/classes/options';
import { AppModule } from '../app.module';

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

    private rescale() {
        const total = this.avgChangesAmount + this.avgChangeTime
            + this.avgDelay + this.avgTravelTime
            + this.delayConsistency + this.numberOfMissedConnections
            + this.numberOfRoutesWithinHour + this.price;
        if (total) {
            this.avgDelay /= total;
            this.avgChangesAmount /= total;
            this.avgChangeTime /= total;
            this.delayConsistency /= total;
            this.avgTravelTime /= total;
            this.numberOfRoutesWithinHour /= total;
            this.numberOfMissedConnections /= total;
            this.price /= total;
        } else {
            this.avgDelay = 0.125;
            this.avgChangesAmount = 0.125;
            this.avgChangeTime = 0.125;
            this.delayConsistency = 0.125;
            this.avgTravelTime = 0.125;
            this.numberOfRoutesWithinHour = 0.125;
            this.numberOfMissedConnections = 0.125;
            this.price = 0.125;
        }
    }

    get weight_AvgDelay() {
        this.setAll();
        this.rescale();
        return this.avgDelay;
    }

    get weight_AvgChangesAmount() {
        this.setAll();
        this.rescale();
        return this.avgChangesAmount;
    }

    get weight_AvgChangeTime() {
        this.setAll();
        this.rescale();
        return this.avgChangeTime;
    }

    get weight_DelayConsistency() {
        this.setAll();
        this.rescale();
        return this.delayConsistency;
    }

    get weight_AvgTravelTime() {
        this.setAll();
        this.rescale();
        return this.avgTravelTime;
    }

    get weight_NumberOfRoutesWithinHour() {
        this.setAll();
        this.rescale();
        return this.numberOfRoutesWithinHour;
    }

    get weight_NumberOfMissedConnections() {
        this.setAll();
        this.rescale();
        return this.numberOfMissedConnections;
    }

    get weight_Price() {
        this.setAll();
        this.rescale();
        return this.price;
    }
}
