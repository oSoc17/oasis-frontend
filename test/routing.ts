import { expect } from 'chai';
import { RouteService } from '../src/app/services/routing.service';
import { SearchData } from '../src/app/classes/searchData';

describe('RoutingService test', () => {
    it('RoutingService#query()', () => {
        // http://belgium.linkedconnections.org/sncb/connections
        // http://belgianrail.linkedconnections.org/
        const routeService = new RouteService(['http://belgianrail.linkedconnections.org/']);
        const searchData = new SearchData(
            'http://irail.be/stations/NMBS/008892007',
            'http://irail.be/stations/NMBS/008812005',
            '12:30', '10/07/2017', 'departureTime');
        routeService.query(searchData).then((result) => {
            expect(result).to.have.key('@context');
        });
    });
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
})
