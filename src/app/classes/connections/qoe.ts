// Custom Modules
import { IQoE } from '../../interfaces/iQoE';
import { IUserPreferences } from '../../interfaces/iUserPreferences';

import { RouteHistory } from './routeHistory';
import { Route } from './route';
import { Calc } from '../utils/calc';
import { AppModule } from '../../app.module';

export class QoE implements IQoE {
    private routeHistory: RouteHistory;
    private userPreferences: IUserPreferences;
    private _departureTime: Date;
    private _arrivalTime: Date;
    private _weight = 1.0 / 4;
    public prefs = AppModule.options.qoeParameters;

    constructor(routeHistory: RouteHistory, preference: IUserPreferences) {
        this.routeHistory = routeHistory;
        this.userPreferences = preference;
        if (routeHistory.routes.length > 0) {
            this._departureTime = routeHistory.routes[0].departureTime;
            this._arrivalTime = routeHistory.routes[0].arrivalTime;
        } else {
            this._departureTime = new Date(0);
            this._arrivalTime = new Date(0);
        }
    }

    /**
     * get Departure time of this connection
     */
    public get departureTime(): Date {
        return this._departureTime;
    }

    /**
     * get Arrival time of this connection
     */
    public get arrivalTime(): Date {
        return this._arrivalTime;
    }

    /**
     * get Departure station URI of this connection
     */
    public get departureStation(): string {
        return this.routeHistory.routes[0].departureStation;
    }

    /**
     * get Arrival station URI of this connection
     */
    public get arrivalStation(): string {
        return this.routeHistory.routes[0].arrivalStation;
    }

    /**
     * Add a route to the routehistory
     */
    public addRoute(route: Route) {
        return this.routeHistory.routes.push(route);
    }

    /**
     * get the average delay of all routes inside routeHistory
     */
    public getAvgDelay(): any {
        const delay: number = this.routeHistory.getAvgDelay().valueOf() / 60000; // in minutes
        const weight: number = this._weight;
        /**
         *  < userpref: on schedule (100%)
         *  > 120: worst case (0%)
         */
        const score = weight * Calc.linearInterpolatePercentage(delay, 120, this.prefs['avgDelay']);
        return {
            score: score,
            value: this.routeHistory.getAvgDelay() // Date
        };
    }

    /**
     * get the average amount of changes of all routes inside routeHistory
     */
    public getAvgChangesAmount(): any {
        const changes: number = this.routeHistory.getAvgChangesAmount();
        const weight: number = this._weight;
        /**
         *  < userpref: best case (100%)
         *  > 6: worst case (0%)
         */
        const score: number = weight * Calc.linearInterpolatePercentage(changes, 6, this.prefs['avgChangesAmount']);
        return {
            score: score,
            value: changes
        };
    }

    /**
     * get the average time per change of all routes inside routeHistory
     */
    public getAvgChangeTime(): any {
        const weight: number = this._weight;
        const changeTime: number = new Date(this.routeHistory.getAvgChangeTime()).valueOf() / 60000; // in minutes
        if ((this.routeHistory.getAvgChangesAmount() < 1)) {
            return {
                score: weight * 1,
                value: this.routeHistory.getAvgChangeTime() // Date
            };
        } else {
            /**
             *  < 2.5: impossible (0%)
             *  = 4.5: best case (100%)
             *  > userpref: worst case (0%)
             */
            const scoreLower = Calc.linearInterpolatePercentage(changeTime, 2.5, this.prefs['avgChangeTime']);
            const scoreUpper = Calc.linearInterpolatePercentage(changeTime, 120, this.prefs['avgChangeTime']);
            const score: number = weight * (changeTime < 4.5 ? scoreLower : scoreUpper);
            return {
                score: score,
                value: this.routeHistory.getAvgChangeTime() // Date
            };
        }
    }

    /**
     * get the consistency of the delays over all routes inside routeHistory
     */
    public getDelayConsistency(): any {
        const stdDev: number = this.routeHistory.getDelayConsistency().valueOf();
        const avg: number = this.routeHistory.getAvgDelay().valueOf();
        const cov: number = avg ? stdDev / avg : 0; // coefficient of variation
        const weight: number = this._weight;
        /**
         *  < userpref: on schedule (100%)
         *  > 1: mostly delayed (0%)
         */
        const score = weight * Calc.linearInterpolatePercentage(cov, 1, 0.21 + 3 * this.prefs['delayConsistency']);
        return {
            score: score,
            value: this.routeHistory.getDelayConsistency() // Date
        };
    }

    /**
     * get the average travel time/duration over all routes inside routeHistory
     */
    public getAvgTravelTime(): any {
        const travelTime: number = this.routeHistory.getAvgTravelTime().valueOf() / 60000; // in minutes
        const weight: number = this._weight;
        /**
         *  < 0: perfect (100%)
         *  > 120: long trip (0%) -> note based on real evidence
         */
        const score = weight * Calc.linearInterpolatePercentage(travelTime, 120, 0);
        return {
            score: score,
            value: this.routeHistory.getAvgTravelTime() // Date
        };
    }

    /**
     * get the number of routes per hour heading this direction
     */
    public getNumberOfRoutesWithinHour(): any {
        // TODO: update this to work.
        const period = 30; // minutes between trips, generated
        const weight: number = this._weight;
        /**
         *  < 5: very frequent (100%)
         *  > 60: poor frequency (0%)
         */
        const score = weight * Calc.linearInterpolatePercentage(period, 60, 5);
        return {
            score: score,
            value: period // Generated
        };
    }

    /**
     * get the amount of connection you can possibly miss due to delays
     */
    public getNumberOfMissedConnections(): any {
        const missedConnections = this.routeHistory.getChangeMissedChance();
        const weight: number = this._weight;
        const score = weight * Calc.linearInterpolatePercentage(missedConnections, this.prefs['numberOfMissedConnections'], 0);
        return {
            score: score,
            value: missedConnections // Generated
        };
    }

    /**
     * get the average price per travel
     */
    public getPrice(): any {
        const price = 5;
        const priceRatio = price / (this.routeHistory.getAvgTravelTime().valueOf() / 60000);
        const weight: number = this._weight;
        const score = weight * Calc.linearInterpolatePercentage(priceRatio, 3, 0);
        return {
            score: score,
            value: price // Generated
        };
    }

    /**
     * get the total Quality Of Experience score
     */
    public getQoE(): number {
        let sum = 0;
        // sum += this.getAvgTravelTime().score;
        sum += this.getAvgChangeTime().score;
        sum += this.getAvgChangesAmount().score;
        sum += this.getDelayConsistency().score;
        sum += this.getAvgDelay().score;
        // sum += this.getNumberOfMissedConnections().score;
        // sum += this.getNumberOfRoutesWithinHour().score;
        // sum += this.getPrice().score;

        return sum * sum; // power for more contrast
    }

    public get amount() {
        return this.routeHistory.routes.length;
    }
}
