export class Connection {
    id: string;
    type: string;
    departureStop: string;
    arrivalStop: string;
    departureTime: Date;
    arrivalTime: Date;
    departureDelay: Date = new Date(0);
    arrivalDelay: Date = new Date(0);
    gtfstrip: string;
    gtfsroute: string;

    constructor(GraphItemJson: any) {
        this.id = GraphItemJson['@id'];
        this.type = GraphItemJson['@type'];
        this.departureStop = GraphItemJson['departureStop'];
        this.arrivalStop = GraphItemJson['arrivalStop'];
        this.departureTime = new Date(Date.parse(GraphItemJson['departureTime']));
        this.arrivalTime = new Date(Date.parse(GraphItemJson['arrivalTime']));
        if (GraphItemJson['http://vocab.gtfs.org/terms#trip'] !== undefined) {
            this.gtfstrip = GraphItemJson['http://vocab.gtfs.org/terms#trip'];
        }else {
            this.gtfstrip = GraphItemJson['gtfs:trip'];
        }
        this.gtfsroute = GraphItemJson['http://vocab.gtfs.org/terms#route'];

        if (GraphItemJson['departureDelay']) {
            this.departureDelay.setMinutes(GraphItemJson['departureDelay']);
        }
        if (GraphItemJson['arrivalDelay']) {
            this.arrivalDelay.setMinutes(GraphItemJson['arrivalDelay']);
        }
    }
}
