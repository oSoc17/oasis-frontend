import { Recent } from './recent';

export class Options {
    language = 'en_GB';
    qoeParameters = {
        avgDelay: 90,
        avgChangesAmount: 85,
        avgChangeTime: 85,
        delayConsistency: 90,
        avgTravelTime: 65,
        numberOfRoutesWithinHour: 70,
        numberOfMissedConnections: 85,
        price: 78
    };
    recents: Recent[] = [];

    public save(): boolean {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('Options', JSON.stringify(this));
            console.log(JSON.stringify(this));
            return true;
        }
        return false;
    }

    public load(): boolean {
        if (typeof localStorage !== 'undefined') {
            const options: Options = JSON.parse(localStorage.getItem('Options'));
            if (options) {
                this.language = options.language;
                if (options.qoeParameters) {
                    this.qoeParameters = options.qoeParameters;
                }
            }
            console.log(JSON.stringify(this));
            return true;
        }
        return false;
    }
}
