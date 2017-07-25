export class Connection {
    id: string; // URI of the connection
    type: string; // type of linked data fragment: should be 'Connection'
    departureStop: string; // URI of the departure stop
    arrivalStop: string; // URI of the arrival stop
    departureTime: Date; // Date object for depature
    arrivalTime: Date; // Date object for arrival
    departureDelay: Date = new Date(0); // delay for depature
    arrivalDelay: Date = new Date(0); // delay for arrival
    gtfstrip: string; // trip URI, read https://developers.google.com/transit/gtfs/reference/ for route vs trip
    gtfsroute: string; // route URI, read https://developers.google.com/transit/gtfs/reference/ for route vs trip

    /**
     *
     * @param GraphItemJson Linked Connections JSON with the following properties:
     *                      '@id', '@type', 'depatureStop', 'arrivalStop', 'http://vocab.gtfs.org/terms#trip' or
     *                      'gtfs:trip', 'http://vocab.gtfs.org/terms#route' and optionally 'departureDelay' and
     *                      'arrivalDelay'
     */
    constructor(GraphItemJson: any) {
        this.id = GraphItemJson['@id'];
        this.type = GraphItemJson['@type'];
        this.departureStop = GraphItemJson['departureStop'];
        this.arrivalStop = GraphItemJson['arrivalStop'];
        this.departureTime = new Date(Date.parse(GraphItemJson['departureTime']));
        this.arrivalTime = new Date(Date.parse(GraphItemJson['arrivalTime']));
        if (GraphItemJson['http://vocab.gtfs.org/terms#trip'] !== undefined) {
            this.gtfstrip = GraphItemJson['http://vocab.gtfs.org/terms#trip'];
        } else {
            this.gtfstrip = GraphItemJson['gtfs:trip'];
        }
        this.gtfsroute = GraphItemJson['http://vocab.gtfs.org/terms#route'];
        // if there is a delay property, set it
        if (GraphItemJson['departureDelay']) {
            this.departureDelay.setSeconds(GraphItemJson['departureDelay']);
        }
        // if there is a delay property, set it
        if (GraphItemJson['arrivalDelay']) {
            this.arrivalDelay.setSeconds(GraphItemJson['arrivalDelay']);
        }
    }
}
