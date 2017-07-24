// Custom modules
import { Connection } from './connection';

export class Route {
    private connections: Connection[];

    /**
     * construct the Route object
     * @param connections an array of all connections making up this route
     */
    constructor(connections: Connection[]) {
        this.connections = connections;
    }

    /**
     * get the departure station URI
     */
    public get departureStation(): string {
        return this.connections[0].departureStop;
    }

    /**
     * get the arrival station URI
     */
    public get arrivalStation(): string {
        return this.connections[this.connections.length - 1].arrivalStop;
    }

    /**
     * get the departure time date object
     */
    public get departureTime(): Date {
        return this.connections[0].departureTime;
    }

    /**
     * get the arrival time date object
     */
    public get arrivalTime(): Date {
        return this.connections[this.connections.length - 1].arrivalTime;
    }

    /**
     * get the Total travel time of the route
     */
    public get totalTravelTime(): Date {
        if (this.connections.length) {
            const first: Date = this.connections[0].departureTime;
            const last: Date = this.connections[this.connections.length - 1].arrivalTime;
            return new Date(last.valueOf() - first.valueOf());
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

    /**
     * get the Amount of intermediate stops of the route
     */
    public get interMediateStopsAmount(): number {
        if (this.connections.length) {
            return this.connections.length - 1;
        }
        // console.log('List of connections is empty');
        return null;
    }

    /**
     * get the Amount of changes of the route
     */
    public get changesAmount(): number {
        if (this.connections.length > 1) {
            let changesAmount = 0;
            // console.log('connections: ' + this.connections.length);
            for (let i = 0; i < this.connections.length - 1; i++) {
                if (this.connections[i].gtfstrip !== this.connections[i + 1].gtfstrip) {
                    changesAmount++;
                }
            }
            return changesAmount;
        }
        // console.log('List of connections is empty');
        return 0;
    }

    /**
     * get the average time for a train change of the route
     */
    public get avgChangeTime(): Date {
        if (this.connections.length > 1) {
            let changeAmount = 0;
            let sumChangeTime = 0;
            for (let i = 0; i < this.connections.length - 1; i++) {
                if (this.connections[i].gtfstrip !== this.connections[i + 1].gtfstrip) {
                    changeAmount++;
                    sumChangeTime += this.connections[i + 1].departureTime.valueOf() -
                                this.connections[i].arrivalTime.valueOf();
                }
            }
            if (changeAmount) {
                return new Date(sumChangeTime / changeAmount);
            }
            // console.log('There are no train changes to be made');
            return new Date(0);
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

    /**
     * get the last arrival delay of the route
     */
    public get delay(): Date {
        // TODO: is the delay only defined by the last arrivalDelay? What about missed changes due to delays?
        if (this.connections.length > 1) {
            if (this.connections[this.connections.length - 1].arrivalDelay) {
                return this.connections[this.connections.length - 1].arrivalDelay;
            } else {
                return new Date(0);
            }
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

    /**
     * get the Amount of connections of the route
     */
    public get totalConnections() {
        return this.connections.length;
    }

    /**
     * get the amount of possible missed changes
     * @param min minimum time needed for a train change
     */
    public getChangesMissed(min: number = 3): number {
        let ret = 0;
        let dep: Connection;
        let arr: Connection;
        if (this.connections.length > 1) {
            for (let i = 0; i < this.connections.length - 1; i++) {
                if (this.connections[i].gtfstrip !== this.connections[i + 1].gtfstrip) {
                    dep = this.connections[i];
                    arr = this.connections[i + 1];

                    const arrT = new Date();
                    arrT.setTime(dep.arrivalTime.getTime() + (dep.arrivalDelay.getTime()));
                    const depT = new Date();
                    depT.setTime(arr.departureTime.getTime() + arr.departureDelay.getTime());

                    if (arrT.getTime() + min * 60 * 1000 >= depT.getTime()) {
                        ret++;
                    }
                }
            }
        }
        return ret;
    }

    /**
     * Add a connection to a route
     */
    public addConnection(conn: Connection) {
        this.connections.push(conn);
    }
}
