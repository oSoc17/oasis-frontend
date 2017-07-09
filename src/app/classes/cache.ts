const NodeCache = require('node-cache');
const config = require('../../config.json');

export class Cache {
    /* TODO: Find a way to make this not reset on page refresh */
    public static cache = new NodeCache({
        stdTTL: config.caching.ttl,
        checkperiod: config.caching.deleteInterval
    });

    public addItem(key: string, obj: any): Promise<any> {
        return new Promise((resolve, reject) => {
            Cache.cache.set(key, obj, (err, success) => {
                if (err) {
                    reject(err);
                }
                console.log('item added to cache');
                resolve(success);
            });
        });
    }

    public getItem(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Cache.cache.get(key, (err, value) => {
                if (err) {
                    reject(err);
                }
                if (value) {
                    console.log('item retrieved from cache');
                    resolve(value);
                } else {
                    reject('No item found');
                }
            });
        });
    }

    public delItem(key: string): Promise<any> {
        console.log('item removed from cache');
        return new Promise((resolve, reject) => {
            Cache.cache.del(key, (err, count) => {
                if (err) {
                    reject(err);
                }
                if (count) {
                    resolve(count);
                } else {
                    reject('No item found');
                }
            });
        });
    }

    public getAllKeys(): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            Cache.cache.keys( function( err, keys ){
                if (err) {
                    reject(err);
                }
                if (keys) {
                    resolve(keys);
                } else {
                    reject('Nothing in cache');
                }
            });
        });
    }

    flushCache() {
        Cache.cache.flushAll();
    }
}
