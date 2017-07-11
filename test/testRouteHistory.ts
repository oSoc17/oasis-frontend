import { expect } from 'chai';
import {Route} from '../src/app/classes/route';
import {RouteHistory} from "../src/app/classes/routeHistory";
import {Connection} from "../src/app/classes/connection";

/* Constructor test */
describe('routeHistory.ts constructor', () => {
    it('object should be created', () => {
        const routeHistory = new RouteHistory(new Route());
    });
});

/* getAvgTravelTime test */
describe('routeHistory.ts getAvgTravelTime()', () => {
    it('should return 15', () => {
        // setup
        const dummyjson1 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json1 = JSON.parse(dummyjson1);
        const c1 = new Connection(json1);
        const route1 = new Route();
        route1.connections.push(c1);
        const routeHistory = new RouteHistory(route1);

        const dummyjson2 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-11T09:30:00.000Z","arrivalTime": "2017-07-11T09:50:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json2 = JSON.parse(dummyjson2);
        const c2 = new Connection(json2);
        const route2 = new Route();
        route2.connections.push(c2);
        routeHistory.routes.push(route2);

        //assertion
        expect(routeHistory.getAvgTravelTime().getMinutes()).to.equal(15);

    });
});

