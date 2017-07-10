import {Connection} from './connection';

export class Route {
  connections: Connection[] = [];

  public getQoE(): number {
    /* returns the  global QoE percentage of the route */
    if (this.connections.length === 0) {
      throw new Error('Route is empty');
    } else {
      let QoE = 0;
      let totalTravelTime = 0;
      let n = 0;
      for (const c of this.connections) {
        // iterative avg calculation algorithm
        const travelTime: number = c.arrivalTime.valueOf() - c.departureTime.valueOf();
        totalTravelTime += travelTime;
        n++;
        QoE = QoE + (c.calculateQoE() * travelTime - QoE) / (n * totalTravelTime);
        // console.log("QoE: "+QoE);
      }
      return QoE;
    }
  }

  public getDataValues() {
    /* returns components of QoE */
    // TODO: return seperate values from QoE calculation
  }
}
