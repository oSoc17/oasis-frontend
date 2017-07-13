import { Router, NavigationStart, NavigationEnd } from '@angular/router';

const NodeCache = require('node-cache');
const config = require('../../config.json');

export class Cache {
    /* TODO: Find a decent, (almost) perfect way to make this not reset on every page refresh/redirect */
    public static cache = new NodeCache({
        stdTTL: config.caching.ttl,
        checkperiod: config.caching.deleteInterval
    });

    constructor(private router: Router) {
        /* A solution for losing cache @routing? */
        this.router.events.subscribe((e) => {
            this.addItem('test', 'test').then().catch(er => console.log(er));
            if (e instanceof NavigationStart) {
                console.log('Redirecting to a page');
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('cache', JSON.stringify(Cache.cache));
                }
            }

            if (e instanceof NavigationEnd) {
                console.log('Redirected from a page');
                if (typeof localStorage !== 'undefined') {
                    console.log(JSON.parse(localStorage.getItem('cache')));
                    this.appendCache(JSON.parse(localStorage.getItem('cache')));
                }
            }

            console.log(e);
        });
    }

    private appendCache(oldCache) {
        this.getAllKeys().then((keys) => {
            console.log('PRINT KEYS');
            console.log(keys);
            for (let i = 0; i < keys.length; i++) {
                const obj = oldCache.data[keys[i]];
                if (obj) {
                    this.addItem(keys[i], obj.v).then().catch(e => console.log(e));
                }
            }
            console.log(Cache.cache);
        }).catch(e => console.log(e));
    }

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
            Cache.cache.keys(function (err, keys) {
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
