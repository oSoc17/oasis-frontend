import 'rxjs/add/operator/toPromise';
import { Manager } from '../app/classes/manager';
import { SearchData } from '../app/classes/searchData';
import { QoE } from '../app/classes/qoe';

describe('Manager test', () => {
    it('Manager#getQoE()', (done) => {
        const searchData = new SearchData('http://irail.be/stations/NMBS/008896115',
                    'http://irail.be/stations/NMBS/008821006', '12:30', '10/07/2017', '');
        const manager = new Manager();
        manager.getQoE([searchData], false);
        manager.getRouteListener.subscribe(e => {
            const qoe = manager.qoeList[0];
            expect(qoe).toEqual(jasmine.any(QoE));
            done();
        });
    });
});
