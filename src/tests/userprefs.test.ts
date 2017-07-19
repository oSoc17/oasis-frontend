import {UserPreferencesMock} from '../app/classes/mocks/userprefs.mock';
import {IUserPreferences} from '../app/interfaces/iUserPreferences';
import {UserPreferences} from '../app/classes/userData/userprefs';

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
            expect(tot).toEqual(1);
        });
});

describe('testing UserPrreferences constructor', () => {
    const prefs = new UserPreferences();
    const tot =  prefs.weight_AvgChangesAmount
                     + prefs.weight_AvgChangeTime
                     + prefs.avgDelay
                     + prefs.weight_AvgTravelTime
                     + prefs.weight_DelayConsistency
                     + prefs.weight_NumberOfMissedConnections
                     + prefs.weight_NumberOfRoutesWithinHour
                     + prefs.weight_Price;
        it('should total to 1', () => {
            expect(Math.round(tot)).toEqual(1);
        });
});

