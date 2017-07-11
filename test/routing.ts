import * as Chai from 'chai';
import * as ChaiAsPromised from 'chai-as-promised';
Chai.use(ChaiAsPromised);
const expect = Chai.expect;

import { RouteService } from '../src/app/services/routing.service';
import { SearchData } from '../src/app/classes/searchData';
import 'rxjs/add/operator/toPromise';



describe('RoutingService test', () => {
    it('RoutingService#query()', () => {
        const routeService = new RouteService(['http://belgium.linkedconnections.org/sncb/connections']);
        const searchData = new SearchData('http://irail.be/stations/NMBS/008892007',
                'http://irail.be/stations/NMBS/008812005', '11:35', '10/07/2017', 'departureTime');
        routeService.query(searchData);
        /*expect(routeService.query(searchData)).to.eventually.to.be.an('array').to.have.deep.property('arrivalStop',
                    { arrivalStop: 'http://irail.be/stations/NMBS/008821964' }).notify(done);*/
        return Chai.assert.eventually.deepProperty(routeService.query(searchData),
            'arrivalStop', 'arrivalStop is a property');
    }); // .timeout(5000)
});
