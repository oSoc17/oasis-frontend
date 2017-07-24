export class Connection {
    id: string; // URI of the connection
    type: string; // type of linked data fragment: should be 'Connection'
    departureStop: string; // URI of the departure stop
    arrivalStop: string; // URI of the arrival stop
    departureTime: Date; // ISO 8601 timestamp for depature
    arrivalTime: Date; // ISO 8601 timestamp for arrival
    departureDelay: Date = new Date(0); // delay in minutes for depature
    arrivalDelay: Date = new Date(0); // delay in minutes for arrival
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
        // if there is no delay property, set it to 0
        if (GraphItemJson['departureDelay']) {
            this.departureDelay.setMinutes(GraphItemJson['departureDelay']);
        }
        // if there is no delay property, set it to 0
        if (GraphItemJson['arrivalDelay']) {
            this.arrivalDelay.setMinutes(GraphItemJson['arrivalDelay']);
        }
    }
}
