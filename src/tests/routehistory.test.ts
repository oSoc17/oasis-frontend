import { Route } from '../app/classes/route';
import { RouteHistory } from '../app/classes/routeHistory';
import { Connection } from '../app/classes/connection';

/* Constructor test */
describe('routeHistory.ts constructor', () => {
    it('object should be created', () => {
        const routeHistory = new RouteHistory([new Route([])]);
    });
});

/* getAvgTravelTime test */
describe('routeHistory.ts getAvgTravelTime()', () => {
    it('should return 15', () => {
        // setup
        const dummyjson1 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json1 = JSON.parse(dummyjson1);
        const c1 = new Connection(json1);
        const route1 = new Route([]);
        route1.connections.push(c1);
        const routeHistory = new RouteHistory([route1]);

        const dummyjson2 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-11T09:30:00.000Z","arrivalTime": "2017-07-11T09:50:00.000Z","gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json2 = JSON.parse(dummyjson2);
        const c2 = new Connection(json2);
        const route2 = new Route([]);
        route2.connections.push(c2);
        routeHistory.routes.push(route2);

        //assertion
        expect(routeHistory.getAvgTravelTime().getMinutes()).toEqual(15);

    });
});

/* getDelayConsistency test *//*
describe('routeHistory.ts getDelayConsistency()', () => {
    it('should return 150,000 (2.5 min)', () => {
        // setup
        const dummyjson1 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-10T09:30:00.000Z","arrivalTime": "2017-07-10T09:40:00.000Z","arrivalDelay":10,"gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json1 = JSON.parse(dummyjson1);
        const c1 = new Connection(json1);
        const route1 = new Route([]);
        route1.connections.push(c1);

        const dummyjson2 = '{"@id": "#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","@type": "Connection","departureStop": "http://irail.be/stations/NMBS/008814340","arrivalStop": "http://irail.be/stations/NMBS/008814357","departureTime": "2017-07-11T09:30:00.000Z","arrivalTime": "2017-07-11T09:50:00.000Z","arrivalDelay":15,"gtfs:trip": "http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710","gtfs:route": "http://irail.be/routes/51"}';
        const json2 = JSON.parse(dummyjson2);
        const c2 = new Connection(json2);
        const route2 = new Route([]);
        route2.connections.push(c2);
        const array = [route1, route2];
        const routeHistory = new RouteHistory(array);

        // assertion
        expect(routeHistory.getDelayConsistency().valueOf()).to.equal(150000);

    });
});*/
