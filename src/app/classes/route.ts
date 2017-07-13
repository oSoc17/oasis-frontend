import { Connection } from './connection';

export class Route {
    connections: Connection[];

    constructor(connections: Connection[]) {
        this.connections = connections;
    }

    public getDataValues() {
        /* returns components of QoE */
        // TODO: return seperate values from QoE calculation
    }

    public getTotalTravelTime(): Date {
        /* returns the total travel time (Date) */
        if (this.connections.length) {
            const first: Date = this.connections[0].departureTime;
            const last: Date = this.connections[this.connections.length - 1].arrivalTime;
            return new Date(last.valueOf() - first.valueOf());
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }

    public getInterMediateStopsAmount(): number {
        /* returns amount of intermediate stops */
        if (this.connections.length) {
            return this.connections.length - 1;
        }
        // console.log('List of connections is empty');
        return null;
    }

    public getChangesAmount(): number {
        /* returns amount of changes */
        if (this.connections.length > 1) {
            let changesAmount = 0;
            console.log('connections: '+ this.connections.length);
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

    public getAvgChangeTime(): Date {
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

    public getDelay(): Date {
        /* returns the last arrivalDelay */
        // TODO: is the delay only defined by the last arrivalDelay? What about missed changes due to delays?
        if (this.connections.length > 1) {
            return this.connections[this.connections.length - 1].arrivalDelay;
        }
        // console.log('List of connections is empty');
        return new Date(0);
    }
}
