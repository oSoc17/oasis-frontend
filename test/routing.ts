import { RouteService } from '../src/app/services/routing.service';
import { SearchData } from '../src/app/classes/searchData';
import 'rxjs/add/operator/toPromise';

describe('RoutingService test', () => {
    it('RoutingService#query()', (done) => {
        const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
        const searchData = new SearchData('http://irail.be/stations/NMBS/008892007',
                'http://irail.be/stations/NMBS/008812005', '11:35', '10/07/2017', 'departureTime');

        routeService.query(searchData).then((data) => {
            if (data[0].arrivalStop) {
                return done();
            }
            done('No arrivalStop value in first item of array');
        }).catch(e => done(e));
    }).timeout(5000);
});
