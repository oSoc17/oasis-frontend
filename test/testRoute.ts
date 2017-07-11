import { expect } from 'chai';
import {Route} from '../src/app/classes/route';
import {Connection} from '../src/app/classes/connection';

/* Constructor test */
describe('Route.ts constructor', () => {
  it('object should be created', () => {
    const route = new Route();
  });
});

/* Connections test */
describe('Route.ts connections', () => {
  it('Connection should be added to array connections', () => {
    // setup
    const dummyjson = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:30:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
    const json = JSON.parse(dummyjson);
    const c = new Connection(json);
    const route = new Route();
    // assertion
    expect(route.connections.length).to.equal(0);
    // execution
    route.connections.push(c);
    // assertion
    expect(route.connections.length).to.equal(1);

  });
});

/* QoE test */
describe('Route.ts getQoE()', () => {
  it('Should return 0', () => {
    // setup
    const dummyjson = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
    const json = JSON.parse(dummyjson);
    const c = new Connection(json);
    const route = new Route();
    route.connections.push(c);
    // assertion
    expect(route.getQoE()).to.equal(0);

  });
});

/* totalTravelTime test */
describe('Route.ts totalTravelTime()', () => {
    it('Should return 20 minutes', () => {
        // setup
        const json1 = JSON.parse('{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}');
        const c1 = new Connection(json1);
        const json2 = JSON.parse('{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814357","arrivalStop": "http://irail.be/stations/NMBS/008814358","departureTime": "2017-07-10T09:40:00.000Z","arrivalTime": "2017-07-10T09:50:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}');
        const c2 = new Connection(json2);
        const route = new Route();
        route.connections.push(c1);
        route.connections.push(c2);
        const travelTime: Date = route.totalTravelTime();
        // assertion
        expect(travelTime.getMinutes()).to.equal(20);

    });
});

/* intermediateStops test */
describe('Route.ts intermediateStops()', () => {
    it('Should return 1', () => {
        // setup
        const json1 = JSON.parse('{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}');
        const c1 = new Connection(json1);
        const json2 = JSON.parse('{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814357","arrivalStop": "http://irail.be/stations/NMBS/008814358","departureTime": "2017-07-10T09:40:00.000Z","arrivalTime": "2017-07-10T09:50:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}');
        const c2 = new Connection(json2);
        const route = new Route();
        route.connections.push(c1);
        route.connections.push(c2);
        const stops: number = route.interMediateStops();
        // assertion
        expect(stops).to.equal(1);

    });
});
