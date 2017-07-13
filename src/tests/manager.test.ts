import 'rxjs/add/operator/toPromise';
import { Manager } from '../app/classes/manager';
import { SearchData } from '../app/classes/searchData';

describe('Manager test', () => {
    it('Manager#getQoE()', (done) => {
        const searchData = new SearchData('not_used', 'not_used', '12:30', '10/07/2017', '');
        Manager.getQoE([searchData]).then((qoe) => {
            console.log('qoe.getAvgDelay()');
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
            console.log(qoe.getQoE());
            done();
        }).catch(e => done.fail(e));
    });
});
