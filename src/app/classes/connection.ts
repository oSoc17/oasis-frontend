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
		this.gtfstrip = GraphItemJson['gtfs:trip'];
		this.gtfsroute = GraphItemJson['gtfs:route'];

		if(GraphItemJson['departureDelay'])
            this.departureDelay.setMinutes(GraphItemJson['departureDelay']);
        if(GraphItemJson['arrivalDelay'])
            this.arrivalDelay.setMinutes(GraphItemJson['arrivalDelay']);
	}
    /**
     * calculates the QoE for this object using data stored in the object
     */
    public calculateQoE(): number {
        const ret = 0;
        // TODO: calculate QoE for this connection
        return ret;
    }
    // TODO:
}
