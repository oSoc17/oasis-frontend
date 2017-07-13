import 'rxjs/add/operator/toPromise';
import { Manager } from '../app/classes/manager';
import { SearchData } from '../app/classes/searchData';
import { QoE } from '../app/classes/qoe';

describe('Manager test', () => {
    it('Manager#getQoE()', (done) => {
        const searchData = new SearchData('http://irail.be/stations/NMBS/008896115',
                    'http://irail.be/stations/NMBS/008821006', '12:30', '10/07/2017', '');
        Manager.getQoE([searchData], false).then((qoe) => {
            /*console.log('qoe.getAvgDelay()');
            console.log(qoe.getAvgDelay());
            console.log('qoe.getAvgChangesAmount()');
            console.log(qoe.getAvgChangesAmount());
            console.log('qoe.getAvgChangeTime()');
            console.log(qoe.getAvgChangeTime());
            console.log('qoe.getDelayConsistency()');
            console.log(qoe.getDelayConsistency());
            console.log('qoe.getAvgTravelTime()');
            console.log(qoe.getAvgTravelTime());
            console.log('qoe.getNumberOfRoutesWithinHour()');
            console.log(qoe.getNumberOfRoutesWithinHour());
            console.log('qoe.getNumberOfMissedConnections()');
            console.log(qoe.getNumberOfMissedConnections());
            console.log('qoe.getPrice()');
            console.log(qoe.getPrice());
            console.log('qoe.getQoE()');
            console.log(qoe.getQoE());*/
            expect(qoe).toEqual(jasmine.any(QoE));
            done();
        }).catch(e => done.fail(e));
    });
});
