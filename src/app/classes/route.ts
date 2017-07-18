import { Connection } from './connection';

export class Route {
    private connections: Connection[];

    constructor(connections: Connection[]) {
        this.connections = connections;
    }

    public get departureStation() {
        return this.connections[0].departureStop;
    }

    public get arrivalStation() {
        return this.connections[this.connections.length - 1].arrivalStop;
    }

    public get departureTime() {
        return this.connections[this.connections.length - 1].departureTime;
    }

    public get dataValues() {
        /* returns components of QoE */
        // TODO: return seperate values from QoE calculation
        return undefined;
    }

    public get totalTravelTime(): Date {
        /* returns the total travel time (Date) */
        if (this.connections.length) {
            const first: Date = this.connections[0].departureTime;
            const last: Date = this.connections[this.connections.length - 1].arrivalTime;
            return new Date(last.valueOf() - first.valueOf());
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

    public get interMediateStopsAmount(): number {
        /* returns amount of intermediate stops */
        if (this.connections.length) {
            return this.connections.length - 1;
        }
        // console.log('List of connections is empty');
        return null;
    }

    public get changesAmount(): number {
        /* returns amount of changes */
        if (this.connections.length > 1) {
            let changesAmount = 0;
            console.log('connections: ' + this.connections.length);
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

    public get avgChangeTime(): Date {
        /* returns average change time of a route */
        if (this.connections.length > 1) {
            let changeAmount = 0;
            let sumChangeTime = 0;
            for (let i = 0; i < this.connections.length - 1; i++) {
                if (this.connections[i].gtfstrip !== this.connections[i + 1].gtfstrip) {
                    changeAmount++;
                    sumChangeTime += this.connections[i + 1].departureTime.valueOf() - this.connections[i].arrivalTime.valueOf();
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

    public get delay(): Date {
        /* returns the last arrivalDelay */
        // TODO: is the delay only defined by the last arrivalDelay? What about missed changes due to delays?
        if (this.connections.length > 1) {
            return this.connections[this.connections.length - 1].arrivalDelay;
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

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
}
