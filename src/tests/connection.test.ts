import { Connection } from '../app/classes/connections/connection';

/**
 * Tests if connection class constructor works without any errors
 */
describe('Connection.ts: Connection class constructor test', () => {
    // setup
    const dummyjson = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710"'
        + ',"@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": '
        + '"http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime":'
        + ' "2017-07-10T09:30:00.000Z","http://vocab.gtfs.org/terms#trip": "http://irail.be/trips/88____%3A007%'
        + '3A%3A8841004%3A8884335%3A52%3A1247%3A20170710"'
        + ',"http://vocab.gtfs.org/terms#route": "http://irail.be/routes/51"}';
    const json = JSON.parse(dummyjson);
    // execution
    const connection = new Connection(json);
    // assertions
    it('id should be #1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710', () => {
        expect(connection.id).toEqual('#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710');
    });

    it('type should be Connection', () => {
        expect(connection.type).toEqual('Connection');
    });

    it('departurestop should be http://irail.be/stations/NMBS/008814340', () => {
        expect(connection.departureStop).toEqual('http://irail.be/stations/NMBS/008814340');
    });

    it('arrivalstop should be http://irail.be/stations/NMBS/008814357', () => {
        expect(connection.arrivalStop).toEqual('http://irail.be/stations/NMBS/008814357');
    });

    it('departuretime should be 2017-07-10T09:30:00.000Z', () => {
        expect(connection.departureTime.getTime()).toEqual(new Date(Date.parse('2017-07-10T09:30:00.000Z')).getTime());
    });

    it('arrivaltime should be 2017-07-10T09:30:00.000Z', () => {
        expect(connection.arrivalTime.getTime()).toEqual(new Date(Date.parse('2017-07-10T09:30:00.000Z')).getTime());
    });

    it('trip should be http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710', () => {
        expect(connection.gtfstrip).toEqual('http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710');
    });

    it('route should be http://irail.be/routes/51', () => {
        expect(connection.gtfsroute).toEqual('http://irail.be/routes/51');
    });

    it('departureDelay should be 0', () => {
        expect(connection.departureDelay.getMinutes()).toEqual(new Date(0).getMinutes());
    });


});

/**
 * Checks if departuredelays are processed properly by the constructor
 */
describe('Connection.ts: Connection class constructor test', () => {
    // setup
    const dummyjson = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710"'
        + ',"@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": '
        + '"http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime":'
        + ' "2017-07-10T09:30:00.000Z", "departureDelay": "60","gtfs:trip": "http://irail.be/trips/88____%3A007%'
        + '3A%3A8841004%3A8884335%3A52%3A1247%3A20170710"'
        + ',"gtfs:route": "http://irail.be/routes/51"}';
    const json = JSON.parse(dummyjson);
    // execution
    const connection = new Connection(json);
    // assertions
    it('departureDelay should be 10', () => {
        expect(connection.departureDelay.getMinutes()).toEqual(1);
    });
});

