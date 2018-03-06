import { Route } from '../app/classes/connections/route';
import { Connection } from '../app/classes/connections/connection';

/**
 * Check if route constructor works
 */
describe('Route.ts constructor', () => {
    it('object should be created', () => {
        const route = new Route([]);
    });
});

/**
 * Checks if route connections are handled properly
 */
describe('Route.ts connections', () => {
    it('Connection should be added to array connections', () => {
        // setup
        const dummyJson = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:30:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        
        const c = new Connection(dummyJson);
        const route = new Route([]);
        // assertion
        expect(route.totalConnections).toEqual(0);
        // execution
        route.addConnection(c);
        // assertion
        expect(route.totalConnections).toEqual(1);

    });
});

/**
 * Check if totaltraveltime is as expected
 */
describe('Route.ts totalTravelTime()', () => {
    it('Should return 20 minutes', () => {
        // setup
        const json1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        }

        const json2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814357',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814358',
            'departureTime': '2017-07-10T09:40:00.000Z',
            'arrivalTime': '2017-07-10T09:50:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        }

        const c1 = new Connection(json1);
        const c2 = new Connection(json2);
        const route = new Route([]);
        route.addConnection(c1);
        route.addConnection(c2);
        const travelTime: Date = route.totalTravelTime;
        // assertion
        expect(travelTime.getMinutes()).toEqual(20);

    });
});

/**
 * Checks if amount of intermediate stops are correct
 */
describe('Route.ts getInterMediateStopsAmount()', () => {
    it('Should return 1 intermediate stop', () => {
        // setup
        const json1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(json1);
        const json2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814357',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814358',
            'departureTime': '2017-07-10T09:40:00.000Z',
            'arrivalTime': '2017-07-10T09:50:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(json2);
        const route = new Route([]);
        route.addConnection(c1);
        route.addConnection(c2);
        const stops: number = route.interMediateStopsAmount;
        // assertion
        expect(stops).toEqual(1);

    });
});

/**
 * Checks if amount of changes is correct
 */
describe('Route.ts getChangesAmount()', () => {
    it('Should return 1 change', () => {
        // setup
        const json1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'http://vocab.gtfs.org/terms#trip': 'A',
            'http://vocab.gtfs.org/terms#route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(json1);
        const json2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814357',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814358',
            'departureTime': '2017-07-10T09:42:00.000Z',
            'arrivalTime': '2017-07-10T09:50:00.000Z',
            'http://vocab.gtfs.org/terms#trip': 'B',
            'http://vocab.gtfs.org/terms#route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(json2);
        const route = new Route([]);
        route.addConnection(c1);
        route.addConnection(c2);
        const changes: number = route.changesAmount;
        // assertion
        expect(changes).toEqual(1);
    });
});

/**
 * Checks if average change time is correct
 */
describe('Route.ts getAvgChangeTime()', () => {
    it('Should return 1 change', () => {
        // setup
        const json1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'http://vocab.gtfs.org/terms#trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'http://vocab.gtfs.org/terms#route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(json1);
        const json2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814357',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814358',
            'departureTime': '2017-07-10T09:42:00.000Z',
            'arrivalTime': '2017-07-10T09:50:00.000Z',
            'http://vocab.gtfs.org/terms#trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            'http://vocab.gtfs.org/terms#route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(json2);
        const route = new Route([]);
        route.addConnection(c1);
        route.addConnection(c2);
        const changes: Date = route.avgChangeTime;
        // assertion
        expect(changes.getMinutes()).toEqual(2);
    });
});

/**
 * Check if delays are properly returned
 */
describe('Route.ts getDelay()', () => {
    it('Should return 3 minutes', () => {
        // setup
        const json1 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814340',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814357',
            'departureTime': '2017-07-10T09:30:00.000Z',
            'arrivalTime': '2017-07-10T09:40:00.000Z',
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170710',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c1 = new Connection(json1);
        const json2 = {
            '@id': '#1499679000000881434088____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            '@type': 'Connection',
            'departureStop': 'http://irail.be/stations/NMBS/008814357',
            'arrivalStop': 'http://irail.be/stations/NMBS/008814358',
            'departureTime': '2017-07-10T09:42:00.000Z',
            'arrivalTime': '2017-07-10T09:50:00.000Z',
            'arrivalDelay': 180,
            'gtfs:trip': 'http://irail.be/trips/88____%3A007%3A%3A8841004%3A8884335%3A52%3A1247%3A20170711',
            'gtfs:route': 'http://irail.be/routes/51'
        };
        const c2 = new Connection(json2);
        const route = new Route([]);
        route.addConnection(c1);
        route.addConnection(c2);
        const changes: Date = route.delay;
        // assertion
        expect(changes.getMinutes()).toEqual(3);
    });
});

/**
 * Checks if route module returns missed changes correctly
 */
describe('Route.ts getChangesMissed()', () => {
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
    it('should return 0', () => {
        expect(r1.getChangesMissed()).toEqual(0);
    });
    it('should return 1', () => {
        expect(r2.getChangesMissed()).toEqual(1);
    });
    it('should return 0', () => {
        expect(r3.getChangesMissed()).toEqual(0);
    });
});
