export class Options {
    language = 'en_GB';

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
            }
            console.log(JSON.stringify(this));
            return true;
        }
        return false;
    }
}