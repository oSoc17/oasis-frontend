import * as Chai from 'chai';
import * as ChaiAsPromised from 'chai-as-promised';
Chai.use(ChaiAsPromised);
const expect = Chai.expect;
import { RouteService } from '../src/app/services/routing.service';
import { RouteMockService } from '../src/app/services/routing.mock.service';
import { SearchData } from '../src/app/classes/searchData';
import 'rxjs/add/operator/toPromise';

describe('RoutingMockService test', () => {
    it('RoutingMockService#query()', (done) => {
        const routeService = new RouteMockService();
        routeService.query().then((connections) => {
            expect(connections).to.be.an('array');
            connections.forEach((connection) => {
                expect(connection).to.include.all.keys([
                    'arrivalStop', 'arrivalTime',
                    'departureStop', 'departureTime',
                    'http://vocab.gtfs.org/terms#trip']);
            });
            done();
        }).catch(e => done(e));
    }).timeout(5000);
});

describe('RoutingService test', () => {
    it('RoutingService#query()', (done) => {
        const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
        const searchData = new SearchData('http://irail.be/stations/NMBS/008892007',
            'http://irail.be/stations/NMBS/008812005', '11:35', '10/07/2017', 'departureTime');

        routeService.query(searchData).then((connections) => {
            expect(connections).to.be.an('array');
            connections.forEach((connection) => {
                expect(connection).to.include.all.keys([
                    'arrivalStop', 'arrivalTime',
                    'departureStop', 'departureTime',
                    'http://vocab.gtfs.org/terms#trip']);
            });
            done();
        }).catch(e => done(e));
    }).timeout(15000);
});

describe('SearchData create datalist test', () => {
    const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
    const searchDataList = SearchData.createPeriodicList('http://irail.be/stations/NMBS/008892007'
        , 'http://irail.be/stations/NMBS/008812005'
        , '12:30', '10/07/2017', 'departureTime', 1);

    it('should be 5 elements long', () => {
        expect(5).equal(searchDataList.length);
    });
    it('should contain SearchData objects', () => {
        expect(searchDataList[0]).instanceOf(SearchData);
    });
    it('should have date elements for each day', () => {
        expect(searchDataList[0].travelDate).not.equal(searchDataList[1].travelDate);
    });
});
