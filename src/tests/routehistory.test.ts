import { Route } from '../app/classes/connections/route';
import { RouteHistory } from '../app/classes/connections/routeHistory';
import { Connection } from '../app/classes/connections/connection';

/**
 * RouteHistory constructor test
 */
describe('routeHistory.ts constructor', () => {
    it('object should be created', () => {
        const routeHistory = new RouteHistory([new Route([])]);
    });
});

/**
 * Test if average travel time is handled correctly
 */
describe('routeHistory.ts getAvgTravelTime()', () => {
    it('should return 15', () => {
        // setup
        const dummyjson1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(dummyjson1);
        const route1 = new Route([]);
        route1.addConnection(c1);
        const routeHistory = new RouteHistory([route1]);

        const dummyjson2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-11T09:30:00.000Z',
            'arrivalTime': '2017-07-11T09:50:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(dummyjson2);
        const route2 = new Route([]);
        route2.addConnection(c2);
        routeHistory.routes.push(route2);

        // assertion
        expect(routeHistory.getAvgTravelTime().getMinutes()).toEqual(15);

    });
});

/**
 * Check if amount of changes missed chance is calculated correctly
 */
describe('routeHistory.ts getChangeMissedChance() tests', () => {
    const startOnTime = new Connection({
        '@id': 'A',
        '@type': 'Connection',
        'departureStop': 'A',
        'arrivalStop': 'B',
        'departureTime': '2017-07-10T09:30:00.000Z',
        'arrivalTime': '2017-07-10T09:40:00.000Z',
        'http://vocab.gtfs.org/terms#trip': 'A',
        'gtfs:route': 'A',
        'departureDelay': 120,
        'arrivalDelay': 180
    });
    const endOnTime = new Connection({
        '@id': 'B',
        '@type': 'Connection',
        'departureStop': 'B',
        'arrivalStop': 'C',
        'departureTime': '2017-07-10T09:50:00.000Z',
        'arrivalTime': '2017-07-10T09:80:00.000Z',
        'http://vocab.gtfs.org/terms#trip': 'B',
        'gtfs:route': 'A',
        'departureDelay': 60,
        'arrivalDelay': 600
    });
    const startLate = new Connection({
        '@id': 'A',
        '@type': 'Connection',
        'departureStop': 'A',
        'arrivalStop': 'B',
        'departureTime': '2017-07-10T09:30:00.000Z',
        'arrivalTime': '2017-07-10T09:40:00.000Z',
        'http://vocab.gtfs.org/terms#trip': 'A',
        'gtfs:route': 'A',
        'departureDelay': 120,
        'arrivalDelay': 1800
    });
    const endLate = new Connection({
        '@id': 'B',
        '@type': 'Connection',
        'departureStop': 'B',
        'arrivalStop': 'C',
        'departureTime': '2017-07-10T09:50:00.000Z',
        'arrivalTime': '2017-07-10T09:80:00.000Z',
        'http://vocab.gtfs.org/terms#trip': 'B',
        'gtfs:route': 'A',
        'departureDelay': 1800,
        'arrivalDelay': 600
    });
    const r1 = new Route([startOnTime, endOnTime]);
    const r2 = new Route([startLate, endOnTime]);
    const r3 = new Route([startLate, endLate]);
    const rh1 = new RouteHistory([r1, r2, r3]);
    const rh2 = new RouteHistory([r1, r1, r1]);
    const rh3 = new RouteHistory([r2, r2, r2]);

    it('should return 0', () => {
        expect(rh2.getChangeMissedChance()).toBe(0);
    });
    it('should be 1', () => {
        expect(rh3.getChangeMissedChance()).toBe(1);
    });
    it('should return 1/3', () => {
        expect(rh1.getChangeMissedChance()).toBe(1 / 3);
    });
});

/**
 * Check if delay consistency is working properly
 */
describe('routeHistory.ts getDelayConsistency()', () => {
    it('should return 150,000 (2.5 min)', () => {
        // setup
        const dummyjson1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'arrivalDelay': 600,
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(dummyjson1);


        const dummyjson2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-11T09:30:00.000Z',
            'arrivalTime': '2017-07-11T09:50:00.000Z',
            'arrivalDelay': 900,
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(dummyjson2);
        const route1 = new Route([c1, c2]);
        const route2 = new Route([c2, c1]);
        const array = [route1, route2];
        const routeHistory = new RouteHistory(array);

        // assertion
        expect(routeHistory.getDelayConsistency().valueOf()).toBe(150000);

    });
});
