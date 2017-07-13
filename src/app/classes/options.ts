export class Options {
    language = 'en_GB';
    qoeParameters = {
        AvgDelay: 50,
        AvgChangesAmount: 50,
        AvgChangeTime: 50,
        DelayConsistency: 50,
        AvgTravelTime: 50,
        NumberOfRoutesWithinHour: 50,
        NumberOfMissedConnections: 50,
        Price: 50
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
