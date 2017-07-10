import {Connection} from "./Connection";

export class Route {
  private connections: Connection[] = [];

  public getQoE() {
    /* returns the  global QoE percentage of the route */
    if (this.connections.length == 0) {
      throw new Error("Route is empty");
    } else {
      let QoE: number = 0;
      let totalTravelTime: number = 0;
      let n = 1;
      for (let c of this.connections) {
        // iterative avg calculation algorithm
        let travelTime = c.arrivalTime.valueOf() - c.departureTime.valueOf();
        QoE = QoE + (c.calculateQoE() * travelTime - QoE) / (n * totalTravelTime);
        n++;
        totalTravelTime += travelTime;
      }
      return QoE;
    }
  }

  public addConnection(c: Connection) {
    /* appends a Connection to the array */
    this.connections.push(c);
  }

  public getDataValues() {
    /* returns components of QoE */
  }

}
