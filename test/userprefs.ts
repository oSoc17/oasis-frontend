import {expect} from 'chai';
import {UserPreferencesMock} from '../src/app/classes/userprefs.mock';
import {IUserPreferences} from '../src/app/interfaces/iUserPreferences';

describe('testing UserPreferences interface class', () => {
    let prefs: IUserPreferences;
        prefs = new UserPreferencesMock();
        const tot =  prefs.weight_AvgChangesAmount
                     + prefs.weight_AvgChangeTime
                     + prefs.weight_AvgDelay
                     + prefs.weight_AvgTravelTime
                     + prefs.weight_DelayConsistency
                     + prefs.weight_NumberOfMissedConnections
                     + prefs.weight_NumberOfRoutesWithinHour
                     + prefs.weight_Price;
        it('should total to 1', () => {
            expect(tot).to.equal(1);
        });
});

