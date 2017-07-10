<<<<<<< HEAD
import {Connection} from './Connection';
=======
import {Connection} from "./Connection";
import {} from 'jasmine';
>>>>>>> 596ba85dcfb9af733392b6ca7f864965d9d67143

export class Route {
  connections: Connection[] = [];

  public getQoE(): number {
    /* returns the  global QoE percentage of the route */
    if (this.connections.length === 0) {
      throw new Error('Route is empty');
    } else {
<<<<<<< HEAD
      let QoE = 0;
      let totalTravelTime = 0;
      let n = 1;
      for (const c of this.connections) {
        // iterative avg calculation algorithm
        const travelTime = c.arrivalTime.valueOf() - c.departureTime.valueOf();
        QoE = QoE + (c.calculateQoE() * travelTime - QoE) / (n * totalTravelTime);
        n++;
=======
      let QoE: number = 0;
      let totalTravelTime: number = 0;
      let n: number = 0;
      for (let c of this.connections) {
        // iterative avg calculation algorithm
        let travelTime:number = c.arrivalTime.valueOf() - c.departureTime.valueOf();
>>>>>>> 596ba85dcfb9af733392b6ca7f864965d9d67143
        totalTravelTime += travelTime;
        n++;
        QoE = QoE + (c.calculateQoE() * travelTime - QoE) / (n * totalTravelTime);
        //console.log("QoE: "+QoE);
      }
      return QoE;
    }
  }

  public getDataValues() {
    /* returns components of QoE */
    //TODO: return seperate values from QoE calculation
  }

}
