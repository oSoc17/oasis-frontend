export class Options {
    language = 'en_GB';
    qoeParameters = {
        avgDelay: 50,
        avgChangesAmount: 50,
        avgChangeTime: 50,
        delayConsistency: 50,
        avgTravelTime: 50,
        numberOfRoutesWithinHour: 50,
        numberOfMissedConnections: 50,
        price: 50
    };

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
