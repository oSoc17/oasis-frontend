import { RouteService } from '../app/services/routing.service';
import { RouteMockService } from '../app/services/routing.mock.service';
import { SearchData } from '../app/classes/searchData';
import 'rxjs/add/operator/toPromise';

describe('RoutingMockService test', () => {
    it('RoutingMockService#query()', (done) => {
        const routeService = new RouteMockService();
        routeService.query().then((connections) => {
            expect(connections).toEqual(jasmine.any(Array));
            connections.forEach((connection) => {
                expect(connection.arrivalStop).toBeDefined();
                expect(connection.arrivalTime).toBeDefined();
                expect(connection.departureStop).toBeDefined();
                expect(connection.departureTime).toBeDefined();
                expect(connection['http://vocab.gtfs.org/terms#trip']).toBeDefined();
            });
            done();
        }).catch(e => done.fail(e));
    }, 5000);
});

describe('RoutingService test', () => {
    it('RoutingService#query()', (done) => {
        const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
        const searchData = new SearchData('http://irail.be/stations/NMBS/008892007',
            'http://irail.be/stations/NMBS/008812005', '11:35', '10/07/2017', 'departureTime');

        routeService.query(searchData).then((connections) => {
            expect(connections).toEqual(jasmine.any(Array));
            connections.forEach((connection) => {
                expect(connection.arrivalStop).toBeDefined();
                expect(connection.arrivalTime).toBeDefined();
                expect(connection.departureStop).toBeDefined();
                expect(connection.departureTime).toBeDefined();
                expect(connection['http://vocab.gtfs.org/terms#trip']).toBeDefined();
            });
            done();
        }).catch(e => done.fail(e));
    }, 15000);
});

describe('SearchData create datalist test', () => {
    const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
    const searchDataList = SearchData.createPeriodicList('http://irail.be/stations/NMBS/008892007'
        , 'http://irail.be/stations/NMBS/008812005'
        , '12:30', '10/07/2017', 'departureTime', 3);

    it('should be 5 elements long', () => {
        expect(5).toEqual(searchDataList.length);
    });
    it('should contain SearchData objects', () => {
        expect(searchDataList[0]).toEqual(jasmine.any(SearchData));
    });
    it('should have date elements for each day', () => {
        expect(searchDataList[0].travelDate).not.toEqual(searchDataList[1].travelDate);
    });
});