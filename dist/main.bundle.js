webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_connectionQuery_component__ = __webpack_require__("../../../../../src/app/components/search/connectionQuery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_connections_connections_component__ = __webpack_require__("../../../../../src/app/components/connections/connections.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components


var routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__components_search_connectionQuery_component__["a" /* ConnectionQuery */]
    },
    {
        path: 'connections',
        component: __WEBPACK_IMPORTED_MODULE_3__components_connections_connections_component__["a" /* Connections */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_module__ = __webpack_require__("../../../../../src/app/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_module__ = __webpack_require__("../../../../../src/app/services.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Imports */




/* Routing */

/* Components */


/* Services */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: __WEBPACK_IMPORTED_MODULE_5__components_module__["a" /* Components */].components,
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: __WEBPACK_IMPORTED_MODULE_7__services_module__["a" /* Services */].providers,
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/cache.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });

var NodeCache = __webpack_require__("../../../../node-cache/index.js");
var config = __webpack_require__("../../../../../src/config.json");
var Cache = (function () {
    function Cache(router) {
        var _this = this;
        this.router = router;
        /* A solution for losing cache @routing? */
        this.router.events.subscribe(function (e) {
            _this.addItem('test', 'test').then().catch(function (e) { return console.log(e); });
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationStart */]) {
                console.log('Redirecting to a page');
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('cache', JSON.stringify(Cache.cache));
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* NavigationEnd */]) {
                console.log('Redirected from a page');
                if (typeof localStorage !== 'undefined') {
                    console.log(JSON.parse(localStorage.getItem('cache')));
                    _this.appendCache(JSON.parse(localStorage.getItem('cache')));
                }
            }
            console.log(e);
        });
    }
    Cache.prototype.appendCache = function (oldCache) {
        var _this = this;
        this.getAllKeys().then(function (keys) {
            console.log('PRINT KEYS');
            console.log(keys);
            for (var i = 0; i < keys.length; i++) {
                var obj = oldCache.data[keys[i]];
                if (obj) {
                    _this.addItem(keys[i], obj.v).then().catch(function (e) { return console.log(e); });
                }
            }
            console.log(Cache.cache);
        }).catch(function (e) { return console.log(e); });
    };
    Cache.prototype.addItem = function (key, obj) {
        return new Promise(function (resolve, reject) {
            Cache.cache.set(key, obj, function (err, success) {
                if (err) {
                    reject(err);
                }
                console.log('item added to cache');
                resolve(success);
            });
        });
    };
    Cache.prototype.getItem = function (key) {
        return new Promise(function (resolve, reject) {
            Cache.cache.get(key, function (err, value) {
                if (err) {
                    reject(err);
                }
                if (value) {
                    console.log('item retrieved from cache');
                    resolve(value);
                }
                else {
                    reject('No item found');
                }
            });
        });
    };
    Cache.prototype.delItem = function (key) {
        console.log('item removed from cache');
        return new Promise(function (resolve, reject) {
            Cache.cache.del(key, function (err, count) {
                if (err) {
                    reject(err);
                }
                if (count) {
                    resolve(count);
                }
                else {
                    reject('No item found');
                }
            });
        });
    };
    Cache.prototype.getAllKeys = function () {
        return new Promise(function (resolve, reject) {
            Cache.cache.keys(function (err, keys) {
                if (err) {
                    reject(err);
                }
                if (keys) {
                    resolve(keys);
                }
                else {
                    reject('Nothing in cache');
                }
            });
        });
    };
    Cache.prototype.flushCache = function () {
        Cache.cache.flushAll();
    };
    return Cache;
}());

/* TODO: Find a decent, (almost) perfect way to make this not reset on every page refresh/redirect */
Cache.cache = new NodeCache({
    stdTTL: config.caching.ttl,
    checkperiod: config.caching.deleteInterval
});
//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "../../../../../src/app/classes/searchData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchData; });
var SearchData = (function () {
    function SearchData(depStation, arrStation, travelTime, travelDate, timeType) {
        this.depStation = depStation;
        this.arrStation = arrStation;
        this.travelTime = travelTime;
        this.travelDate = travelDate;
        this.timeType = timeType;
    }
    return SearchData;
}());

//# sourceMappingURL=searchData.js.map

/***/ }),

/***/ "../../../../../src/app/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search_stationList_component__ = __webpack_require__("../../../../../src/app/components/search/stationList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_connectionQuery_component__ = __webpack_require__("../../../../../src/app/components/search/connectionQuery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_travelTime_component__ = __webpack_require__("../../../../../src/app/components/search/travelTime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_travelDate_component__ = __webpack_require__("../../../../../src/app/components/search/travelDate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_connections_connections_component__ = __webpack_require__("../../../../../src/app/components/connections/connections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_connections_connection_component__ = __webpack_require__("../../../../../src/app/components/connections/connection.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Components; });
/* Components */







var Components = (function () {
    function Components() {
    }
    return Components;
}());

Components.components = [
    __WEBPACK_IMPORTED_MODULE_0__components_app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_1__components_search_stationList_component__["a" /* StationList */],
    __WEBPACK_IMPORTED_MODULE_2__components_search_connectionQuery_component__["a" /* ConnectionQuery */],
    __WEBPACK_IMPORTED_MODULE_3__components_search_travelTime_component__["a" /* TravelTime */],
    __WEBPACK_IMPORTED_MODULE_4__components_search_travelDate_component__["a" /* TravelDate */],
    __WEBPACK_IMPORTED_MODULE_5__components_connections_connections_component__["a" /* Connections */],
    __WEBPACK_IMPORTED_MODULE_6__components_connections_connection_component__["a" /* Connection */]
];
//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>  \n    <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/components/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.requestConnections = function (data) {
        console.log('Received data => Redirect');
        console.log(data);
        this.router.navigate(['connections']).then(function (e) { return console.log(e); }).catch(function (e) { return console.log(e); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/connections/connection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
Connection = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'connection',
        template: __webpack_require__("../../../../../src/app/components/connections/templates/connection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/connections/styles/connection.component.scss")]
    })
], Connection);

//# sourceMappingURL=connection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/connections/connections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_iRail_service__ = __webpack_require__("../../../../../src/app/services/iRail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connections; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Connections = (function () {
    function Connections(route, IRailService) {
        this.route = route;
        this.IRailService = IRailService;
        this.loading = true;
    }
    Connections.prototype.logParams = function (search) {
        var _this = this;
        if (search.arrStation && search.depStation && search.timeType && search.travelDate && search.travelTime) {
            console.log('we got a search request!');
            console.log(search);
            console.log('Log available routes!');
            setInterval(function () {
                _this.IRailService.getRoutesReadable(search).then(function (data) {
                    console.log(data);
                    _this.error = JSON.stringify(data);
                    _this.loading = false;
                }).catch(function (e) {
                    _this.error = 'No connections found.';
                    console.log(e);
                });
            }, 100);
        }
        else {
            this.error = 'Please fill in the entire search form.';
        }
    };
    Connections.prototype.ngOnInit = function () {
        this.logParams(this.route.params['_value']);
    };
    return Connections;
}());
Connections = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'connections',
        template: __webpack_require__("../../../../../src/app/components/connections/templates/connections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/connections/styles/connections.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_iRail_service__["a" /* IRailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_iRail_service__["a" /* IRailService */]) === "function" && _b || Object])
], Connections);

var _a, _b;
//# sourceMappingURL=connections.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/connections/styles/connection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/connections/styles/connections.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  top: calc(50% - 32px);\n  left: calc(50% - 32px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/connections/templates/connection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Connection</h2>"

/***/ }),

/***/ "../../../../../src/app/components/connections/templates/connections.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"./assets/img/loading.gif\" alt=\"Loading...\" *ngIf=\"loading\" class=\"loading\" />\n\n<h3>{{ error }}</h3>\n\n<connection></connection>\n<connection></connection>\n<connection></connection>\n<connection></connection>"

/***/ }),

/***/ "../../../../../src/app/components/search/connectionQuery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stationList_component__ = __webpack_require__("../../../../../src/app/components/search/stationList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__travelTime_component__ = __webpack_require__("../../../../../src/app/components/search/travelTime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__travelDate_component__ = __webpack_require__("../../../../../src/app/components/search/travelDate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_searchData__ = __webpack_require__("../../../../../src/app/classes/searchData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionQuery; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectionQuery = (function () {
    function ConnectionQuery(router) {
        this.router = router;
        this.routeUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    ConnectionQuery.prototype.clickCalculate = function () {
        var arriveSt = this.arrStation.selectedStation;
        var departSt = this.depStation.selectedStation;
        if (arriveSt.id === departSt.id) {
            this.error = 'stations can\'t be the same.';
        }
        else {
            this.searchData = new __WEBPACK_IMPORTED_MODULE_5__classes_searchData__["a" /* SearchData */](departSt.id, arriveSt.id, this.travelTime.selectedTime, this.travelDate.selectedDate, this.travelTime.selectedType);
            this.router.navigate(['/connections', this.searchData]);
        }
    };
    return ConnectionQuery;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('departure'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stationList_component__["a" /* StationList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stationList_component__["a" /* StationList */]) === "function" && _a || Object)
], ConnectionQuery.prototype, "depStation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('arrival'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stationList_component__["a" /* StationList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stationList_component__["a" /* StationList */]) === "function" && _b || Object)
], ConnectionQuery.prototype, "arrStation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__travelTime_component__["a" /* TravelTime */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__travelTime_component__["a" /* TravelTime */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__travelTime_component__["a" /* TravelTime */]) === "function" && _c || Object)
], ConnectionQuery.prototype, "travelTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__travelDate_component__["a" /* TravelDate */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__travelDate_component__["a" /* TravelDate */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__travelDate_component__["a" /* TravelDate */]) === "function" && _d || Object)
], ConnectionQuery.prototype, "travelDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], ConnectionQuery.prototype, "routeUpdated", void 0);
ConnectionQuery = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'connectionquery',
        template: __webpack_require__("../../../../../src/app/components/search/templates/connectionQuery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/styles/connectionQuery.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ConnectionQuery);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=connectionQuery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/stationList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_iRail_service__ = __webpack_require__("../../../../../src/app/services/iRail.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationList = (function () {
    function StationList(IRailService) {
        this.IRailService = IRailService;
        this.showSuggestions = false;
    }
    StationList.prototype.transformiRailResponse = function (data) {
        console.log(data);
        return data.station.sort(function (a, b) { return a.standardname > b.standardname ? 1 : (a.standardname < b.standardname) ? -1 : 0; });
    };
    StationList.prototype.ngOnInit = function () {
        var _this = this;
        this.IRailService.getAllStations().then(function (d) {
            _this.stations = _this.transformiRailResponse(d);
            _this.filteredStations = _this.stations;
            _this.selectedStation = _this.filteredStations[0];
        }).catch(function (e) { return console.log(e); });
    };
    StationList.prototype.getSuggestions = function () {
        var _this = this;
        if (!this.currQuery) {
            return;
        }
        this.IRailService.filterStations(this.stations, this.currQuery).then(function (fstations) {
            _this.filteredStations = fstations;
            _this.selectedStation = _this.filteredStations[0];
        }).catch(function (e) { return console.log(e); });
    };
    StationList.prototype.onSelect = function () {
        console.log(this.selectedStation);
    };
    StationList.prototype.clickSuggestion = function (station) {
        if (!station) {
            return;
        }
        this.currQuery = station.standardname;
        this.selectedStation = station;
        console.log(this.selectedStation);
    };
    StationList.prototype.hideSuggestions = function () {
        var _this = this;
        /* TODO: Find a better solution for this */
        window.setTimeout(function () {
            _this.showSuggestions = false;
        }, 100);
    };
    return StationList;
}());
StationList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'stationlist',
        template: __webpack_require__("../../../../../src/app/components/search/templates/stationList.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/styles/stationList.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_iRail_service__["a" /* IRailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_iRail_service__["a" /* IRailService */]) === "function" && _a || Object])
], StationList);

var _a;
//# sourceMappingURL=stationList.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/styles/connectionQuery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".connquery {\n  max-width: 500px;\n  margin: auto; }\n  .connquery h2 {\n    text-align: right; }\n  .connquery button {\n    padding: 10px;\n    background: none;\n    border: 2px solid #21B3BE;\n    float: right;\n    margin-top: 10px;\n    cursor: pointer;\n    transition: all .25s ease-in-out; }\n    .connquery button:hover {\n      background: #21B3BE;\n      color: #FFFFFF; }\n  .connquery .clearfix {\n    clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/styles/stationList.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchModule {\n  width: 250px;\n  display: inline-block; }\n  .searchModule > ul {\n    background: #FFFFFF;\n    position: absolute;\n    z-index: 1000;\n    border: 2px solid #000000;\n    width: 270px;\n    max-height: 150px;\n    overflow-y: auto; }\n  .searchModule > ul > li {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%; }\n    .searchModule > ul > li:hover {\n      color: #FFFFFF;\n      background: #21B3BE; }\n  .searchModule > input[type=text] {\n    padding: 10px;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/styles/travelDate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".departDate {\n  min-width: 162px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/styles/travelTime.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time {\n  min-width: 100px;\n  padding: 10px;\n  margin-left: 15px; }\n\n.timeType {\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/templates/connectionQuery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='connquery'>\n  <h4>Which route do you usually take?</h4>\n    <h2>Departure <stationlist #departure></stationlist></h2>\n    <h2>Destination <stationlist #arrival></stationlist></h2>\n    <h2>\n      Time\n      <traveltime></traveltime>\n      <traveldate></traveldate>\n    </h2>\n    <p>{{ error }}</p>\n    <button (click)='clickCalculate()'>Show alternatives</button>\n    <div class=\"clearfix\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/templates/stationList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchModule\">\n    <input type=\"text\" (keypress)=\"getSuggestions()\" [(ngModel)]='currQuery' (focus)='showSuggestions = true' (focusout)='hideSuggestions()' />\n    <ul *ngIf=\"showSuggestions\">\n        <li *ngFor='let station of filteredStations' (click)='clickSuggestion(station)'>{{station.standardname}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/templates/travelDate.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"date\" (input)=\"changeDate(value)\" class=\"departDate\" [(ngModel)]=\"selectedDate\" />\n"

/***/ }),

/***/ "../../../../../src/app/components/search/templates/travelTime.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"radio\" name=\"timeType\" [(ngModel)]=\"selectedType\" value=\"depart\" class=\"timeType\" (change)='changeType()' id=\"departType\" checked>\n<label for=\"departType\">Depart</label>\n<input type=\"radio\" name=\"timeType\" [(ngModel)]=\"selectedType\" value=\"arrival\" class=\"timeType\" (change)='changeType()' id=\"arrivalType\">\n<label for=\"arrivalType\">Arrival</label>\n<input type=\"time\" class=\"time\" [(ngModel)]=\"selectedTime\" (change)='changeTime()' />\n"

/***/ }),

/***/ "../../../../../src/app/components/search/travelDate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelDate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TravelDate = (function () {
    function TravelDate() {
        this.selectedDate = new Date().toLocaleDateString('en-GB');
    }
    TravelDate.prototype.changeDate = function (val) {
        console.log(new Date(this.selectedDate).toLocaleDateString('en-GB'));
    };
    return TravelDate;
}());
TravelDate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'traveldate',
        template: __webpack_require__("../../../../../src/app/components/search/templates/travelDate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/styles/travelDate.component.scss")]
    })
], TravelDate);

//# sourceMappingURL=travelDate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/travelTime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelTime; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelTime = (function () {
    function TravelTime() {
        this.selectedTime = '00:00';
        this.selectedType = 'depart';
    }
    TravelTime.prototype.changeType = function () {
        console.log(this.selectedType);
    };
    TravelTime.prototype.changeTime = function () {
        console.log(this.selectedTime);
    };
    return TravelTime;
}());
TravelTime = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'traveltime',
        template: __webpack_require__("../../../../../src/app/components/search/templates/travelTime.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/styles/travelTime.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TravelTime);

//# sourceMappingURL=travelTime.component.js.map

/***/ }),

/***/ "../../../../../src/app/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_iRail_service__ = __webpack_require__("../../../../../src/app/services/iRail.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* Services */

var Services = (function () {
    function Services() {
    }
    return Services;
}());

Services.providers = [__WEBPACK_IMPORTED_MODULE_0__services_iRail_service__["a" /* IRailService */]];
//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/iRail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_searchData__ = __webpack_require__("../../../../../src/app/classes/searchData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_cache__ = __webpack_require__("../../../../../src/app/classes/cache.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IRailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Saved Stations */
var stationsData = __webpack_require__("../../../../../src/dummydata/stations.json");
var config = __webpack_require__("../../../../../src/config.json");


var IRailService = (function () {
    function IRailService(http, router) {
        this.http = http;
        this.router = router;
        this.cache = new __WEBPACK_IMPORTED_MODULE_5__classes_cache__["a" /* Cache */](this.router);
        this.uri = config.servers[0].uri;
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Accept': 'application/json' }),
            responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* ResponseContentType */].Json
        });
    }
    IRailService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    IRailService.prototype.fakeReply = function (data) {
        return new Promise(function (resolve, reject) {
            try {
                console.log(data);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    IRailService.prototype.filterStations = function (stations, query) {
        return new Promise(function (resolve, reject) {
            resolve(stations.filter(function (curr) {
                var names = [curr.standardname.toLowerCase(), curr.name.toLowerCase()];
                query = query.toLowerCase();
                return names[0].indexOf(query) > -1 || names[1].indexOf(query) > -1;
            }));
        });
    };
    IRailService.prototype.getStations = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllStations().then(function (data) {
                return (_this.filterStations(data, query));
            }).catch(function (e) { return _this.handleError(e); });
        });
    };
    IRailService.prototype.getAllStations = function () {
        /*return this.http.get(`${this.iRailUrl}/stations?format=json`, this.options)
            .toPromise()
            .then((response) => response.json())
            .catch(this.handleError);*/
        /* Reply fake data for developement */
        return this.fakeReply(stationsData);
    };
    /* DATE FORMAT: DD/MM/YYYY */
    /* TIME FORMAT: HH:MM */
    IRailService.prototype.getRoutesReadable = function (query) {
        var date = query.travelDate;
        var time = query.travelTime;
        date = new Date(date).toLocaleDateString('en-GB');
        time = time.replace(/\:/g, '');
        date = date.replace(/\//g, '');
        date = "" + date.substring(0, 4) + date.substring(6, 8);
        return this.getRoutes(new __WEBPACK_IMPORTED_MODULE_4__classes_searchData__["a" /* SearchData */](query.depStation, query.arrStation, time, date, query.timeType));
    };
    IRailService.prototype.getRoutes = function (query) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.paramsMap = new Map([['to', [query.arrStation]], ['from', [query.depStation]],
            ['time', [query.travelTime]], ['timeSel', [query.timeType]],
            ['date', [query.travelDate]], ['format', ['json']]]);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]();
        options.headers = this.options.headers;
        options.responseType = this.options.responseType;
        options.search = params;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem("stations" + config.servers[0].name).then(function (data) {
                return resolve(data);
            }).catch(function (e) {
                _this.http.get(_this.uri + "/connections", options)
                    .toPromise()
                    .then(function (response) {
                    // Cache all stations
                    _this.cache.addItem("stations" + config.servers[0].name, response.json());
                    return resolve(response.json());
                }).catch(function (er) { return reject(er); });
            });
        });
    };
    return IRailService;
}());
IRailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], IRailService);

var _a, _b;
//# sourceMappingURL=iRail.service.js.map

/***/ }),

/***/ "../../../../../src/config.json":
/***/ (function(module, exports) {

module.exports = {
	"caching": {
		"ttl": 0,
		"deleteInterval": 0
	},
	"servers": [
		{
			"name": "iRail",
			"uri": "http://api.irail.be"
		}
	]
};

/***/ }),

/***/ "../../../../../src/dummydata/stations.json":
/***/ (function(module, exports) {

module.exports = {
	"version": "1.1",
	"timestamp": "1499505424",
	"station": [
		{
			"id": "BE.NMBS.007015400",
			"locationX": "-0.1260606",
			"locationY": "51.5310399",
			"@id": "http://irail.be/stations/NMBS/007015400",
			"standardname": "London Saint Pancras International",
			"name": "London Saint Pancras International"
		},
		{
			"id": "BE.NMBS.007015440",
			"locationX": "0.32107",
			"locationY": "51.44304",
			"@id": "http://irail.be/stations/NMBS/007015440",
			"standardname": "Ebbsfleet International",
			"name": "Ebbsfleet International"
		},
		{
			"id": "BE.NMBS.008008094",
			"locationX": "6.794319",
			"locationY": "51.219962",
			"@id": "http://irail.be/stations/NMBS/008008094",
			"standardname": "Düsseldorf Hbf",
			"name": "Düsseldorf Hbf"
		},
		{
			"id": "BE.NMBS.008010053",
			"locationX": "7.459293",
			"locationY": "51.517898",
			"@id": "http://irail.be/stations/NMBS/008010053",
			"standardname": "Dortmund Hbf",
			"name": "Dortmund Hbf"
		},
		{
			"id": "BE.NMBS.008010184",
			"locationX": "7.014427185058594",
			"locationY": "51.45142619727769",
			"@id": "http://irail.be/stations/NMBS/008010184",
			"standardname": "Essen Hbf",
			"name": "Essen Hbf"
		},
		{
			"id": "BE.NMBS.008010316",
			"locationX": "6.7759037",
			"locationY": "51.42978",
			"@id": "http://irail.be/stations/NMBS/008010316",
			"standardname": "Duisburg Hbf",
			"name": "Duisburg Hbf"
		},
		{
			"id": "BE.NMBS.008011068",
			"locationX": "8.6653708",
			"locationY": "50.1071318",
			"@id": "http://irail.be/stations/NMBS/008011068",
			"standardname": "Frankfurt am Main Hbf",
			"name": "Frankfurt am Main Hbf"
		},
		{
			"id": "BE.NMBS.008011090",
			"locationX": "8.569853",
			"locationY": "50.051696",
			"@id": "http://irail.be/stations/NMBS/008011090",
			"name": "Frankfurt am Main Airport",
			"standardname": "Frankfurt am Main Flughafen"
		},
		{
			"id": "BE.NMBS.008015345",
			"locationX": "6.105275",
			"locationY": "50.770832",
			"@id": "http://irail.be/stations/NMBS/008015345",
			"standardname": "Aachen Hbf",
			"name": "Aachen Hbf"
		},
		{
			"id": "BE.NMBS.008015458",
			"locationX": "6.958823",
			"locationY": "50.942721",
			"@id": "http://irail.be/stations/NMBS/008015458",
			"standardname": "Köln Hbf",
			"name": "Köln Hbf"
		},
		{
			"id": "BE.NMBS.008015588",
			"locationX": "7.203029",
			"locationY": "50.793916",
			"@id": "http://irail.be/stations/NMBS/008015588",
			"standardname": "Siegburg",
			"name": "Siegburg"
		},
		{
			"id": "BE.NMBS.008032572",
			"locationX": "8.096112",
			"locationY": "50.3825",
			"@id": "http://irail.be/stations/NMBS/008032572",
			"standardname": "Limburg Süd",
			"name": "Limburg Süd"
		},
		{
			"id": "BE.NMBS.008039904",
			"locationX": "6.786837",
			"locationY": "51.292008",
			"@id": "http://irail.be/stations/NMBS/008039904",
			"standardname": "Düsseldorf Flughafen Hbf",
			"name": "Düsseldorf Flughafen Hbf"
		},
		{
			"id": "BE.NMBS.008200100",
			"locationX": "6.133331",
			"locationY": "49.599996",
			"@id": "http://irail.be/stations/NMBS/008200100",
			"standardname": "Lëtzebuerg",
			"name": "Lëtzebuerg"
		},
		{
			"id": "BE.NMBS.008200101",
			"locationX": "6.13668",
			"locationY": "49.633838",
			"@id": "http://irail.be/stations/NMBS/008200101",
			"standardname": "Dommeldange",
			"name": "Dommeldange"
		},
		{
			"id": "BE.NMBS.008200110",
			"locationX": "6.106111",
			"locationY": "49.748893",
			"@id": "http://irail.be/stations/NMBS/008200110",
			"standardname": "Mersch",
			"name": "Mersch"
		},
		{
			"id": "BE.NMBS.008200120",
			"locationX": "6.104169",
			"locationY": "49.847496",
			"@id": "http://irail.be/stations/NMBS/008200120",
			"standardname": "Ettelbréck",
			"name": "Ettelbréck"
		},
		{
			"id": "BE.NMBS.008200130",
			"locationX": "6.020003",
			"locationY": "49.952777",
			"@id": "http://irail.be/stations/NMBS/008200130",
			"standardname": "Kautebaach",
			"name": "Kautebaach"
		},
		{
			"id": "BE.NMBS.008200132",
			"locationX": "5.999166",
			"locationY": "49.988887",
			"@id": "http://irail.be/stations/NMBS/008200132",
			"standardname": "Wilwerwiltz",
			"name": "Wilwerwiltz"
		},
		{
			"id": "BE.NMBS.008200133",
			"locationX": "6.006106",
			"locationY": "50.017778",
			"@id": "http://irail.be/stations/NMBS/008200133",
			"standardname": "Drauffelt",
			"name": "Drauffelt"
		},
		{
			"id": "BE.NMBS.008200134",
			"locationX": "6.031393",
			"locationY": "50.054724",
			"@id": "http://irail.be/stations/NMBS/008200134",
			"standardname": "Clervaux",
			"name": "Clervaux"
		},
		{
			"id": "BE.NMBS.008200136",
			"locationX": "6.000281",
			"locationY": "50.121109",
			"@id": "http://irail.be/stations/NMBS/008200136",
			"standardname": "Troisvierges",
			"name": "Troisvierges"
		},
		{
			"id": "BE.NMBS.008200510",
			"locationX": "6.060601",
			"locationY": "49.613002",
			"@id": "http://irail.be/stations/NMBS/008200510",
			"standardname": "Bertrange Strassen",
			"name": "Bertrange Strassen"
		},
		{
			"id": "BE.NMBS.008200516",
			"locationX": "6.02014",
			"locationY": "49.625663",
			"@id": "http://irail.be/stations/NMBS/008200516",
			"standardname": "Mamer",
			"name": "Mamer"
		},
		{
			"id": "BE.NMBS.008200518",
			"locationX": "5.982265",
			"locationY": "49.638463",
			"@id": "http://irail.be/stations/NMBS/008200518",
			"standardname": "Capellen",
			"name": "Capellen"
		},
		{
			"id": "BE.NMBS.008200520",
			"locationX": "5.916385",
			"locationY": "49.646389",
			"@id": "http://irail.be/stations/NMBS/008200520",
			"standardname": "Klengbetten",
			"name": "Klengbetten"
		},
		{
			"id": "BE.NMBS.008200940",
			"locationX": "5.845028",
			"locationY": "49.551283",
			"@id": "http://irail.be/stations/NMBS/008200940",
			"standardname": "Rodange",
			"name": "Rodange"
		},
		{
			"id": "BE.NMBS.008210014",
			"locationX": "6.02968",
			"locationY": "49.618415",
			"@id": "http://irail.be/stations/NMBS/008210014",
			"standardname": "Mamer-Lycée",
			"name": "Mamer-Lycée"
		},
		{
			"id": "BE.NMBS.008400058",
			"locationX": "4.900272",
			"locationY": "52.379128",
			"@id": "http://irail.be/stations/NMBS/008400058",
			"standardname": "Amsterdam CS",
			"name": "Amsterdam CS"
		},
		{
			"id": "BE.NMBS.008400180",
			"locationX": "4.666668",
			"locationY": "51.799998",
			"@id": "http://irail.be/stations/NMBS/008400180",
			"standardname": "Dordrecht",
			"name": "Dordrecht"
		},
		{
			"id": "BE.NMBS.008400219",
			"locationX": "5.709786",
			"locationY": "50.772135",
			"@id": "http://irail.be/stations/NMBS/008400219",
			"standardname": "Eijsden",
			"name": "Eijsden"
		},
		{
			"id": "BE.NMBS.008400280",
			"locationX": "4.299999",
			"locationY": "52.083329",
			"@id": "http://irail.be/stations/NMBS/008400280",
			"standardname": "Den Haag HS",
			"name": "Den Haag HS"
		},
		{
			"id": "BE.NMBS.008400424",
			"locationX": "5.683331",
			"locationY": "50.85",
			"@id": "http://irail.be/stations/NMBS/008400424",
			"standardname": "Maastricht",
			"name": "Maastricht"
		},
		{
			"id": "BE.NMBS.008400426",
			"locationX": "5.716707",
			"locationY": "50.838502",
			"@id": "http://irail.be/stations/NMBS/008400426",
			"standardname": "Maastricht Randwyck",
			"name": "Maastricht Randwyck"
		},
		{
			"id": "BE.NMBS.008400526",
			"locationX": "4.466667",
			"locationY": "51.533333",
			"@id": "http://irail.be/stations/NMBS/008400526",
			"standardname": "Roosendaal",
			"name": "Roosendaal"
		},
		{
			"id": "BE.NMBS.008400530",
			"locationX": "4.469424",
			"locationY": "51.925093",
			"@id": "http://irail.be/stations/NMBS/008400530",
			"standardname": "Rotterdam CS",
			"name": "Rotterdam CS"
		},
		{
			"id": "BE.NMBS.008400561",
			"locationX": "4.762268",
			"locationY": "52.308294",
			"@id": "http://irail.be/stations/NMBS/008400561",
			"standardname": "Schiphol",
			"name": "Schiphol"
		},
		{
			"id": "BE.NMBS.008500010",
			"locationX": "7.590716",
			"locationY": "47.547408",
			"@id": "http://irail.be/stations/NMBS/008500010",
			"standardname": "Basel",
			"name": "Basel"
		},
		{
			"id": "BE.NMBS.008711184",
			"locationX": "2.782184",
			"locationY": "48.868256",
			"@id": "http://irail.be/stations/NMBS/008711184",
			"standardname": "Marne-la-Vallée - Chessy",
			"name": "Marne-la-Vallée - Chessy"
		},
		{
			"id": "BE.NMBS.008718201",
			"locationX": "7.366668",
			"locationY": "48.083335",
			"@id": "http://irail.be/stations/NMBS/008718201",
			"standardname": "Colmar",
			"name": "Colmar"
		},
		{
			"id": "BE.NMBS.008718206",
			"locationX": "7.333336",
			"locationY": "47.749998",
			"@id": "http://irail.be/stations/NMBS/008718206",
			"standardname": "Mulhouse",
			"name": "Mulhouse"
		},
		{
			"id": "BE.NMBS.008718213",
			"locationX": "7.555316",
			"locationY": "47.5907",
			"@id": "http://irail.be/stations/NMBS/008718213",
			"standardname": "Saint-Louis-Haut-Rhin",
			"name": "Saint-Louis-Haut-Rhin"
		},
		{
			"id": "BE.NMBS.008719100",
			"locationX": "6.166663",
			"locationY": "49.366663",
			"@id": "http://irail.be/stations/NMBS/008719100",
			"standardname": "Thionville",
			"name": "Thionville"
		},
		{
			"id": "BE.NMBS.008719203",
			"locationX": "6.166663",
			"locationY": "49.13333",
			"@id": "http://irail.be/stations/NMBS/008719203",
			"standardname": "Metz",
			"name": "Metz"
		},
		{
			"id": "BE.NMBS.008721202",
			"locationX": "7.733905",
			"locationY": "48.585437",
			"@id": "http://irail.be/stations/NMBS/008721202",
			"standardname": "Strasbourg",
			"name": "Strasbourg"
		},
		{
			"id": "BE.NMBS.008721222",
			"locationX": "7.362255",
			"locationY": "48.744798",
			"@id": "http://irail.be/stations/NMBS/008721222",
			"standardname": "Saverne",
			"name": "Saverne"
		},
		{
			"id": "BE.NMBS.008721405",
			"locationX": "7.449999",
			"locationY": "48.26667",
			"@id": "http://irail.be/stations/NMBS/008721405",
			"standardname": "Selestat",
			"name": "Selestat"
		},
		{
			"id": "BE.NMBS.008722326",
			"locationX": "3.071516",
			"locationY": "50.636108",
			"@id": "http://irail.be/stations/NMBS/008722326",
			"standardname": "Lille Europe",
			"name": "Lille Europe"
		},
		{
			"id": "BE.NMBS.008727100",
			"locationX": "2.3553093",
			"locationY": "48.8809984",
			"@id": "http://irail.be/stations/NMBS/008727100",
			"standardname": "Paris Nord",
			"name": "Paris Nord"
		},
		{
			"id": "BE.NMBS.008727149",
			"locationX": "2.571123",
			"locationY": "49.003955",
			"@id": "http://irail.be/stations/NMBS/008727149",
			"standardname": "Aéroport Charles-de-Gaulle TGV",
			"name": "Aéroport Charles-de-Gaulle TGV"
		},
		{
			"id": "BE.NMBS.008728105",
			"locationX": "3.13381",
			"locationY": "50.675708",
			"@id": "http://irail.be/stations/NMBS/008728105",
			"standardname": "Croix l'Allumette",
			"name": "Croix l'Allumette"
		},
		{
			"id": "BE.NMBS.008728600",
			"locationX": "3.066669",
			"locationY": "50.633333",
			"@id": "http://irail.be/stations/NMBS/008728600",
			"standardname": "Lille Flandres",
			"name": "Lille Flandres"
		},
		{
			"id": "BE.NMBS.008728606",
			"locationX": "3.108892",
			"locationY": "50.626941",
			"@id": "http://irail.be/stations/NMBS/008728606",
			"standardname": "Hellemmes",
			"name": "Hellemmes"
		},
		{
			"id": "BE.NMBS.008728654",
			"locationX": "3.168033",
			"locationY": "50.716663",
			"@id": "http://irail.be/stations/NMBS/008728654",
			"standardname": "Tourcoing",
			"name": "Tourcoing"
		},
		{
			"id": "BE.NMBS.008728671",
			"locationX": "3.149272",
			"locationY": "50.6764687",
			"@id": "http://irail.be/stations/NMBS/008728671",
			"standardname": "Croix Wasquehal",
			"name": "Croix Wasquehal"
		},
		{
			"id": "BE.NMBS.008728673",
			"locationX": "3.166666",
			"locationY": "50.699997",
			"@id": "http://irail.be/stations/NMBS/008728673",
			"standardname": "Roubaix",
			"name": "Roubaix"
		},
		{
			"id": "BE.NMBS.008728683",
			"locationX": "3.1275",
			"locationY": "50.624164",
			"@id": "http://irail.be/stations/NMBS/008728683",
			"standardname": "Pont de Bois",
			"name": "Pont de Bois"
		},
		{
			"id": "BE.NMBS.008728685",
			"locationX": "3.1473086",
			"locationY": "50.6228168",
			"@id": "http://irail.be/stations/NMBS/008728685",
			"standardname": "Annappes",
			"name": "Annappes"
		},
		{
			"id": "BE.NMBS.008728686",
			"locationX": "3.166666",
			"locationY": "50.616666",
			"@id": "http://irail.be/stations/NMBS/008728686",
			"standardname": "Ascq",
			"name": "Ascq"
		},
		{
			"id": "BE.NMBS.008728687",
			"locationX": "3.2378999",
			"locationY": "50.610039",
			"@id": "http://irail.be/stations/NMBS/008728687",
			"standardname": "Baisieux",
			"name": "Baisieux"
		},
		{
			"id": "BE.NMBS.008728710",
			"locationX": "3.116667",
			"locationY": "50.616666",
			"@id": "http://irail.be/stations/NMBS/008728710",
			"standardname": "Lezennes",
			"name": "Lezennes"
		},
		{
			"id": "BE.NMBS.008731388",
			"locationX": "2.802566",
			"locationY": "49.623044",
			"@id": "http://irail.be/stations/NMBS/008731388",
			"standardname": "Haute-Picardie TGV",
			"name": "Haute-Picardie TGV"
		},
		{
			"id": "BE.NMBS.008731896",
			"locationX": "4.785841",
			"locationY": "43.921433",
			"@id": "http://irail.be/stations/NMBS/008731896",
			"standardname": "Avignon TGV",
			"name": "Avignon TGV"
		},
		{
			"id": "BE.NMBS.008731901",
			"locationX": "5.317243",
			"locationY": "43.455128",
			"@id": "http://irail.be/stations/NMBS/008731901",
			"standardname": "Aix-en-Provence TGV",
			"name": "Aix-en-Provence TGV"
		},
		{
			"id": "BE.NMBS.008772202",
			"locationX": "4.825301",
			"locationY": "45.748360",
			"@id": "http://irail.be/stations/NMBS/008772202",
			"standardname": "Lyon-Perrache TGV",
			"name": "Lyon-Perrache TGV"
		},
		{
			"id": "BE.NMBS.008772319",
			"locationX": "4.8594013",
			"locationY": "45.7612738",
			"@id": "http://irail.be/stations/NMBS/008772319",
			"standardname": "Lyon Part Dieu TGV",
			"name": "Lyon Part Dieu TGV"
		},
		{
			"id": "BE.NMBS.008774100",
			"locationX": "5.919756",
			"locationY": "45.571498",
			"@id": "http://irail.be/stations/NMBS/008774100",
			"standardname": "Chambéry-Challes-les-Eaux",
			"name": "Chambéry-Challes-les-Eaux"
		},
		{
			"id": "BE.NMBS.008774164",
			"locationX": "6.383617",
			"locationY": "45.673624",
			"@id": "http://irail.be/stations/NMBS/008774164",
			"standardname": "Albertville",
			"name": "Albertville"
		},
		{
			"id": "BE.NMBS.008774172",
			"locationX": "6.531454",
			"locationY": "45.486693",
			"@id": "http://irail.be/stations/NMBS/008774172",
			"standardname": "Moûtiers-Salins-Brides-les-Bai",
			"name": "Moûtiers-Salins-Brides-les-Bai"
		},
		{
			"id": "BE.NMBS.008774176",
			"locationX": "6.648394",
			"locationY": "45.554202",
			"@id": "http://irail.be/stations/NMBS/008774176",
			"standardname": "Aime-la-Plagne",
			"name": "Aime-la-Plagne"
		},
		{
			"id": "BE.NMBS.008774177",
			"locationX": "6.733522",
			"locationY": "45.574194",
			"@id": "http://irail.be/stations/NMBS/008774177",
			"standardname": "Landry",
			"name": "Landry"
		},
		{
			"id": "BE.NMBS.008774179",
			"locationX": "6.771664",
			"locationY": "45.618826",
			"@id": "http://irail.be/stations/NMBS/008774179",
			"standardname": "Bourg-Saint-Maurice",
			"name": "Bourg-Saint-Maurice"
		},
		{
			"id": "BE.NMBS.008775100",
			"locationX": "5.380752",
			"locationY": "43.303178",
			"@id": "http://irail.be/stations/NMBS/008775100",
			"standardname": "Marseille-Saint-Charles",
			"name": "Marseille-Saint-Charles"
		},
		{
			"id": "BE.NMBS.008775500",
			"locationX": "5.9326648",
			"locationY": "43.1274781",
			"@id": "http://irail.be/stations/NMBS/008775500",
			"standardname": "Toulon",
			"name": "Toulon"
		},
		{
			"id": "BE.NMBS.008775544",
			"locationX": "6.4826446",
			"locationY": "43.4555673",
			"@id": "http://irail.be/stations/NMBS/008775544",
			"standardname": "Les Arcs - Draguignan",
			"name": "Les Arcs - Draguignan"
		},
		{
			"id": "BE.NMBS.008775605",
			"locationX": "7.261928",
			"locationY": "43.704605",
			"@id": "http://irail.be/stations/NMBS/008775605",
			"standardname": "Nice Ville",
			"name": "Nice Ville"
		},
		{
			"id": "BE.NMBS.008775752",
			"locationX": "6.768825",
			"locationY": "43.423456",
			"@id": "http://irail.be/stations/NMBS/008775752",
			"standardname": "Saint-Raphaël-Valescure",
			"name": "Saint-Raphaël-Valescure"
		},
		{
			"id": "BE.NMBS.008775762",
			"locationX": "7.019895",
			"locationY": "43.553742",
			"@id": "http://irail.be/stations/NMBS/008775762",
			"standardname": "Cannes",
			"name": "Cannes"
		},
		{
			"id": "BE.NMBS.008775767",
			"locationX": "7.1201361",
			"locationY": "43.586618",
			"@id": "http://irail.be/stations/NMBS/008775767",
			"standardname": "Antibes",
			"name": "Antibes"
		},
		{
			"id": "BE.NMBS.008776290",
			"locationX": "5.075822",
			"locationY": "45.720907",
			"@id": "http://irail.be/stations/NMBS/008776290",
			"standardname": "Lyon-Saint Exupéry TGV",
			"name": "Lyon-Saint Exupéry TGV"
		},
		{
			"id": "BE.NMBS.008776302",
			"locationX": "4.978529",
			"locationY": "44.992586",
			"@id": "http://irail.be/stations/NMBS/008776302",
			"standardname": "Valence TGV",
			"name": "Valence TGV"
		},
		{
			"id": "BE.NMBS.008777300",
			"locationX": "3.880534",
			"locationY": "43.604947",
			"@id": "http://irail.be/stations/NMBS/008777300",
			"standardname": "Montpellier",
			"name": "Montpellier"
		},
		{
			"id": "BE.NMBS.008777320",
			"locationX": "3.696535",
			"locationY": "43.412810",
			"@id": "http://irail.be/stations/NMBS/008777320",
			"standardname": "Sète",
			"name": "Sète"
		},
		{
			"id": "BE.NMBS.008777500",
			"locationX": "4.365997",
			"locationY": "43.832602",
			"@id": "http://irail.be/stations/NMBS/008777500",
			"standardname": "Nîmes",
			"name": "Nîmes"
		},
		{
			"id": "BE.NMBS.008778100",
			"locationX": "3.218794",
			"locationY": "43.336177",
			"@id": "http://irail.be/stations/NMBS/008778100",
			"standardname": "Béziers",
			"name": "Béziers"
		},
		{
			"id": "BE.NMBS.008778110",
			"locationX": "3.006010",
			"locationY": "43.190399",
			"@id": "http://irail.be/stations/NMBS/008778110",
			"standardname": "Narbonne",
			"name": "Narbonne"
		},
		{
			"id": "BE.NMBS.008778127",
			"locationX": "3.465800",
			"locationY": "43.317498",
			"@id": "http://irail.be/stations/NMBS/008778127",
			"standardname": "Agde",
			"name": "Agde"
		},
		{
			"id": "BE.NMBS.008778400",
			"locationX": "2.879397",
			"locationY": "42.695938",
			"@id": "http://irail.be/stations/NMBS/008778400",
			"standardname": "Perpignan",
			"name": "Perpignan"
		},
		{
			"id": "BE.NMBS.008811007",
			"locationX": "4.378636",
			"locationY": "50.878513",
			"@id": "http://irail.be/stations/NMBS/008811007",
			"standardname": "Schaarbeek/Schaerbeek",
			"name": "Schaarbeek/Schaerbeek"
		},
		{
			"id": "BE.NMBS.008811106",
			"locationX": "4.400965",
			"locationY": "50.86778",
			"@id": "http://irail.be/stations/NMBS/008811106",
			"standardname": "Evere",
			"name": "Evere"
		},
		{
			"id": "BE.NMBS.008811130",
			"locationX": "4.415357",
			"locationY": "50.889696",
			"@id": "http://irail.be/stations/NMBS/008811130",
			"standardname": "Haren-Sud/Haren-Zuid",
			"name": "Haren-Sud/Haren-Zuid"
		},
		{
			"id": "BE.NMBS.008811148",
			"locationX": "4.417074",
			"locationY": "50.907495",
			"@id": "http://irail.be/stations/NMBS/008811148",
			"standardname": "Buda",
			"name": "Buda"
		},
		{
			"id": "BE.NMBS.008811155",
			"locationX": "4.419978",
			"locationY": "50.888878",
			"@id": "http://irail.be/stations/NMBS/008811155",
			"standardname": "Haren",
			"name": "Haren"
		},
		{
			"id": "BE.NMBS.008811163",
			"locationX": "4.410026",
			"locationY": "50.877785",
			"@id": "http://irail.be/stations/NMBS/008811163",
			"standardname": "Bordet",
			"name": "Bordet"
		},
		{
			"id": "BE.NMBS.008811171",
			"locationX": "4.394421",
			"locationY": "50.854072",
			"@id": "http://irail.be/stations/NMBS/008811171",
			"standardname": "Meiser",
			"name": "Meiser"
		},
		{
			"id": "BE.NMBS.008811189",
			"locationX": "4.432823",
			"locationY": "50.924583",
			"@id": "http://irail.be/stations/NMBS/008811189",
			"standardname": "Vilvoorde",
			"name": "Vilvoorde"
		},
		{
			"id": "BE.NMBS.008811197",
			"locationX": "4.398934",
			"locationY": "50.839284",
			"@id": "http://irail.be/stations/NMBS/008811197",
			"standardname": "Merode",
			"name": "Merode"
		},
		{
			"id": "BE.NMBS.008811205",
			"locationX": "4.403869",
			"locationY": "50.818357",
			"@id": "http://irail.be/stations/NMBS/008811205",
			"standardname": "Delta",
			"name": "Delta"
		},
		{
			"id": "BE.NMBS.008811213",
			"locationX": "4.442774",
			"locationY": "50.890478",
			"@id": "http://irail.be/stations/NMBS/008811213",
			"standardname": "Diegem",
			"name": "Diegem"
		},
		{
			"id": "BE.NMBS.008811221",
			"locationX": "4.469886",
			"locationY": "50.885723",
			"@id": "http://irail.be/stations/NMBS/008811221",
			"standardname": "Zaventem",
			"name": "Zaventem"
		},
		{
			"id": "BE.NMBS.008811247",
			"locationX": "4.506112",
			"locationY": "50.883314",
			"@id": "http://irail.be/stations/NMBS/008811247",
			"standardname": "Nossegem",
			"name": "Nossegem"
		},
		{
			"id": "BE.NMBS.008811254",
			"locationX": "4.543301",
			"locationY": "50.893067",
			"@id": "http://irail.be/stations/NMBS/008811254",
			"standardname": "Kortenberg",
			"name": "Kortenberg"
		},
		{
			"id": "BE.NMBS.008811262",
			"locationX": "4.585001",
			"locationY": "50.89651",
			"@id": "http://irail.be/stations/NMBS/008811262",
			"standardname": "Erps-Kwerps",
			"name": "Erps-Kwerps"
		},
		{
			"id": "BE.NMBS.008811270",
			"locationX": "4.633516",
			"locationY": "50.900519",
			"@id": "http://irail.be/stations/NMBS/008811270",
			"standardname": "Veltem",
			"name": "Veltem"
		},
		{
			"id": "BE.NMBS.008811288",
			"locationX": "4.672188",
			"locationY": "50.90353",
			"@id": "http://irail.be/stations/NMBS/008811288",
			"standardname": "Herent",
			"name": "Herent"
		},
		{
			"id": "BE.NMBS.008811304",
			"locationX": "4.373674",
			"locationY": "50.838943",
			"@id": "http://irail.be/stations/NMBS/008811304",
			"name": "Brussels-Luxemburg/Brussels-Luxembourg",
			"standardname": "Brussel-Luxemburg/Bruxelles-Luxembourg"
		},
		{
			"id": "BE.NMBS.008811403",
			"locationX": "4.37866",
			"locationY": "50.829929",
			"@id": "http://irail.be/stations/NMBS/008811403",
			"name": "Mouterij",
			"standardname": "Mouterij/Germoir"
		},
		{
			"id": "BE.NMBS.008811411",
			"locationX": "4.389513",
			"locationY": "50.822187",
			"@id": "http://irail.be/stations/NMBS/008811411",
			"standardname": "Etterbeek",
			"name": "Etterbeek"
		},
		{
			"id": "BE.NMBS.008811429",
			"locationX": "4.399887",
			"locationY": "50.80917",
			"@id": "http://irail.be/stations/NMBS/008811429",
			"standardname": "Watermaal/Watermael",
			"name": "Watermaal/Watermael"
		},
		{
			"id": "BE.NMBS.008811437",
			"locationX": "4.408112",
			"locationY": "50.794698",
			"@id": "http://irail.be/stations/NMBS/008811437",
			"standardname": "Bosvoorde/Boitsfort",
			"name": "Bosvoorde/Boitsfort"
		},
		{
			"id": "BE.NMBS.008811445",
			"locationX": "4.449489",
			"locationY": "50.766103",
			"@id": "http://irail.be/stations/NMBS/008811445",
			"standardname": "Groenendaal",
			"name": "Groenendaal"
		},
		{
			"id": "BE.NMBS.008811460",
			"locationX": "4.467414",
			"locationY": "50.760161",
			"@id": "http://irail.be/stations/NMBS/008811460",
			"standardname": "Hoeilaart",
			"name": "Hoeilaart"
		},
		{
			"id": "BE.NMBS.008811510",
			"locationX": "4.49706",
			"locationY": "50.737958",
			"@id": "http://irail.be/stations/NMBS/008811510",
			"standardname": "La Hulpe",
			"name": "La Hulpe"
		},
		{
			"id": "BE.NMBS.008811528",
			"locationX": "4.514832",
			"locationY": "50.725697",
			"@id": "http://irail.be/stations/NMBS/008811528",
			"standardname": "Genval",
			"name": "Genval"
		},
		{
			"id": "BE.NMBS.008811536",
			"locationX": "4.532855",
			"locationY": "50.711413",
			"@id": "http://irail.be/stations/NMBS/008811536",
			"standardname": "Rixensart",
			"name": "Rixensart"
		},
		{
			"id": "BE.NMBS.008811544",
			"locationX": "4.549153",
			"locationY": "50.693758",
			"@id": "http://irail.be/stations/NMBS/008811544",
			"standardname": "Profondsart",
			"name": "Profondsart"
		},
		{
			"id": "BE.NMBS.008811601",
			"locationX": "4.56936",
			"locationY": "50.673667",
			"@id": "http://irail.be/stations/NMBS/008811601",
			"standardname": "Ottignies",
			"name": "Ottignies"
		},
		{
			"id": "BE.NMBS.008811635",
			"locationX": "4.575302",
			"locationY": "50.69214",
			"@id": "http://irail.be/stations/NMBS/008811635",
			"standardname": "Limal",
			"name": "Limal"
		},
		{
			"id": "BE.NMBS.008811676",
			"locationX": "4.615745",
			"locationY": "50.669793",
			"@id": "http://irail.be/stations/NMBS/008811676",
			"standardname": "Louvain-la-Neuve-Université",
			"name": "Louvain-la-Neuve-Université"
		},
		{
			"id": "BE.NMBS.008811718",
			"locationX": "4.594746",
			"locationY": "50.707772",
			"@id": "http://irail.be/stations/NMBS/008811718",
			"standardname": "Bierges-Walibi",
			"name": "Bierges-Walibi"
		},
		{
			"id": "BE.NMBS.008811726",
			"locationX": "4.604778",
			"locationY": "50.716267",
			"@id": "http://irail.be/stations/NMBS/008811726",
			"standardname": "Wavre",
			"name": "Wavre"
		},
		{
			"id": "BE.NMBS.008811734",
			"locationX": "4.621651",
			"locationY": "50.72442",
			"@id": "http://irail.be/stations/NMBS/008811734",
			"standardname": "Basse-Wavre",
			"name": "Basse-Wavre"
		},
		{
			"id": "BE.NMBS.008811742",
			"locationX": "4.649598",
			"locationY": "50.736646",
			"@id": "http://irail.be/stations/NMBS/008811742",
			"standardname": "Gastuche",
			"name": "Gastuche"
		},
		{
			"id": "BE.NMBS.008811759",
			"locationX": "4.662444",
			"locationY": "50.754345",
			"@id": "http://irail.be/stations/NMBS/008811759",
			"standardname": "Archennes",
			"name": "Archennes"
		},
		{
			"id": "BE.NMBS.008811767",
			"locationX": "4.653868",
			"locationY": "50.761501",
			"@id": "http://irail.be/stations/NMBS/008811767",
			"standardname": "Florival",
			"name": "Florival"
		},
		{
			"id": "BE.NMBS.008811775",
			"locationX": "4.651486",
			"locationY": "50.778517",
			"@id": "http://irail.be/stations/NMBS/008811775",
			"standardname": "Pécrot",
			"name": "Pécrot"
		},
		{
			"id": "BE.NMBS.008811817",
			"locationX": "4.569046",
			"locationY": "50.659941",
			"@id": "http://irail.be/stations/NMBS/008811817",
			"standardname": "Ceroux-Mousty",
			"name": "Ceroux-Mousty"
		},
		{
			"id": "BE.NMBS.008811825",
			"locationX": "4.565819",
			"locationY": "50.645567",
			"@id": "http://irail.be/stations/NMBS/008811825",
			"standardname": "Court-Saint-Étienne",
			"name": "Court-Saint-Étienne"
		},
		{
			"id": "BE.NMBS.008811916",
			"locationX": "4.380722",
			"locationY": "50.843276",
			"@id": "http://irail.be/stations/NMBS/008811916",
			"name": "Brussels-Schuman",
			"standardname": "Brussel-Schuman/Bruxelles-Schuman"
		},
		{
			"id": "BE.NMBS.008812005",
			"locationX": "4.360846",
			"locationY": "50.859663",
			"@id": "http://irail.be/stations/NMBS/008812005",
			"name": "Brussels-North",
			"standardname": "Brussel-Noord/Bruxelles-Nord"
		},
		{
			"id": "BE.NMBS.008812013",
			"locationX": "4.32898",
			"locationY": "50.863645",
			"@id": "http://irail.be/stations/NMBS/008812013",
			"standardname": "Simonis",
			"name": "Simonis"
		},
		{
			"id": "BE.NMBS.008812021",
			"locationX": "4.348513",
			"locationY": "50.87943",
			"@id": "http://irail.be/stations/NMBS/008812021",
			"standardname": "Bockstael",
			"name": "Bockstael"
		},
		{
			"id": "BE.NMBS.008812047",
			"locationX": "4.32622",
			"locationY": "50.880833",
			"@id": "http://irail.be/stations/NMBS/008812047",
			"standardname": "Jette",
			"name": "Jette"
		},
		{
			"id": "BE.NMBS.008812062",
			"locationX": "4.274541",
			"locationY": "50.890028",
			"@id": "http://irail.be/stations/NMBS/008812062",
			"standardname": "Zellik",
			"name": "Zellik"
		},
		{
			"id": "BE.NMBS.008812070",
			"locationX": "4.207985",
			"locationY": "50.906488",
			"@id": "http://irail.be/stations/NMBS/008812070",
			"standardname": "Asse",
			"name": "Asse"
		},
		{
			"id": "BE.NMBS.008812112",
			"locationX": "4.216965",
			"locationY": "50.933473",
			"@id": "http://irail.be/stations/NMBS/008812112",
			"standardname": "Mollem",
			"name": "Mollem"
		},
		{
			"id": "BE.NMBS.008812120",
			"locationX": "4.222718",
			"locationY": "50.954958",
			"@id": "http://irail.be/stations/NMBS/008812120",
			"standardname": "Merchtem",
			"name": "Merchtem"
		},
		{
			"id": "BE.NMBS.008812146",
			"locationX": "4.187319",
			"locationY": "50.974779",
			"@id": "http://irail.be/stations/NMBS/008812146",
			"standardname": "Opwijk",
			"name": "Opwijk"
		},
		{
			"id": "BE.NMBS.008812153",
			"locationX": "4.156171",
			"locationY": "50.989593",
			"@id": "http://irail.be/stations/NMBS/008812153",
			"standardname": "Heizijde",
			"name": "Heizijde"
		},
		{
			"id": "BE.NMBS.008812161",
			"locationX": "4.134372",
			"locationY": "51.005009",
			"@id": "http://irail.be/stations/NMBS/008812161",
			"standardname": "Lebbeke",
			"name": "Lebbeke"
		},
		{
			"id": "BE.NMBS.008812211",
			"locationX": "4.289895",
			"locationY": "50.872625",
			"@id": "http://irail.be/stations/NMBS/008812211",
			"standardname": "Sint-Agatha-Berchem/Berchem-Sainte-Agathe",
			"name": "Sint-Agatha-Berchem/Berchem-Sainte-Agathe"
		},
		{
			"id": "BE.NMBS.008812229",
			"locationX": "4.273543",
			"locationY": "50.868337",
			"@id": "http://irail.be/stations/NMBS/008812229",
			"standardname": "Groot-Bijgaarden",
			"name": "Groot-Bijgaarden"
		},
		{
			"id": "BE.NMBS.008812237",
			"locationX": "4.243393",
			"locationY": "50.866728",
			"@id": "http://irail.be/stations/NMBS/008812237",
			"standardname": "Dilbeek",
			"name": "Dilbeek"
		},
		{
			"id": "BE.NMBS.008812245",
			"locationX": "4.205081",
			"locationY": "50.86716",
			"@id": "http://irail.be/stations/NMBS/008812245",
			"standardname": "Sint-Martens-Bodegem",
			"name": "Sint-Martens-Bodegem"
		},
		{
			"id": "BE.NMBS.008812252",
			"locationX": "4.16534",
			"locationY": "50.874522",
			"@id": "http://irail.be/stations/NMBS/008812252",
			"standardname": "Ternat",
			"name": "Ternat"
		},
		{
			"id": "BE.NMBS.008812260",
			"locationX": "4.115171",
			"locationY": "50.882451",
			"@id": "http://irail.be/stations/NMBS/008812260",
			"standardname": "Essene-Lombeek",
			"name": "Essene-Lombeek"
		},
		{
			"id": "BE.NMBS.008813003",
			"locationX": "4.356801",
			"locationY": "50.845658",
			"@id": "http://irail.be/stations/NMBS/008813003",
			"name": "Brussels-Central",
			"standardname": "Brussel-Centraal/Bruxelles-Central"
		},
		{
			"id": "BE.NMBS.008813037",
			"locationX": "4.347866",
			"locationY": "50.841127",
			"@id": "http://irail.be/stations/NMBS/008813037",
			"name": "Brussels-Chapelle/Brussels-Kapellekerk",
			"standardname": "Brussel-Kapellekerk/Bruxelles-Chapelle"
		},
		{
			"id": "BE.NMBS.008813045",
			"locationX": "4.362051",
			"locationY": "50.852067",
			"@id": "http://irail.be/stations/NMBS/008813045",
			"name": "Brussels-Congres",
			"standardname": "Brussel-Congres/Bruxelles-Congrès"
		},
		{
			"id": "BE.NMBS.008814001",
			"locationX": "4.336531",
			"locationY": "50.835707",
			"@id": "http://irail.be/stations/NMBS/008814001",
			"name": "Brussels-South/Brussels-Midi",
			"standardname": "Brussel-Zuid/Bruxelles-Midi"
		},
		{
			"id": "BE.NMBS.008814118",
			"locationX": "4.320943",
			"locationY": "50.810195",
			"@id": "http://irail.be/stations/NMBS/008814118",
			"standardname": "Vorst-Oost/Forest-Est",
			"name": "Vorst-Oost/Forest-Est"
		},
		{
			"id": "BE.NMBS.008814126",
			"locationX": "4.323901",
			"locationY": "50.802411",
			"@id": "http://irail.be/stations/NMBS/008814126",
			"standardname": "Ukkel-Stalle/Uccle-Stalle",
			"name": "Ukkel-Stalle/Uccle-Stalle"
		},
		{
			"id": "BE.NMBS.008814134",
			"locationX": "4.332207",
			"locationY": "50.791749",
			"@id": "http://irail.be/stations/NMBS/008814134",
			"standardname": "Ukkel-Kalevoet/Uccle-Calevoet",
			"name": "Ukkel-Kalevoet/Uccle-Calevoet"
		},
		{
			"id": "BE.NMBS.008814142",
			"locationX": "4.339434",
			"locationY": "50.773681",
			"@id": "http://irail.be/stations/NMBS/008814142",
			"standardname": "Linkebeek",
			"name": "Linkebeek"
		},
		{
			"id": "BE.NMBS.008814159",
			"locationX": "4.353952",
			"locationY": "50.767631",
			"@id": "http://irail.be/stations/NMBS/008814159",
			"standardname": "Holleken",
			"name": "Holleken"
		},
		{
			"id": "BE.NMBS.008814167",
			"locationX": "4.361997",
			"locationY": "50.74781",
			"@id": "http://irail.be/stations/NMBS/008814167",
			"standardname": "Sint-Genesius-Rode",
			"name": "Sint-Genesius-Rode"
		},
		{
			"id": "BE.NMBS.008814175",
			"locationX": "4.370717",
			"locationY": "50.738812",
			"@id": "http://irail.be/stations/NMBS/008814175",
			"standardname": "De Hoek",
			"name": "De Hoek"
		},
		{
			"id": "BE.NMBS.008814209",
			"locationX": "4.335065",
			"locationY": "50.599641",
			"@id": "http://irail.be/stations/NMBS/008814209",
			"standardname": "Nivelles",
			"name": "Nivelles"
		},
		{
			"id": "BE.NMBS.008814241",
			"locationX": "4.365368",
			"locationY": "50.645423",
			"@id": "http://irail.be/stations/NMBS/008814241",
			"standardname": "Lillois",
			"name": "Lillois"
		},
		{
			"id": "BE.NMBS.008814258",
			"locationX": "4.375526",
			"locationY": "50.684778",
			"@id": "http://irail.be/stations/NMBS/008814258",
			"standardname": "Braine-l'Alleud",
			"name": "Braine-l'Alleud"
		},
		{
			"id": "BE.NMBS.008814266",
			"locationX": "4.383481",
			"locationY": "50.715422",
			"@id": "http://irail.be/stations/NMBS/008814266",
			"standardname": "Waterloo",
			"name": "Waterloo"
		},
		{
			"id": "BE.NMBS.008814308",
			"locationX": "4.240634",
			"locationY": "50.733931",
			"@id": "http://irail.be/stations/NMBS/008814308",
			"standardname": "Halle",
			"name": "Halle"
		},
		{
			"id": "BE.NMBS.008814332",
			"locationX": "4.221577",
			"locationY": "50.715107",
			"@id": "http://irail.be/stations/NMBS/008814332",
			"standardname": "Lembeek",
			"name": "Lembeek"
		},
		{
			"id": "BE.NMBS.008814340",
			"locationX": "4.258558",
			"locationY": "50.751577",
			"@id": "http://irail.be/stations/NMBS/008814340",
			"standardname": "Buizingen",
			"name": "Buizingen"
		},
		{
			"id": "BE.NMBS.008814357",
			"locationX": "4.273696",
			"locationY": "50.766364",
			"@id": "http://irail.be/stations/NMBS/008814357",
			"standardname": "Lot",
			"name": "Lot"
		},
		{
			"id": "BE.NMBS.008814365",
			"locationX": "4.295333",
			"locationY": "50.79183",
			"@id": "http://irail.be/stations/NMBS/008814365",
			"standardname": "Ruisbroek",
			"name": "Ruisbroek"
		},
		{
			"id": "BE.NMBS.008814373",
			"locationX": "4.309167",
			"locationY": "50.809215",
			"@id": "http://irail.be/stations/NMBS/008814373",
			"standardname": "Vorst-Zuid/Forest-Midi",
			"name": "Vorst-Zuid/Forest-Midi"
		},
		{
			"id": "BE.NMBS.008814415",
			"locationX": "4.266487",
			"locationY": "50.7519",
			"@id": "http://irail.be/stations/NMBS/008814415",
			"standardname": "Huizingen",
			"name": "Huizingen"
		},
		{
			"id": "BE.NMBS.008814423",
			"locationX": "4.302605",
			"locationY": "50.766616",
			"@id": "http://irail.be/stations/NMBS/008814423",
			"standardname": "Beersel",
			"name": "Beersel"
		},
		{
			"id": "BE.NMBS.008814431",
			"locationX": "4.330733",
			"locationY": "50.77832",
			"@id": "http://irail.be/stations/NMBS/008814431",
			"standardname": "Moensberg",
			"name": "Moensberg"
		},
		{
			"id": "BE.NMBS.008814449",
			"locationX": "4.362761",
			"locationY": "50.79441",
			"@id": "http://irail.be/stations/NMBS/008814449",
			"standardname": "Sint-Job",
			"name": "Sint-Job"
		},
		{
			"id": "BE.NMBS.008814456",
			"locationX": "4.393387",
			"locationY": "50.801665",
			"@id": "http://irail.be/stations/NMBS/008814456",
			"standardname": "Boondaal/Boondael",
			"name": "Boondaal/Boondael"
		},
		{
			"id": "BE.NMBS.008814464",
			"locationX": "4.374052",
			"locationY": "50.796145",
			"@id": "http://irail.be/stations/NMBS/008814464",
			"standardname": "Diesdelle/Vivier d'Oie",
			"name": "Diesdelle/Vivier d'Oie"
		},
		{
			"id": "BE.NMBS.008814472",
			"locationX": "4.398333",
			"locationY": "50.809722",
			"@id": "http://irail.be/stations/NMBS/008814472",
			"standardname": "Arcaden/Arcades",
			"name": "Arcaden/Arcades"
		},
		{
			"id": "BE.NMBS.008815016",
			"locationX": "4.341090917587279",
			"locationY": "50.87175167644673",
			"@id": "http://irail.be/stations/NMBS/008815016",
			"name": "Thurn en Taxis",
			"standardname": "Thurn en Taxis/Tour et Taxis"
		},
		{
			"id": "BE.NMBS.008815040",
			"locationX": "4.321042",
			"locationY": "50.848552",
			"@id": "http://irail.be/stations/NMBS/008815040",
			"name": "Brussels-West",
			"standardname": "Brussel-West/Bruxelles-Ouest"
		},
		{
			"id": "BE.NMBS.008819406",
			"locationX": "4.482076",
			"locationY": "50.896456",
			"@id": "http://irail.be/stations/NMBS/008819406",
			"standardname": "Brussels Airport - Zaventem",
			"name": "Brussels Airport - Zaventem"
		},
		{
			"id": "BE.NMBS.008821006",
			"locationX": "4.421101",
			"locationY": "51.2172",
			"@id": "http://irail.be/stations/NMBS/008821006",
			"name": "Antwerp-Central",
			"standardname": "Antwerpen-Centraal"
		},
		{
			"id": "BE.NMBS.008821022",
			"locationX": "4.436392",
			"locationY": "51.207357",
			"@id": "http://irail.be/stations/NMBS/008821022",
			"name": "Antwerp-East",
			"standardname": "Antwerpen-Oost"
		},
		{
			"id": "BE.NMBS.008821048",
			"locationX": "4.379086",
			"locationY": "51.289968",
			"@id": "http://irail.be/stations/NMBS/008821048",
			"name": "Antwerp-Haven",
			"standardname": "Antwerpen-Haven"
		},
		{
			"id": "BE.NMBS.008821063",
			"locationX": "4.425029",
			"locationY": "51.244132",
			"@id": "http://irail.be/stations/NMBS/008821063",
			"name": "Antwerp-Luchtbal",
			"standardname": "Antwerpen-Luchtbal"
		},
		{
			"id": "BE.NMBS.008821071",
			"locationX": "4.434154",
			"locationY": "51.281626",
			"@id": "http://irail.be/stations/NMBS/008821071",
			"standardname": "Ekeren",
			"name": "Ekeren"
		},
		{
			"id": "BE.NMBS.008821089",
			"locationX": "4.427906",
			"locationY": "51.261643",
			"@id": "http://irail.be/stations/NMBS/008821089",
			"name": "Antwerp-Noorderdokken",
			"standardname": "Antwerpen-Noorderdokken"
		},
		{
			"id": "BE.NMBS.008821105",
			"locationX": "4.632204",
			"locationY": "51.356838",
			"@id": "http://irail.be/stations/NMBS/008821105",
			"standardname": "Noorderkempen",
			"name": "Noorderkempen"
		},
		{
			"id": "BE.NMBS.008821121",
			"locationX": "4.432221",
			"locationY": "51.19923",
			"@id": "http://irail.be/stations/NMBS/008821121",
			"name": "Antwerp-Berchem",
			"standardname": "Antwerpen-Berchem"
		},
		{
			"id": "BE.NMBS.008821147",
			"locationX": "4.448437",
			"locationY": "51.18296",
			"@id": "http://irail.be/stations/NMBS/008821147",
			"standardname": "Mortsel",
			"name": "Mortsel"
		},
		{
			"id": "BE.NMBS.008821154",
			"locationX": "4.446514",
			"locationY": "51.183023",
			"@id": "http://irail.be/stations/NMBS/008821154",
			"standardname": "Mortsel-Deurnesteenweg",
			"name": "Mortsel-Deurnesteenweg"
		},
		{
			"id": "BE.NMBS.008821196",
			"locationX": "4.390259",
			"locationY": "51.197828",
			"@id": "http://irail.be/stations/NMBS/008821196",
			"name": "Antwerp-South",
			"standardname": "Antwerpen-Zuid"
		},
		{
			"id": "BE.NMBS.008821238",
			"locationX": "4.455737",
			"locationY": "51.171256",
			"@id": "http://irail.be/stations/NMBS/008821238",
			"standardname": "Mortsel-Oude God",
			"name": "Mortsel-Oude God"
		},
		{
			"id": "BE.NMBS.008821246",
			"locationX": "4.468843",
			"locationY": "51.169027",
			"@id": "http://irail.be/stations/NMBS/008821246",
			"standardname": "Mortsel-Liersesteenweg",
			"name": "Mortsel-Liersesteenweg"
		},
		{
			"id": "BE.NMBS.008821311",
			"locationX": "4.476358",
			"locationY": "51.134023",
			"@id": "http://irail.be/stations/NMBS/008821311",
			"standardname": "Kontich-Lint",
			"name": "Kontich-Lint"
		},
		{
			"id": "BE.NMBS.008821337",
			"locationX": "4.465157",
			"locationY": "51.154114",
			"@id": "http://irail.be/stations/NMBS/008821337",
			"standardname": "Hove",
			"name": "Hove"
		},
		{
			"id": "BE.NMBS.008821402",
			"locationX": "4.451314",
			"locationY": "51.462767",
			"@id": "http://irail.be/stations/NMBS/008821402",
			"standardname": "Essen",
			"name": "Essen"
		},
		{
			"id": "BE.NMBS.008821436",
			"locationX": "4.46335",
			"locationY": "51.428087",
			"@id": "http://irail.be/stations/NMBS/008821436",
			"standardname": "Wildert",
			"name": "Wildert"
		},
		{
			"id": "BE.NMBS.008821444",
			"locationX": "4.46682",
			"locationY": "51.391177",
			"@id": "http://irail.be/stations/NMBS/008821444",
			"standardname": "Kalmthout",
			"name": "Kalmthout"
		},
		{
			"id": "BE.NMBS.008821451",
			"locationX": "4.467315",
			"locationY": "51.378664",
			"@id": "http://irail.be/stations/NMBS/008821451",
			"standardname": "Kijkuit",
			"name": "Kijkuit"
		},
		{
			"id": "BE.NMBS.008821519",
			"locationX": "4.460483",
			"locationY": "51.364623",
			"@id": "http://irail.be/stations/NMBS/008821519",
			"standardname": "Heide",
			"name": "Heide"
		},
		{
			"id": "BE.NMBS.008821535",
			"locationX": "4.432661",
			"locationY": "51.313528",
			"@id": "http://irail.be/stations/NMBS/008821535",
			"standardname": "Kapellen",
			"name": "Kapellen"
		},
		{
			"id": "BE.NMBS.008821543",
			"locationX": "4.4349",
			"locationY": "51.291658",
			"@id": "http://irail.be/stations/NMBS/008821543",
			"standardname": "Sint-Mariaburg",
			"name": "Sint-Mariaburg"
		},
		{
			"id": "BE.NMBS.008821600",
			"locationX": "4.560614",
			"locationY": "51.135758",
			"@id": "http://irail.be/stations/NMBS/008821600",
			"standardname": "Lier",
			"name": "Lier"
		},
		{
			"id": "BE.NMBS.008821634",
			"locationX": "4.494489",
			"locationY": "51.16348",
			"@id": "http://irail.be/stations/NMBS/008821634",
			"standardname": "Boechout",
			"name": "Boechout"
		},
		{
			"id": "BE.NMBS.008821659",
			"locationX": "4.618459",
			"locationY": "51.151057",
			"@id": "http://irail.be/stations/NMBS/008821659",
			"standardname": "Kessel",
			"name": "Kessel"
		},
		{
			"id": "BE.NMBS.008821667",
			"locationX": "4.666588",
			"locationY": "51.15984",
			"@id": "http://irail.be/stations/NMBS/008821667",
			"standardname": "Nijlen",
			"name": "Nijlen"
		},
		{
			"id": "BE.NMBS.008821709",
			"locationX": "4.786144",
			"locationY": "51.168361",
			"@id": "http://irail.be/stations/NMBS/008821709",
			"standardname": "Wolfstee",
			"name": "Wolfstee"
		},
		{
			"id": "BE.NMBS.008821717",
			"locationX": "4.829535",
			"locationY": "51.181513",
			"@id": "http://irail.be/stations/NMBS/008821717",
			"standardname": "Herentals",
			"name": "Herentals"
		},
		{
			"id": "BE.NMBS.008821725",
			"locationX": "4.746511",
			"locationY": "51.165764",
			"@id": "http://irail.be/stations/NMBS/008821725",
			"standardname": "Bouwel",
			"name": "Bouwel"
		},
		{
			"id": "BE.NMBS.008821816",
			"locationX": "4.638811",
			"locationY": "51.113662",
			"@id": "http://irail.be/stations/NMBS/008821816",
			"standardname": "Berlaar",
			"name": "Berlaar"
		},
		{
			"id": "BE.NMBS.008821824",
			"locationX": "4.671532",
			"locationY": "51.094938",
			"@id": "http://irail.be/stations/NMBS/008821824",
			"standardname": "Melkouwen",
			"name": "Melkouwen"
		},
		{
			"id": "BE.NMBS.008821832",
			"locationX": "4.708235",
			"locationY": "51.074146",
			"@id": "http://irail.be/stations/NMBS/008821832",
			"standardname": "Heist-op-den-Berg",
			"name": "Heist-op-den-Berg"
		},
		{
			"id": "BE.NMBS.008821857",
			"locationX": "4.773478",
			"locationY": "51.037344",
			"@id": "http://irail.be/stations/NMBS/008821857",
			"standardname": "Booischot",
			"name": "Booischot"
		},
		{
			"id": "BE.NMBS.008821865",
			"locationX": "4.800338",
			"locationY": "51.021972",
			"@id": "http://irail.be/stations/NMBS/008821865",
			"standardname": "Begijnendijk",
			"name": "Begijnendijk"
		},
		{
			"id": "BE.NMBS.008821907",
			"locationX": "4.937415",
			"locationY": "51.322032",
			"@id": "http://irail.be/stations/NMBS/008821907",
			"standardname": "Turnhout",
			"name": "Turnhout"
		},
		{
			"id": "BE.NMBS.008821964",
			"locationX": "4.893089",
			"locationY": "51.241021",
			"@id": "http://irail.be/stations/NMBS/008821964",
			"standardname": "Tielen",
			"name": "Tielen"
		},
		{
			"id": "BE.NMBS.008822004",
			"locationX": "4.482785",
			"locationY": "51.017648",
			"@id": "http://irail.be/stations/NMBS/008822004",
			"standardname": "Mechelen",
			"name": "Mechelen"
		},
		{
			"id": "BE.NMBS.008822053",
			"locationX": "4.359121",
			"locationY": "51.010843",
			"@id": "http://irail.be/stations/NMBS/008822053",
			"standardname": "Kapelle-op-den-Bos",
			"name": "Kapelle-op-den-Bos"
		},
		{
			"id": "BE.NMBS.008822111",
			"locationX": "4.299073",
			"locationY": "51.009091",
			"@id": "http://irail.be/stations/NMBS/008822111",
			"standardname": "Londerzeel",
			"name": "Londerzeel"
		},
		{
			"id": "BE.NMBS.008822137",
			"locationX": "4.22911",
			"locationY": "51.014484",
			"@id": "http://irail.be/stations/NMBS/008822137",
			"standardname": "Malderen",
			"name": "Malderen"
		},
		{
			"id": "BE.NMBS.008822145",
			"locationX": "4.201666",
			"locationY": "51.016291",
			"@id": "http://irail.be/stations/NMBS/008822145",
			"standardname": "Buggenhout",
			"name": "Buggenhout"
		},
		{
			"id": "BE.NMBS.008822160",
			"locationX": "4.153492",
			"locationY": "51.019437",
			"@id": "http://irail.be/stations/NMBS/008822160",
			"standardname": "Baasrode-Zuid",
			"name": "Baasrode-Zuid"
		},
		{
			"id": "BE.NMBS.008822210",
			"locationX": "4.493186",
			"locationY": "51.091243",
			"@id": "http://irail.be/stations/NMBS/008822210",
			"standardname": "Duffel",
			"name": "Duffel"
		},
		{
			"id": "BE.NMBS.008822228",
			"locationX": "4.496116",
			"locationY": "51.069975",
			"@id": "http://irail.be/stations/NMBS/008822228",
			"standardname": "Sint-Katelijne-Waver",
			"name": "Sint-Katelijne-Waver"
		},
		{
			"id": "BE.NMBS.008822251",
			"locationX": "4.470937",
			"locationY": "50.977449",
			"@id": "http://irail.be/stations/NMBS/008822251",
			"standardname": "Weerde",
			"name": "Weerde"
		},
		{
			"id": "BE.NMBS.008822269",
			"locationX": "4.45749",
			"locationY": "50.9584",
			"@id": "http://irail.be/stations/NMBS/008822269",
			"standardname": "Eppegem",
			"name": "Eppegem"
		},
		{
			"id": "BE.NMBS.008822277",
			"locationX": "4.498336",
			"locationY": "50.988658",
			"@id": "http://irail.be/stations/NMBS/008822277",
			"standardname": "Hofstade",
			"name": "Hofstade"
		},
		{
			"id": "BE.NMBS.008822343",
			"locationX": "4.489914",
			"locationY": "51.029883",
			"@id": "http://irail.be/stations/NMBS/008822343",
			"standardname": "Mechelen-Nekkerspoel",
			"name": "Mechelen-Nekkerspoel"
		},
		{
			"id": "BE.NMBS.008822426",
			"locationX": "4.513843",
			"locationY": "51.008201",
			"@id": "http://irail.be/stations/NMBS/008822426",
			"standardname": "Muizen",
			"name": "Muizen"
		},
		{
			"id": "BE.NMBS.008822459",
			"locationX": "4.537637",
			"locationY": "50.997791",
			"@id": "http://irail.be/stations/NMBS/008822459",
			"standardname": "Hever",
			"name": "Hever"
		},
		{
			"id": "BE.NMBS.008822475",
			"locationX": "4.5739",
			"locationY": "50.981853",
			"@id": "http://irail.be/stations/NMBS/008822475",
			"standardname": "Boortmeerbeek",
			"name": "Boortmeerbeek"
		},
		{
			"id": "BE.NMBS.008822517",
			"locationX": "4.613309",
			"locationY": "50.966428",
			"@id": "http://irail.be/stations/NMBS/008822517",
			"standardname": "Haacht",
			"name": "Haacht"
		},
		{
			"id": "BE.NMBS.008822525",
			"locationX": "4.638011",
			"locationY": "50.958544",
			"@id": "http://irail.be/stations/NMBS/008822525",
			"standardname": "Wespelaar-Tildonk",
			"name": "Wespelaar-Tildonk"
		},
		{
			"id": "BE.NMBS.008822533",
			"locationX": "4.66301",
			"locationY": "50.944251",
			"@id": "http://irail.be/stations/NMBS/008822533",
			"standardname": "Hambos",
			"name": "Hambos"
		},
		{
			"id": "BE.NMBS.008822608",
			"locationX": "4.356019",
			"locationY": "51.066343",
			"@id": "http://irail.be/stations/NMBS/008822608",
			"standardname": "Willebroek",
			"name": "Willebroek"
		},
		{
			"id": "BE.NMBS.008822715",
			"locationX": "4.282703",
			"locationY": "51.07722",
			"@id": "http://irail.be/stations/NMBS/008822715",
			"standardname": "Puurs",
			"name": "Puurs"
		},
		{
			"id": "BE.NMBS.008822772",
			"locationX": "4.240526",
			"locationY": "51.099225",
			"@id": "http://irail.be/stations/NMBS/008822772",
			"standardname": "Bornem",
			"name": "Bornem"
		},
		{
			"id": "BE.NMBS.008822814",
			"locationX": "4.360694",
			"locationY": "51.090713",
			"@id": "http://irail.be/stations/NMBS/008822814",
			"standardname": "Boom",
			"name": "Boom"
		},
		{
			"id": "BE.NMBS.008822848",
			"locationX": "4.324998",
			"locationY": "51.081022",
			"@id": "http://irail.be/stations/NMBS/008822848",
			"standardname": "Ruisbroek-Sauvegarde",
			"name": "Ruisbroek-Sauvegarde"
		},
		{
			"id": "BE.NMBS.008824158",
			"locationX": "4.347785",
			"locationY": "51.182699",
			"@id": "http://irail.be/stations/NMBS/008824158",
			"standardname": "Hoboken-Polder",
			"name": "Hoboken-Polder"
		},
		{
			"id": "BE.NMBS.008824224",
			"locationX": "4.338293",
			"locationY": "51.136243",
			"@id": "http://irail.be/stations/NMBS/008824224",
			"standardname": "Hemiksem",
			"name": "Hemiksem"
		},
		{
			"id": "BE.NMBS.008824232",
			"locationX": "4.340261",
			"locationY": "51.12551",
			"@id": "http://irail.be/stations/NMBS/008824232",
			"standardname": "Schelle",
			"name": "Schelle"
		},
		{
			"id": "BE.NMBS.008824240",
			"locationX": "4.338589",
			"locationY": "51.111595",
			"@id": "http://irail.be/stations/NMBS/008824240",
			"standardname": "Niel",
			"name": "Niel"
		},
		{
			"id": "BE.NMBS.008831005",
			"locationX": "5.327627",
			"locationY": "50.930822",
			"@id": "http://irail.be/stations/NMBS/008831005",
			"standardname": "Hasselt",
			"name": "Hasselt"
		},
		{
			"id": "BE.NMBS.008831039",
			"locationX": "5.292866",
			"locationY": "50.886837",
			"@id": "http://irail.be/stations/NMBS/008831039",
			"standardname": "Alken",
			"name": "Alken"
		},
		{
			"id": "BE.NMBS.008831088",
			"locationX": "5.187405",
			"locationY": "50.963758",
			"@id": "http://irail.be/stations/NMBS/008831088",
			"standardname": "Schulen",
			"name": "Schulen"
		},
		{
			"id": "BE.NMBS.008831112",
			"locationX": "5.419947",
			"locationY": "50.910452",
			"@id": "http://irail.be/stations/NMBS/008831112",
			"standardname": "Diepenbeek",
			"name": "Diepenbeek"
		},
		{
			"id": "BE.NMBS.008831138",
			"locationX": "5.50938",
			"locationY": "50.868643",
			"@id": "http://irail.be/stations/NMBS/008831138",
			"standardname": "Bilzen",
			"name": "Bilzen"
		},
		{
			"id": "BE.NMBS.008831310",
			"locationX": "5.47328",
			"locationY": "50.784405",
			"@id": "http://irail.be/stations/NMBS/008831310",
			"standardname": "Tongeren",
			"name": "Tongeren"
		},
		{
			"id": "BE.NMBS.008831401",
			"locationX": "5.050031",
			"locationY": "50.993341",
			"@id": "http://irail.be/stations/NMBS/008831401",
			"standardname": "Diest",
			"name": "Diest"
		},
		{
			"id": "BE.NMBS.008831765",
			"locationX": "5.497685",
			"locationY": "50.967057",
			"@id": "http://irail.be/stations/NMBS/008831765",
			"standardname": "Genk",
			"name": "Genk"
		},
		{
			"id": "BE.NMBS.008831781",
			"locationX": "5.408386",
			"locationY": "50.955812",
			"@id": "http://irail.be/stations/NMBS/008831781",
			"standardname": "Bokrijk",
			"name": "Bokrijk"
		},
		{
			"id": "BE.NMBS.008831807",
			"locationX": "5.176654",
			"locationY": "50.81762",
			"@id": "http://irail.be/stations/NMBS/008831807",
			"standardname": "Sint-Truiden",
			"name": "Sint-Truiden"
		},
		{
			"id": "BE.NMBS.008832003",
			"locationX": "5.257287",
			"locationY": "51.117312",
			"@id": "http://irail.be/stations/NMBS/008832003",
			"standardname": "Leopoldsburg",
			"name": "Leopoldsburg"
		},
		{
			"id": "BE.NMBS.008832045",
			"locationX": "5.164986",
			"locationY": "51.169099",
			"@id": "http://irail.be/stations/NMBS/008832045",
			"standardname": "Balen",
			"name": "Balen"
		},
		{
			"id": "BE.NMBS.008832227",
			"locationX": "5.234373",
			"locationY": "51.087719",
			"@id": "http://irail.be/stations/NMBS/008832227",
			"standardname": "Beverlo",
			"name": "Beverlo"
		},
		{
			"id": "BE.NMBS.008832235",
			"locationX": "5.235892",
			"locationY": "51.050603",
			"@id": "http://irail.be/stations/NMBS/008832235",
			"standardname": "Beringen",
			"name": "Beringen"
		},
		{
			"id": "BE.NMBS.008832243",
			"locationX": "5.281782",
			"locationY": "51.038207",
			"@id": "http://irail.be/stations/NMBS/008832243",
			"standardname": "Heusden",
			"name": "Heusden"
		},
		{
			"id": "BE.NMBS.008832250",
			"locationX": "5.3299",
			"locationY": "51.033548",
			"@id": "http://irail.be/stations/NMBS/008832250",
			"standardname": "Zolder",
			"name": "Zolder"
		},
		{
			"id": "BE.NMBS.008832334",
			"locationX": "5.348815",
			"locationY": "50.989557",
			"@id": "http://irail.be/stations/NMBS/008832334",
			"standardname": "Zonhoven",
			"name": "Zonhoven"
		},
		{
			"id": "BE.NMBS.008832375",
			"locationX": "5.350226",
			"locationY": "50.954841",
			"@id": "http://irail.be/stations/NMBS/008832375",
			"standardname": "Kiewit",
			"name": "Kiewit"
		},
		{
			"id": "BE.NMBS.008832409",
			"locationX": "5.116336",
			"locationY": "51.19105",
			"@id": "http://irail.be/stations/NMBS/008832409",
			"standardname": "Mol",
			"name": "Mol"
		},
		{
			"id": "BE.NMBS.008832433",
			"locationX": "4.988608",
			"locationY": "51.168955",
			"@id": "http://irail.be/stations/NMBS/008832433",
			"standardname": "Geel",
			"name": "Geel"
		},
		{
			"id": "BE.NMBS.008832458",
			"locationX": "4.847585",
			"locationY": "51.188057",
			"@id": "http://irail.be/stations/NMBS/008832458",
			"standardname": "Olen",
			"name": "Olen"
		},
		{
			"id": "BE.NMBS.008832565",
			"locationX": "5.312031",
			"locationY": "51.211564",
			"@id": "http://irail.be/stations/NMBS/008832565",
			"standardname": "Lommel",
			"name": "Lommel"
		},
		{
			"id": "BE.NMBS.008832573",
			"locationX": "5.422751",
			"locationY": "51.215618",
			"@id": "http://irail.be/stations/NMBS/008832573",
			"standardname": "Overpelt",
			"name": "Overpelt"
		},
		{
			"id": "BE.NMBS.008832615",
			"locationX": "5.43717",
			"locationY": "51.222369",
			"@id": "http://irail.be/stations/NMBS/008832615",
			"standardname": "Neerpelt",
			"name": "Neerpelt"
		},
		{
			"id": "BE.NMBS.008832664",
			"locationX": "5.543279",
			"locationY": "51.246424",
			"@id": "http://irail.be/stations/NMBS/008832664",
			"standardname": "Hamont",
			"name": "Hamont"
		},
		{
			"id": "BE.NMBS.008833001",
			"locationX": "4.715866",
			"locationY": "50.88228",
			"@id": "http://irail.be/stations/NMBS/008833001",
			"standardname": "Leuven",
			"name": "Leuven"
		},
		{
			"id": "BE.NMBS.008833050",
			"locationX": "4.835522",
			"locationY": "50.836282",
			"@id": "http://irail.be/stations/NMBS/008833050",
			"standardname": "Vertrijk",
			"name": "Vertrijk"
		},
		{
			"id": "BE.NMBS.008833126",
			"locationX": "4.6952",
			"locationY": "50.86253",
			"@id": "http://irail.be/stations/NMBS/008833126",
			"standardname": "Heverlee",
			"name": "Heverlee"
		},
		{
			"id": "BE.NMBS.008833134",
			"locationX": "4.653311",
			"locationY": "50.835931",
			"@id": "http://irail.be/stations/NMBS/008833134",
			"standardname": "Oud-Heverlee",
			"name": "Oud-Heverlee"
		},
		{
			"id": "BE.NMBS.008833159",
			"locationX": "4.651728",
			"locationY": "50.800631",
			"@id": "http://irail.be/stations/NMBS/008833159",
			"standardname": "Sint-Joris-Weert",
			"name": "Sint-Joris-Weert"
		},
		{
			"id": "BE.NMBS.008833175",
			"locationX": "4.701475",
			"locationY": "50.92274",
			"@id": "http://irail.be/stations/NMBS/008833175",
			"standardname": "Wijgmaal",
			"name": "Wijgmaal"
		},
		{
			"id": "BE.NMBS.008833209",
			"locationX": "4.824043",
			"locationY": "50.984406",
			"@id": "http://irail.be/stations/NMBS/008833209",
			"standardname": "Aarschot",
			"name": "Aarschot"
		},
		{
			"id": "BE.NMBS.008833233",
			"locationX": "4.747679",
			"locationY": "50.956261",
			"@id": "http://irail.be/stations/NMBS/008833233",
			"standardname": "Wezemaal",
			"name": "Wezemaal"
		},
		{
			"id": "BE.NMBS.008833258",
			"locationX": "4.863541",
			"locationY": "51.002466",
			"@id": "http://irail.be/stations/NMBS/008833258",
			"standardname": "Langdorp",
			"name": "Langdorp"
		},
		{
			"id": "BE.NMBS.008833266",
			"locationX": "4.945829",
			"locationY": "51.009864",
			"@id": "http://irail.be/stations/NMBS/008833266",
			"standardname": "Testelt",
			"name": "Testelt"
		},
		{
			"id": "BE.NMBS.008833274",
			"locationX": "4.987359",
			"locationY": "51.00669",
			"@id": "http://irail.be/stations/NMBS/008833274",
			"standardname": "Zichem",
			"name": "Zichem"
		},
		{
			"id": "BE.NMBS.008833308",
			"locationX": "4.92581",
			"locationY": "50.80802",
			"@id": "http://irail.be/stations/NMBS/008833308",
			"standardname": "Tienen",
			"name": "Tienen"
		},
		{
			"id": "BE.NMBS.008833449",
			"locationX": "4.994217",
			"locationY": "50.772126",
			"@id": "http://irail.be/stations/NMBS/008833449",
			"standardname": "Ezemaal",
			"name": "Ezemaal"
		},
		{
			"id": "BE.NMBS.008833605",
			"locationX": "5.07966",
			"locationY": "50.747927",
			"@id": "http://irail.be/stations/NMBS/008833605",
			"standardname": "Landen",
			"name": "Landen"
		},
		{
			"id": "BE.NMBS.008833670",
			"locationX": "5.036323",
			"locationY": "50.763964",
			"@id": "http://irail.be/stations/NMBS/008833670",
			"standardname": "Neerwinden",
			"name": "Neerwinden"
		},
		{
			"id": "BE.NMBS.008841004",
			"locationX": "5.566695",
			"locationY": "50.62455",
			"@id": "http://irail.be/stations/NMBS/008841004",
			"standardname": "Liège-Guillemins",
			"name": "Liège-Guillemins"
		},
		{
			"id": "BE.NMBS.008841202",
			"locationX": "5.509704",
			"locationY": "50.661208",
			"@id": "http://irail.be/stations/NMBS/008841202",
			"standardname": "Ans",
			"name": "Ans"
		},
		{
			"id": "BE.NMBS.008841319",
			"locationX": "5.460551",
			"locationY": "50.65861",
			"@id": "http://irail.be/stations/NMBS/008841319",
			"standardname": "Bierset-Awans",
			"name": "Bierset-Awans"
		},
		{
			"id": "BE.NMBS.008841327",
			"locationX": "5.429556",
			"locationY": "50.66181",
			"@id": "http://irail.be/stations/NMBS/008841327",
			"standardname": "Voroux",
			"name": "Voroux"
		},
		{
			"id": "BE.NMBS.008841400",
			"locationX": "5.249475",
			"locationY": "50.694549",
			"@id": "http://irail.be/stations/NMBS/008841400",
			"standardname": "Waremme",
			"name": "Waremme"
		},
		{
			"id": "BE.NMBS.008841434",
			"locationX": "5.286394",
			"locationY": "50.685065",
			"@id": "http://irail.be/stations/NMBS/008841434",
			"standardname": "Bleret",
			"name": "Bleret"
		},
		{
			"id": "BE.NMBS.008841442",
			"locationX": "5.321407",
			"locationY": "50.678611",
			"@id": "http://irail.be/stations/NMBS/008841442",
			"standardname": "Remicourt",
			"name": "Remicourt"
		},
		{
			"id": "BE.NMBS.008841459",
			"locationX": "5.367602",
			"locationY": "50.66991",
			"@id": "http://irail.be/stations/NMBS/008841459",
			"standardname": "Momalle",
			"name": "Momalle"
		},
		{
			"id": "BE.NMBS.008841467",
			"locationX": "5.398453",
			"locationY": "50.664049",
			"@id": "http://irail.be/stations/NMBS/008841467",
			"standardname": "Fexhe-le-Haut-Clocher",
			"name": "Fexhe-le-Haut-Clocher"
		},
		{
			"id": "BE.NMBS.008841525",
			"locationX": "5.570453",
			"locationY": "50.646349",
			"@id": "http://irail.be/stations/NMBS/008841525",
			"standardname": "Liège-Palais",
			"name": "Liège-Palais"
		},
		{
			"id": "BE.NMBS.008841558",
			"locationX": "5.561131",
			"locationY": "50.640299",
			"@id": "http://irail.be/stations/NMBS/008841558",
			"standardname": "Liège-Jonfosse",
			"name": "Liège-Jonfosse"
		},
		{
			"id": "BE.NMBS.008841608",
			"locationX": "5.622761",
			"locationY": "50.660911",
			"@id": "http://irail.be/stations/NMBS/008841608",
			"standardname": "Herstal",
			"name": "Herstal"
		},
		{
			"id": "BE.NMBS.008841665",
			"locationX": "5.60009",
			"locationY": "50.692455",
			"@id": "http://irail.be/stations/NMBS/008841665",
			"standardname": "Milmort",
			"name": "Milmort"
		},
		{
			"id": "BE.NMBS.008841673",
			"locationX": "5.56683",
			"locationY": "50.698181",
			"@id": "http://irail.be/stations/NMBS/008841673",
			"standardname": "Liers",
			"name": "Liers"
		},
		{
			"id": "BE.NMBS.008841731",
			"locationX": "5.535431",
			"locationY": "50.750426",
			"@id": "http://irail.be/stations/NMBS/008841731",
			"standardname": "Glons",
			"name": "Glons"
		},
		{
			"id": "BE.NMBS.008842002",
			"locationX": "5.599695",
			"locationY": "50.613152",
			"@id": "http://irail.be/stations/NMBS/008842002",
			"standardname": "Angleur",
			"name": "Angleur"
		},
		{
			"id": "BE.NMBS.008842036",
			"locationX": "5.616073",
			"locationY": "50.608019",
			"@id": "http://irail.be/stations/NMBS/008842036",
			"standardname": "Chênée",
			"name": "Chênée"
		},
		{
			"id": "BE.NMBS.008842630",
			"locationX": "5.583937",
			"locationY": "50.570624",
			"@id": "http://irail.be/stations/NMBS/008842630",
			"standardname": "Tilff",
			"name": "Tilff"
		},
		{
			"id": "BE.NMBS.008842648",
			"locationX": "5.587236",
			"locationY": "50.54762",
			"@id": "http://irail.be/stations/NMBS/008842648",
			"standardname": "Méry",
			"name": "Méry"
		},
		{
			"id": "BE.NMBS.008842655",
			"locationX": "5.573563",
			"locationY": "50.539917",
			"@id": "http://irail.be/stations/NMBS/008842655",
			"standardname": "Hony",
			"name": "Hony"
		},
		{
			"id": "BE.NMBS.008842663",
			"locationX": "5.572565",
			"locationY": "50.530568",
			"@id": "http://irail.be/stations/NMBS/008842663",
			"standardname": "Esneux",
			"name": "Esneux"
		},
		{
			"id": "BE.NMBS.008842689",
			"locationX": "5.578858",
			"locationY": "50.509209",
			"@id": "http://irail.be/stations/NMBS/008842689",
			"standardname": "Poulseur",
			"name": "Poulseur"
		},
		{
			"id": "BE.NMBS.008842705",
			"locationX": "5.587631",
			"locationY": "50.483285",
			"@id": "http://irail.be/stations/NMBS/008842705",
			"standardname": "Rivage",
			"name": "Rivage"
		},
		{
			"id": "BE.NMBS.008842754",
			"locationX": "5.672499",
			"locationY": "50.472938",
			"@id": "http://irail.be/stations/NMBS/008842754",
			"standardname": "Aywaille",
			"name": "Aywaille"
		},
		{
			"id": "BE.NMBS.008842838",
			"locationX": "5.566956",
			"locationY": "50.456865",
			"@id": "http://irail.be/stations/NMBS/008842838",
			"standardname": "Comblain-la-Tour",
			"name": "Comblain-la-Tour"
		},
		{
			"id": "BE.NMBS.008842846",
			"locationX": "5.533561",
			"locationY": "50.428181",
			"@id": "http://irail.be/stations/NMBS/008842846",
			"standardname": "Hamoir",
			"name": "Hamoir"
		},
		{
			"id": "BE.NMBS.008842853",
			"locationX": "5.523565",
			"locationY": "50.403254",
			"@id": "http://irail.be/stations/NMBS/008842853",
			"standardname": "Sy",
			"name": "Sy"
		},
		{
			"id": "BE.NMBS.008843133",
			"locationX": "5.558911",
			"locationY": "50.609844",
			"@id": "http://irail.be/stations/NMBS/008843133",
			"standardname": "Sclessin",
			"name": "Sclessin"
		},
		{
			"id": "BE.NMBS.008843141",
			"locationX": "5.510162",
			"locationY": "50.619651",
			"@id": "http://irail.be/stations/NMBS/008843141",
			"standardname": "Pont-de-Seraing",
			"name": "Pont-de-Seraing"
		},
		{
			"id": "BE.NMBS.008843158",
			"locationX": "5.497874",
			"locationY": "50.618446",
			"@id": "http://irail.be/stations/NMBS/008843158",
			"standardname": "Jemeppe-sur-Meuse",
			"name": "Jemeppe-sur-Meuse"
		},
		{
			"id": "BE.NMBS.008843166",
			"locationX": "5.480983",
			"locationY": "50.605349",
			"@id": "http://irail.be/stations/NMBS/008843166",
			"standardname": "Flemalle-Grande",
			"name": "Flemalle-Grande"
		},
		{
			"id": "BE.NMBS.008843208",
			"locationX": "5.457656",
			"locationY": "50.595308",
			"@id": "http://irail.be/stations/NMBS/008843208",
			"standardname": "Flemalle-Haute",
			"name": "Flemalle-Haute"
		},
		{
			"id": "BE.NMBS.008843224",
			"locationX": "5.468309",
			"locationY": "50.600396",
			"@id": "http://irail.be/stations/NMBS/008843224",
			"standardname": "Leman",
			"name": "Leman"
		},
		{
			"id": "BE.NMBS.008843240",
			"locationX": "5.401986",
			"locationY": "50.582957",
			"@id": "http://irail.be/stations/NMBS/008843240",
			"standardname": "Engis",
			"name": "Engis"
		},
		{
			"id": "BE.NMBS.008843307",
			"locationX": "5.234211",
			"locationY": "50.527242",
			"@id": "http://irail.be/stations/NMBS/008843307",
			"standardname": "Huy",
			"name": "Huy"
		},
		{
			"id": "BE.NMBS.008843323",
			"locationX": "5.289729",
			"locationY": "50.539215",
			"@id": "http://irail.be/stations/NMBS/008843323",
			"standardname": "Ampsin",
			"name": "Ampsin"
		},
		{
			"id": "BE.NMBS.008843331",
			"locationX": "5.32049",
			"locationY": "50.546011",
			"@id": "http://irail.be/stations/NMBS/008843331",
			"standardname": "Amay",
			"name": "Amay"
		},
		{
			"id": "BE.NMBS.008843349",
			"locationX": "5.330333",
			"locationY": "50.55349",
			"@id": "http://irail.be/stations/NMBS/008843349",
			"standardname": "Haute-Flône",
			"name": "Haute-Flône"
		},
		{
			"id": "BE.NMBS.008843406",
			"locationX": "5.219676",
			"locationY": "50.528276",
			"@id": "http://irail.be/stations/NMBS/008843406",
			"standardname": "Statte",
			"name": "Statte"
		},
		{
			"id": "BE.NMBS.008843430",
			"locationX": "5.190937",
			"locationY": "50.52263",
			"@id": "http://irail.be/stations/NMBS/008843430",
			"standardname": "Bas-Oha",
			"name": "Bas-Oha"
		},
		{
			"id": "BE.NMBS.008843901",
			"locationX": "5.611057",
			"locationY": "50.643967",
			"@id": "http://irail.be/stations/NMBS/008843901",
			"standardname": "Bressoux",
			"name": "Bressoux"
		},
		{
			"id": "BE.NMBS.008844008",
			"locationX": "5.854917",
			"locationY": "50.588135",
			"@id": "http://irail.be/stations/NMBS/008844008",
			"standardname": "Verviers-Central",
			"name": "Verviers-Central"
		},
		{
			"id": "BE.NMBS.008844057",
			"locationX": "5.865335",
			"locationY": "50.590921",
			"@id": "http://irail.be/stations/NMBS/008844057",
			"standardname": "Verviers-Palais",
			"name": "Verviers-Palais"
		},
		{
			"id": "BE.NMBS.008844206",
			"locationX": "5.80615",
			"locationY": "50.568179",
			"@id": "http://irail.be/stations/NMBS/008844206",
			"standardname": "Pepinster",
			"name": "Pepinster"
		},
		{
			"id": "BE.NMBS.008844230",
			"locationX": "5.741581",
			"locationY": "50.572089",
			"@id": "http://irail.be/stations/NMBS/008844230",
			"standardname": "Nessonvaux",
			"name": "Nessonvaux"
		},
		{
			"id": "BE.NMBS.008844255",
			"locationX": "5.723665",
			"locationY": "50.565059",
			"@id": "http://irail.be/stations/NMBS/008844255",
			"standardname": "Fraipont",
			"name": "Fraipont"
		},
		{
			"id": "BE.NMBS.008844271",
			"locationX": "5.688346",
			"locationY": "50.573213",
			"@id": "http://irail.be/stations/NMBS/008844271",
			"standardname": "Trooz",
			"name": "Trooz"
		},
		{
			"id": "BE.NMBS.008844313",
			"locationX": "5.804397",
			"locationY": "50.563405",
			"@id": "http://irail.be/stations/NMBS/008844313",
			"standardname": "Pepinster-Cité",
			"name": "Pepinster-Cité"
		},
		{
			"id": "BE.NMBS.008844321",
			"locationX": "5.809935",
			"locationY": "50.544717",
			"@id": "http://irail.be/stations/NMBS/008844321",
			"standardname": "Juslenville",
			"name": "Juslenville"
		},
		{
			"id": "BE.NMBS.008844339",
			"locationX": "5.815031",
			"locationY": "50.536159",
			"@id": "http://irail.be/stations/NMBS/008844339",
			"standardname": "Theux",
			"name": "Theux"
		},
		{
			"id": "BE.NMBS.008844347",
			"locationX": "5.822223",
			"locationY": "50.525723",
			"@id": "http://irail.be/stations/NMBS/008844347",
			"standardname": "Franchimont",
			"name": "Franchimont"
		},
		{
			"id": "BE.NMBS.008844404",
			"locationX": "5.855096",
			"locationY": "50.490305",
			"@id": "http://irail.be/stations/NMBS/008844404",
			"standardname": "Spa",
			"name": "Spa"
		},
		{
			"id": "BE.NMBS.008844420",
			"locationX": "5.866207",
			"locationY": "50.489307",
			"@id": "http://irail.be/stations/NMBS/008844420",
			"standardname": "Spa-Géronstère",
			"name": "Spa-Géronstère"
		},
		{
			"id": "BE.NMBS.008844503",
			"locationX": "5.975381",
			"locationY": "50.659707",
			"@id": "http://irail.be/stations/NMBS/008844503",
			"standardname": "Welkenraedt",
			"name": "Welkenraedt"
		},
		{
			"id": "BE.NMBS.008844545",
			"locationX": "5.936494",
			"locationY": "50.616244",
			"@id": "http://irail.be/stations/NMBS/008844545",
			"standardname": "Dolhain-Gileppe",
			"name": "Dolhain-Gileppe"
		},
		{
			"id": "BE.NMBS.008844628",
			"locationX": "6.03711",
			"locationY": "50.635157",
			"@id": "http://irail.be/stations/NMBS/008844628",
			"standardname": "Eupen",
			"name": "Eupen"
		},
		{
			"id": "BE.NMBS.008844644",
			"locationX": "6.041335",
			"locationY": "50.718209",
			"@id": "http://irail.be/stations/NMBS/008844644",
			"standardname": "Hergenrath",
			"name": "Hergenrath"
		},
		{
			"id": "BE.NMBS.008845005",
			"locationX": "5.953906",
			"locationY": "50.189409",
			"@id": "http://irail.be/stations/NMBS/008845005",
			"standardname": "Gouvy",
			"name": "Gouvy"
		},
		{
			"id": "BE.NMBS.008845146",
			"locationX": "5.909211",
			"locationY": "50.278933",
			"@id": "http://irail.be/stations/NMBS/008845146",
			"standardname": "Vielsalm",
			"name": "Vielsalm"
		},
		{
			"id": "BE.NMBS.008845203",
			"locationX": "5.873578",
			"locationY": "50.368214",
			"@id": "http://irail.be/stations/NMBS/008845203",
			"standardname": "Trois-Ponts",
			"name": "Trois-Ponts"
		},
		{
			"id": "BE.NMBS.008845229",
			"locationX": "5.880473",
			"locationY": "50.391127",
			"@id": "http://irail.be/stations/NMBS/008845229",
			"standardname": "Coo",
			"name": "Coo"
		},
		{
			"id": "BE.NMBS.008846201",
			"locationX": "5.692544",
			"locationY": "50.73776",
			"@id": "http://irail.be/stations/NMBS/008846201",
			"standardname": "Visé",
			"name": "Visé"
		},
		{
			"id": "BE.NMBS.008861119",
			"locationX": "4.82842",
			"locationY": "50.457737",
			"@id": "http://irail.be/stations/NMBS/008861119",
			"standardname": "Ronet",
			"name": "Ronet"
		},
		{
			"id": "BE.NMBS.008861127",
			"locationX": "4.806298",
			"locationY": "50.456236",
			"@id": "http://irail.be/stations/NMBS/008861127",
			"standardname": "Flawinne",
			"name": "Flawinne"
		},
		{
			"id": "BE.NMBS.008861135",
			"locationX": "4.762368",
			"locationY": "50.443328",
			"@id": "http://irail.be/stations/NMBS/008861135",
			"standardname": "Floreffe",
			"name": "Floreffe"
		},
		{
			"id": "BE.NMBS.008861143",
			"locationX": "4.733548",
			"locationY": "50.439543",
			"@id": "http://irail.be/stations/NMBS/008861143",
			"standardname": "Franière",
			"name": "Franière"
		},
		{
			"id": "BE.NMBS.008861150",
			"locationX": "4.693807",
			"locationY": "50.452748",
			"@id": "http://irail.be/stations/NMBS/008861150",
			"standardname": "Moustier",
			"name": "Moustier"
		},
		{
			"id": "BE.NMBS.008861168",
			"locationX": "4.669392",
			"locationY": "50.45255",
			"@id": "http://irail.be/stations/NMBS/008861168",
			"standardname": "Ham-sur-Sambre",
			"name": "Ham-sur-Sambre"
		},
		{
			"id": "BE.NMBS.008861200",
			"locationX": "4.691497",
			"locationY": "50.570489",
			"@id": "http://irail.be/stations/NMBS/008861200",
			"standardname": "Gembloux",
			"name": "Gembloux"
		},
		{
			"id": "BE.NMBS.008861317",
			"locationX": "4.697627",
			"locationY": "50.557374",
			"@id": "http://irail.be/stations/NMBS/008861317",
			"standardname": "Chapelle-Dieu",
			"name": "Chapelle-Dieu"
		},
		{
			"id": "BE.NMBS.008861333",
			"locationX": "4.675829",
			"locationY": "50.513497",
			"@id": "http://irail.be/stations/NMBS/008861333",
			"standardname": "Mazy",
			"name": "Mazy"
		},
		{
			"id": "BE.NMBS.008861416",
			"locationX": "4.7201",
			"locationY": "50.551935",
			"@id": "http://irail.be/stations/NMBS/008861416",
			"standardname": "Lonzée",
			"name": "Lonzée"
		},
		{
			"id": "BE.NMBS.008861424",
			"locationX": "4.748533",
			"locationY": "50.534208",
			"@id": "http://irail.be/stations/NMBS/008861424",
			"standardname": "Beuzet",
			"name": "Beuzet"
		},
		{
			"id": "BE.NMBS.008861432",
			"locationX": "4.767788",
			"locationY": "50.5213",
			"@id": "http://irail.be/stations/NMBS/008861432",
			"standardname": "Saint-Denis-Bovesse",
			"name": "Saint-Denis-Bovesse"
		},
		{
			"id": "BE.NMBS.008861440",
			"locationX": "4.801866",
			"locationY": "50.499348",
			"@id": "http://irail.be/stations/NMBS/008861440",
			"standardname": "Rhisnes",
			"name": "Rhisnes"
		},
		{
			"id": "BE.NMBS.008861515",
			"locationX": "4.668538",
			"locationY": "50.590823",
			"@id": "http://irail.be/stations/NMBS/008861515",
			"standardname": "Ernage",
			"name": "Ernage"
		},
		{
			"id": "BE.NMBS.008861523",
			"locationX": "4.648888",
			"locationY": "50.608819",
			"@id": "http://irail.be/stations/NMBS/008861523",
			"standardname": "Chastre",
			"name": "Chastre"
		},
		{
			"id": "BE.NMBS.008861531",
			"locationX": "4.636393",
			"locationY": "50.619453",
			"@id": "http://irail.be/stations/NMBS/008861531",
			"standardname": "Blanmont",
			"name": "Blanmont"
		},
		{
			"id": "BE.NMBS.008861549",
			"locationX": "4.613884",
			"locationY": "50.637611",
			"@id": "http://irail.be/stations/NMBS/008861549",
			"standardname": "Mont-Saint-Guibert",
			"name": "Mont-Saint-Guibert"
		},
		{
			"id": "BE.NMBS.008862018",
			"locationX": "5.769115",
			"locationY": "49.690939",
			"@id": "http://irail.be/stations/NMBS/008862018",
			"standardname": "Stockem",
			"name": "Stockem"
		},
		{
			"id": "BE.NMBS.008863008",
			"locationX": "4.86222",
			"locationY": "50.468794",
			"@id": "http://irail.be/stations/NMBS/008863008",
			"standardname": "Namur",
			"name": "Namur"
		},
		{
			"id": "BE.NMBS.008863115",
			"locationX": "4.876144",
			"locationY": "50.454843",
			"@id": "http://irail.be/stations/NMBS/008863115",
			"standardname": "Jambes",
			"name": "Jambes"
		},
		{
			"id": "BE.NMBS.008863156",
			"locationX": "4.877071380615234",
			"locationY": "50.369000316323856",
			"@id": "http://irail.be/stations/NMBS/008863156",
			"standardname": "Lustin",
			"name": "Lustin"
		},
		{
			"id": "BE.NMBS.008863354",
			"locationX": "4.880261",
			"locationY": "50.454798",
			"@id": "http://irail.be/stations/NMBS/008863354",
			"standardname": "Jambes-Est",
			"name": "Jambes-Est"
		},
		{
			"id": "BE.NMBS.008863362",
			"locationX": "4.884414",
			"locationY": "50.429098",
			"@id": "http://irail.be/stations/NMBS/008863362",
			"standardname": "Dave-Saint-Martin",
			"name": "Dave-Saint-Martin"
		},
		{
			"id": "BE.NMBS.008863404",
			"locationX": "5.094699",
			"locationY": "50.496759",
			"@id": "http://irail.be/stations/NMBS/008863404",
			"standardname": "Andenne",
			"name": "Andenne"
		},
		{
			"id": "BE.NMBS.008863438",
			"locationX": "5.081745",
			"locationY": "50.497209",
			"@id": "http://irail.be/stations/NMBS/008863438",
			"standardname": "Château-de-Seilles",
			"name": "Château-de-Seilles"
		},
		{
			"id": "BE.NMBS.008863446",
			"locationX": "5.026363",
			"locationY": "50.492247",
			"@id": "http://irail.be/stations/NMBS/008863446",
			"standardname": "Sclaigneaux",
			"name": "Sclaigneaux"
		},
		{
			"id": "BE.NMBS.008863453",
			"locationX": "4.997939",
			"locationY": "50.47043",
			"@id": "http://irail.be/stations/NMBS/008863453",
			"standardname": "Namêche",
			"name": "Namêche"
		},
		{
			"id": "BE.NMBS.008863461",
			"locationX": "4.96458",
			"locationY": "50.480741",
			"@id": "http://irail.be/stations/NMBS/008863461",
			"standardname": "Marche-les-Dames",
			"name": "Marche-les-Dames"
		},
		{
			"id": "BE.NMBS.008863503",
			"locationX": "4.908182",
			"locationY": "50.260721",
			"@id": "http://irail.be/stations/NMBS/008863503",
			"standardname": "Dinant",
			"name": "Dinant"
		},
		{
			"id": "BE.NMBS.008863545",
			"locationX": "4.878643",
			"locationY": "50.32084",
			"@id": "http://irail.be/stations/NMBS/008863545",
			"standardname": "Yvoir",
			"name": "Yvoir"
		},
		{
			"id": "BE.NMBS.008863560",
			"locationX": "4.86996",
			"locationY": "50.348914",
			"@id": "http://irail.be/stations/NMBS/008863560",
			"standardname": "Godinne",
			"name": "Godinne"
		},
		{
			"id": "BE.NMBS.008863818",
			"locationX": "4.90553",
			"locationY": "50.238023",
			"@id": "http://irail.be/stations/NMBS/008863818",
			"standardname": "Anseremme",
			"name": "Anseremme"
		},
		{
			"id": "BE.NMBS.008863834",
			"locationX": "4.964607",
			"locationY": "50.211235",
			"@id": "http://irail.be/stations/NMBS/008863834",
			"standardname": "Gendron-Celles",
			"name": "Gendron-Celles"
		},
		{
			"id": "BE.NMBS.008863842",
			"locationX": "5.006074",
			"locationY": "50.189868",
			"@id": "http://irail.be/stations/NMBS/008863842",
			"standardname": "Houyet",
			"name": "Houyet"
		},
		{
			"id": "BE.NMBS.008863867",
			"locationX": "4.95684",
			"locationY": "50.11443",
			"@id": "http://irail.be/stations/NMBS/008863867",
			"standardname": "Beauraing",
			"name": "Beauraing"
		},
		{
			"id": "BE.NMBS.008864006",
			"locationX": "5.266698",
			"locationY": "50.160401",
			"@id": "http://irail.be/stations/NMBS/008864006",
			"standardname": "Rochefort-Jemelle",
			"name": "Rochefort-Jemelle"
		},
		{
			"id": "BE.NMBS.008864311",
			"locationX": "5.276784",
			"locationY": "50.132759",
			"@id": "http://irail.be/stations/NMBS/008864311",
			"standardname": "Forrières",
			"name": "Forrières"
		},
		{
			"id": "BE.NMBS.008864337",
			"locationX": "5.280524",
			"locationY": "50.0906",
			"@id": "http://irail.be/stations/NMBS/008864337",
			"standardname": "Grupont",
			"name": "Grupont"
		},
		{
			"id": "BE.NMBS.008864345",
			"locationX": "5.313892",
			"locationY": "50.202821",
			"@id": "http://irail.be/stations/NMBS/008864345",
			"standardname": "Marloie",
			"name": "Marloie"
		},
		{
			"id": "BE.NMBS.008864352",
			"locationX": "5.301091",
			"locationY": "50.224135",
			"@id": "http://irail.be/stations/NMBS/008864352",
			"standardname": "Aye",
			"name": "Aye"
		},
		{
			"id": "BE.NMBS.008864410",
			"locationX": "5.346289",
			"locationY": "50.222472",
			"@id": "http://irail.be/stations/NMBS/008864410",
			"standardname": "Marche-en-Famenne",
			"name": "Marche-en-Famenne"
		},
		{
			"id": "BE.NMBS.008864436",
			"locationX": "5.440136",
			"locationY": "50.28367",
			"@id": "http://irail.be/stations/NMBS/008864436",
			"standardname": "Melreux-Hotton",
			"name": "Melreux-Hotton"
		},
		{
			"id": "BE.NMBS.008864451",
			"locationX": "5.501542",
			"locationY": "50.349417",
			"@id": "http://irail.be/stations/NMBS/008864451",
			"standardname": "Barvaux",
			"name": "Barvaux"
		},
		{
			"id": "BE.NMBS.008864469",
			"locationX": "5.519304",
			"locationY": "50.376798",
			"@id": "http://irail.be/stations/NMBS/008864469",
			"standardname": "Bomal",
			"name": "Bomal"
		},
		{
			"id": "BE.NMBS.008864501",
			"locationX": "5.091409",
			"locationY": "50.29105",
			"@id": "http://irail.be/stations/NMBS/008864501",
			"standardname": "Ciney",
			"name": "Ciney"
		},
		{
			"id": "BE.NMBS.008864816",
			"locationX": "5.107778",
			"locationY": "50.267768",
			"@id": "http://irail.be/stations/NMBS/008864816",
			"standardname": "Leignon",
			"name": "Leignon"
		},
		{
			"id": "BE.NMBS.008864824",
			"locationX": "5.124255",
			"locationY": "50.262366",
			"@id": "http://irail.be/stations/NMBS/008864824",
			"standardname": "Chapois",
			"name": "Chapois"
		},
		{
			"id": "BE.NMBS.008864832",
			"locationX": "5.194371",
			"locationY": "50.249044",
			"@id": "http://irail.be/stations/NMBS/008864832",
			"standardname": "Haversin",
			"name": "Haversin"
		},
		{
			"id": "BE.NMBS.008864915",
			"locationX": "5.06116",
			"locationY": "50.343296",
			"@id": "http://irail.be/stations/NMBS/008864915",
			"standardname": "Natoye",
			"name": "Natoye"
		},
		{
			"id": "BE.NMBS.008864923",
			"locationX": "5.056099",
			"locationY": "50.357786",
			"@id": "http://irail.be/stations/NMBS/008864923",
			"standardname": "Florée",
			"name": "Florée"
		},
		{
			"id": "BE.NMBS.008864931",
			"locationX": "5.022839",
			"locationY": "50.368133",
			"@id": "http://irail.be/stations/NMBS/008864931",
			"standardname": "Assesse",
			"name": "Assesse"
		},
		{
			"id": "BE.NMBS.008864949",
			"locationX": "4.996051",
			"locationY": "50.387442",
			"@id": "http://irail.be/stations/NMBS/008864949",
			"standardname": "Courrière",
			"name": "Courrière"
		},
		{
			"id": "BE.NMBS.008864956",
			"locationX": "4.949739",
			"locationY": "50.406373",
			"@id": "http://irail.be/stations/NMBS/008864956",
			"standardname": "Sart-Bernard",
			"name": "Sart-Bernard"
		},
		{
			"id": "BE.NMBS.008864964",
			"locationX": "4.929756",
			"locationY": "50.419695",
			"@id": "http://irail.be/stations/NMBS/008864964",
			"standardname": "Naninne",
			"name": "Naninne"
		},
		{
			"id": "BE.NMBS.008865003",
			"locationX": "5.37927",
			"locationY": "49.920434",
			"@id": "http://irail.be/stations/NMBS/008865003",
			"standardname": "Libramont",
			"name": "Libramont"
		},
		{
			"id": "BE.NMBS.008865110",
			"locationX": "5.709858",
			"locationY": "49.999737",
			"@id": "http://irail.be/stations/NMBS/008865110",
			"standardname": "Bastogne-Sud",
			"name": "Bastogne-Sud"
		},
		{
			"id": "BE.NMBS.008865128",
			"locationX": "5.720744",
			"locationY": "50.006919",
			"@id": "http://irail.be/stations/NMBS/008865128",
			"standardname": "Bastogne-Nord",
			"name": "Bastogne-Nord"
		},
		{
			"id": "BE.NMBS.008865227",
			"locationX": "5.292641",
			"locationY": "50.019504",
			"@id": "http://irail.be/stations/NMBS/008865227",
			"standardname": "Poix-Saint-Hubert",
			"name": "Poix-Saint-Hubert"
		},
		{
			"id": "BE.NMBS.008865300",
			"locationX": "5.267193",
			"locationY": "49.852835",
			"@id": "http://irail.be/stations/NMBS/008865300",
			"standardname": "Bertrix",
			"name": "Bertrix"
		},
		{
			"id": "BE.NMBS.008865540",
			"locationX": "5.118349",
			"locationY": "49.895408",
			"@id": "http://irail.be/stations/NMBS/008865540",
			"standardname": "Paliseul",
			"name": "Paliseul"
		},
		{
			"id": "BE.NMBS.008865565",
			"locationX": "5.092784",
			"locationY": "49.905458",
			"@id": "http://irail.be/stations/NMBS/008865565",
			"standardname": "Carlsbourg",
			"name": "Carlsbourg"
		},
		{
			"id": "BE.NMBS.008865615",
			"locationX": "5.043047",
			"locationY": "49.934134",
			"@id": "http://irail.be/stations/NMBS/008865615",
			"standardname": "Graide",
			"name": "Graide"
		},
		{
			"id": "BE.NMBS.008865649",
			"locationX": "4.978073",
			"locationY": "49.984123",
			"@id": "http://irail.be/stations/NMBS/008865649",
			"standardname": "Gedinne",
			"name": "Gedinne"
		},
		{
			"id": "BE.NMBS.008866001",
			"locationX": "5.809971",
			"locationY": "49.68053",
			"@id": "http://irail.be/stations/NMBS/008866001",
			"standardname": "Arlon",
			"name": "Arlon"
		},
		{
			"id": "BE.NMBS.008866118",
			"locationX": "5.786527",
			"locationY": "49.688243",
			"@id": "http://irail.be/stations/NMBS/008866118",
			"standardname": "Viville",
			"name": "Viville"
		},
		{
			"id": "BE.NMBS.008866142",
			"locationX": "5.632685",
			"locationY": "49.718249",
			"@id": "http://irail.be/stations/NMBS/008866142",
			"standardname": "Habay",
			"name": "Habay"
		},
		{
			"id": "BE.NMBS.008866175",
			"locationX": "5.539755",
			"locationY": "49.727337",
			"@id": "http://irail.be/stations/NMBS/008866175",
			"standardname": "Marbehan",
			"name": "Marbehan"
		},
		{
			"id": "BE.NMBS.008866258",
			"locationX": "5.452559",
			"locationY": "49.854318",
			"@id": "http://irail.be/stations/NMBS/008866258",
			"standardname": "Neufchâteau",
			"name": "Neufchâteau"
		},
		{
			"id": "BE.NMBS.008866407",
			"locationX": "5.519125",
			"locationY": "49.560821",
			"@id": "http://irail.be/stations/NMBS/008866407",
			"standardname": "Virton",
			"name": "Virton"
		},
		{
			"id": "BE.NMBS.008866530",
			"locationX": "5.741347",
			"locationY": "49.5562",
			"@id": "http://irail.be/stations/NMBS/008866530",
			"standardname": "Halanzy",
			"name": "Halanzy"
		},
		{
			"id": "BE.NMBS.008866605",
			"locationX": "5.828947",
			"locationY": "49.563346",
			"@id": "http://irail.be/stations/NMBS/008866605",
			"standardname": "Athus",
			"name": "Athus"
		},
		{
			"id": "BE.NMBS.008866654",
			"locationX": "5.79806",
			"locationY": "49.564093",
			"@id": "http://irail.be/stations/NMBS/008866654",
			"standardname": "Aubange",
			"name": "Aubange"
		},
		{
			"id": "BE.NMBS.008866662",
			"locationX": "5.818915",
			"locationY": "49.592777",
			"@id": "http://irail.be/stations/NMBS/008866662",
			"standardname": "Messancy",
			"name": "Messancy"
		},
		{
			"id": "BE.NMBS.008866845",
			"locationX": "5.331115",
			"locationY": "49.706967",
			"@id": "http://irail.be/stations/NMBS/008866845",
			"standardname": "Florenville",
			"name": "Florenville"
		},
		{
			"id": "BE.NMBS.008871100",
			"locationX": "4.394223",
			"locationY": "50.412171",
			"@id": "http://irail.be/stations/NMBS/008871100",
			"standardname": "Marchienne-au-Pont",
			"name": "Marchienne-au-Pont"
		},
		{
			"id": "BE.NMBS.008871175",
			"locationX": "4.411294",
			"locationY": "50.352896",
			"@id": "http://irail.be/stations/NMBS/008871175",
			"standardname": "Jamioulx",
			"name": "Jamioulx"
		},
		{
			"id": "BE.NMBS.008871183",
			"locationX": "4.406305",
			"locationY": "50.333893",
			"@id": "http://irail.be/stations/NMBS/008871183",
			"standardname": "Beignée",
			"name": "Beignée"
		},
		{
			"id": "BE.NMBS.008871217",
			"locationX": "4.393199",
			"locationY": "50.443112",
			"@id": "http://irail.be/stations/NMBS/008871217",
			"standardname": "Roux",
			"name": "Roux"
		},
		{
			"id": "BE.NMBS.008871225",
			"locationX": "4.400534",
			"locationY": "50.462007",
			"@id": "http://irail.be/stations/NMBS/008871225",
			"standardname": "Courcelles-Motte",
			"name": "Courcelles-Motte"
		},
		{
			"id": "BE.NMBS.008871308",
			"locationX": "4.38412",
			"locationY": "50.505856",
			"@id": "http://irail.be/stations/NMBS/008871308",
			"standardname": "Luttre",
			"name": "Luttre"
		},
		{
			"id": "BE.NMBS.008871332",
			"locationX": "4.36357",
			"locationY": "50.535206",
			"@id": "http://irail.be/stations/NMBS/008871332",
			"standardname": "Obaix-Buzet",
			"name": "Obaix-Buzet"
		},
		{
			"id": "BE.NMBS.008871365",
			"locationX": "4.355291",
			"locationY": "50.513812",
			"@id": "http://irail.be/stations/NMBS/008871365",
			"standardname": "Pont-à-Celles",
			"name": "Pont-à-Celles"
		},
		{
			"id": "BE.NMBS.008871373",
			"locationX": "4.325123",
			"locationY": "50.497065",
			"@id": "http://irail.be/stations/NMBS/008871373",
			"standardname": "Gouy-lez-Pieton",
			"name": "Gouy-lez-Pieton"
		},
		{
			"id": "BE.NMBS.008871381",
			"locationX": "4.290308",
			"locationY": "50.492795",
			"@id": "http://irail.be/stations/NMBS/008871381",
			"standardname": "Godarville",
			"name": "Godarville"
		},
		{
			"id": "BE.NMBS.008871415",
			"locationX": "4.288438",
			"locationY": "50.434959",
			"@id": "http://irail.be/stations/NMBS/008871415",
			"standardname": "Piéton",
			"name": "Piéton"
		},
		{
			"id": "BE.NMBS.008871514",
			"locationX": "4.325384",
			"locationY": "50.433314",
			"@id": "http://irail.be/stations/NMBS/008871514",
			"standardname": "Forchies",
			"name": "Forchies"
		},
		{
			"id": "BE.NMBS.008871605",
			"locationX": "4.113562",
			"locationY": "50.304192",
			"@id": "http://irail.be/stations/NMBS/008871605",
			"standardname": "Erquelinnes",
			"name": "Erquelinnes"
		},
		{
			"id": "BE.NMBS.008871647",
			"locationX": "4.132314",
			"locationY": "50.310179",
			"@id": "http://irail.be/stations/NMBS/008871647",
			"standardname": "Erquelinnes-Village",
			"name": "Erquelinnes-Village"
		},
		{
			"id": "BE.NMBS.008871662",
			"locationX": "4.158427",
			"locationY": "50.312642",
			"@id": "http://irail.be/stations/NMBS/008871662",
			"standardname": "Solre-sur-Sambre",
			"name": "Solre-sur-Sambre"
		},
		{
			"id": "BE.NMBS.008871670",
			"locationX": "4.186833",
			"locationY": "50.316328",
			"@id": "http://irail.be/stations/NMBS/008871670",
			"standardname": "Labuissière",
			"name": "Labuissière"
		},
		{
			"id": "BE.NMBS.008871688",
			"locationX": "4.212785",
			"locationY": "50.321164",
			"@id": "http://irail.be/stations/NMBS/008871688",
			"standardname": "Fontaine-Valmont",
			"name": "Fontaine-Valmont"
		},
		{
			"id": "BE.NMBS.008871712",
			"locationX": "4.260958",
			"locationY": "50.346469",
			"@id": "http://irail.be/stations/NMBS/008871712",
			"standardname": "Lobbes",
			"name": "Lobbes"
		},
		{
			"id": "BE.NMBS.008871811",
			"locationX": "4.288906",
			"locationY": "50.342738",
			"@id": "http://irail.be/stations/NMBS/008871811",
			"standardname": "Thuin",
			"name": "Thuin"
		},
		{
			"id": "BE.NMBS.008871829",
			"locationX": "4.308736",
			"locationY": "50.363692",
			"@id": "http://irail.be/stations/NMBS/008871829",
			"standardname": "Hourpes",
			"name": "Hourpes"
		},
		{
			"id": "BE.NMBS.008871837",
			"locationX": "4.350976",
			"locationY": "50.377311",
			"@id": "http://irail.be/stations/NMBS/008871837",
			"standardname": "Landelies",
			"name": "Landelies"
		},
		{
			"id": "BE.NMBS.008871852",
			"locationX": "4.388767",
			"locationY": "50.397465",
			"@id": "http://irail.be/stations/NMBS/008871852",
			"standardname": "Marchienne-Zone",
			"name": "Marchienne-Zone"
		},
		{
			"id": "BE.NMBS.008872009",
			"locationX": "4.438567",
			"locationY": "50.40471",
			"@id": "http://irail.be/stations/NMBS/008872009",
			"standardname": "Charleroi-Sud",
			"name": "Charleroi-Sud"
		},
		{
			"id": "BE.NMBS.008872066",
			"locationX": "4.436653",
			"locationY": "50.410948",
			"@id": "http://irail.be/stations/NMBS/008872066",
			"standardname": "Charleroi-Ouest",
			"name": "Charleroi-Ouest"
		},
		{
			"id": "BE.NMBS.008872306",
			"locationX": "4.462946",
			"locationY": "50.432451",
			"@id": "http://irail.be/stations/NMBS/008872306",
			"standardname": "Lodelinsart",
			"name": "Lodelinsart"
		},
		{
			"id": "BE.NMBS.008872413",
			"locationX": "4.543741",
			"locationY": "50.481927",
			"@id": "http://irail.be/stations/NMBS/008872413",
			"standardname": "Fleurus",
			"name": "Fleurus"
		},
		{
			"id": "BE.NMBS.008872520",
			"locationX": "4.566133",
			"locationY": "50.511726",
			"@id": "http://irail.be/stations/NMBS/008872520",
			"standardname": "Ligny",
			"name": "Ligny"
		},
		{
			"id": "BE.NMBS.008872553",
			"locationX": "4.552676",
			"locationY": "50.558084",
			"@id": "http://irail.be/stations/NMBS/008872553",
			"standardname": "Tilly",
			"name": "Tilly"
		},
		{
			"id": "BE.NMBS.008872579",
			"locationX": "4.533349",
			"locationY": "50.578103",
			"@id": "http://irail.be/stations/NMBS/008872579",
			"standardname": "Villers-la-Ville",
			"name": "Villers-la-Ville"
		},
		{
			"id": "BE.NMBS.008872587",
			"locationX": "4.539157",
			"locationY": "50.610338",
			"@id": "http://irail.be/stations/NMBS/008872587",
			"standardname": "La Roche (Brabant)",
			"name": "La Roche (Brabant)"
		},
		{
			"id": "BE.NMBS.008872611",
			"locationX": "4.54926",
			"locationY": "50.621826",
			"@id": "http://irail.be/stations/NMBS/008872611",
			"standardname": "Faux",
			"name": "Faux"
		},
		{
			"id": "BE.NMBS.008873007",
			"locationX": "4.435879",
			"locationY": "50.259219",
			"@id": "http://irail.be/stations/NMBS/008873007",
			"standardname": "Walcourt",
			"name": "Walcourt"
		},
		{
			"id": "BE.NMBS.008873122",
			"locationX": "4.535956",
			"locationY": "50.191639",
			"@id": "http://irail.be/stations/NMBS/008873122",
			"standardname": "Philippeville",
			"name": "Philippeville"
		},
		{
			"id": "BE.NMBS.008873239",
			"locationX": "4.492709",
			"locationY": "50.237133",
			"@id": "http://irail.be/stations/NMBS/008873239",
			"standardname": "Yves-Gomezée",
			"name": "Yves-Gomezée"
		},
		{
			"id": "BE.NMBS.008873312",
			"locationX": "4.428805",
			"locationY": "50.269278",
			"@id": "http://irail.be/stations/NMBS/008873312",
			"standardname": "Pry",
			"name": "Pry"
		},
		{
			"id": "BE.NMBS.008873320",
			"locationX": "4.405909",
			"locationY": "50.285603",
			"@id": "http://irail.be/stations/NMBS/008873320",
			"standardname": "Berzée",
			"name": "Berzée"
		},
		{
			"id": "BE.NMBS.008873379",
			"locationX": "4.391491",
			"locationY": "50.300138",
			"@id": "http://irail.be/stations/NMBS/008873379",
			"standardname": "Cour-sur-Heure",
			"name": "Cour-sur-Heure"
		},
		{
			"id": "BE.NMBS.008873387",
			"locationX": "4.404696",
			"locationY": "50.319555",
			"@id": "http://irail.be/stations/NMBS/008873387",
			"standardname": "Ham-sur-Heure",
			"name": "Ham-sur-Heure"
		},
		{
			"id": "BE.NMBS.008874005",
			"locationX": "4.521861",
			"locationY": "50.410103",
			"@id": "http://irail.be/stations/NMBS/008874005",
			"standardname": "Châtelet",
			"name": "Châtelet"
		},
		{
			"id": "BE.NMBS.008874054",
			"locationX": "4.46851",
			"locationY": "50.392718",
			"@id": "http://irail.be/stations/NMBS/008874054",
			"standardname": "Couillet",
			"name": "Couillet"
		},
		{
			"id": "BE.NMBS.008874559",
			"locationX": "4.552586",
			"locationY": "50.428936",
			"@id": "http://irail.be/stations/NMBS/008874559",
			"standardname": "Le Campinaire",
			"name": "Le Campinaire"
		},
		{
			"id": "BE.NMBS.008874567",
			"locationX": "4.564138",
			"locationY": "50.435246",
			"@id": "http://irail.be/stations/NMBS/008874567",
			"standardname": "Farciennes",
			"name": "Farciennes"
		},
		{
			"id": "BE.NMBS.008874583",
			"locationX": "4.584552",
			"locationY": "50.429529",
			"@id": "http://irail.be/stations/NMBS/008874583",
			"standardname": "Aiseau",
			"name": "Aiseau"
		},
		{
			"id": "BE.NMBS.008874609",
			"locationX": "4.608823",
			"locationY": "50.432235",
			"@id": "http://irail.be/stations/NMBS/008874609",
			"standardname": "Tamines",
			"name": "Tamines"
		},
		{
			"id": "BE.NMBS.008874716",
			"locationX": "4.630532",
			"locationY": "50.449197",
			"@id": "http://irail.be/stations/NMBS/008874716",
			"standardname": "Auvelais",
			"name": "Auvelais"
		},
		{
			"id": "BE.NMBS.008874724",
			"locationX": "4.662632",
			"locationY": "50.45095",
			"@id": "http://irail.be/stations/NMBS/008874724",
			"standardname": "Jemeppe-sur-Sambre",
			"name": "Jemeppe-sur-Sambre"
		},
		{
			"id": "BE.NMBS.008875002",
			"locationX": "4.525691",
			"locationY": "50.09549",
			"@id": "http://irail.be/stations/NMBS/008875002",
			"standardname": "Mariembourg",
			"name": "Mariembourg"
		},
		{
			"id": "BE.NMBS.008875127",
			"locationX": "4.491702",
			"locationY": "50.056324",
			"@id": "http://irail.be/stations/NMBS/008875127",
			"standardname": "Couvin",
			"name": "Couvin"
		},
		{
			"id": "BE.NMBS.008881000",
			"locationX": "3.942542",
			"locationY": "50.453854",
			"@id": "http://irail.be/stations/NMBS/008881000",
			"standardname": "Mons",
			"name": "Mons"
		},
		{
			"id": "BE.NMBS.008881125",
			"locationX": "3.906343",
			"locationY": "50.487411",
			"@id": "http://irail.be/stations/NMBS/008881125",
			"standardname": "Ghlin",
			"name": "Ghlin"
		},
		{
			"id": "BE.NMBS.008881158",
			"locationX": "3.887987",
			"locationY": "50.507025",
			"@id": "http://irail.be/stations/NMBS/008881158",
			"name": "Erbisoeul",
			"standardname": "Erbisœul"
		},
		{
			"id": "BE.NMBS.008881166",
			"locationX": "3.910694",
			"locationY": "50.530496",
			"@id": "http://irail.be/stations/NMBS/008881166",
			"standardname": "Jurbeke",
			"name": "Jurbeke"
		},
		{
			"id": "BE.NMBS.008881174",
			"locationX": "3.962139",
			"locationY": "50.536546",
			"@id": "http://irail.be/stations/NMBS/008881174",
			"standardname": "Masnuy-Saint-Pierre",
			"name": "Masnuy-Saint-Pierre"
		},
		{
			"id": "BE.NMBS.008881190",
			"locationX": "3.903224",
			"locationY": "50.559342",
			"@id": "http://irail.be/stations/NMBS/008881190",
			"standardname": "Lens",
			"name": "Lens"
		},
		{
			"id": "BE.NMBS.008881315",
			"locationX": "3.956089",
			"locationY": "50.471644",
			"@id": "http://irail.be/stations/NMBS/008881315",
			"standardname": "Nimy",
			"name": "Nimy"
		},
		{
			"id": "BE.NMBS.008881406",
			"locationX": "4.007804",
			"locationY": "50.469873",
			"@id": "http://irail.be/stations/NMBS/008881406",
			"standardname": "Obourg",
			"name": "Obourg"
		},
		{
			"id": "BE.NMBS.008881430",
			"locationX": "4.059987",
			"locationY": "50.470754",
			"@id": "http://irail.be/stations/NMBS/008881430",
			"standardname": "Havre",
			"name": "Havre"
		},
		{
			"id": "BE.NMBS.008881455",
			"locationX": "4.098523",
			"locationY": "50.46954",
			"@id": "http://irail.be/stations/NMBS/008881455",
			"standardname": "Thieu",
			"name": "Thieu"
		},
		{
			"id": "BE.NMBS.008881463",
			"locationX": "4.126345",
			"locationY": "50.474457",
			"@id": "http://irail.be/stations/NMBS/008881463",
			"standardname": "Bracquegnies",
			"name": "Bracquegnies"
		},
		{
			"id": "BE.NMBS.008881505",
			"locationX": "3.909489",
			"locationY": "50.341534",
			"@id": "http://irail.be/stations/NMBS/008881505",
			"standardname": "Quevy",
			"name": "Quevy"
		},
		{
			"id": "BE.NMBS.008881562",
			"locationX": "3.911638",
			"locationY": "50.390642",
			"@id": "http://irail.be/stations/NMBS/008881562",
			"standardname": "Genly",
			"name": "Genly"
		},
		{
			"id": "BE.NMBS.008881570",
			"locationX": "3.906586",
			"locationY": "50.405932",
			"@id": "http://irail.be/stations/NMBS/008881570",
			"standardname": "Frameries",
			"name": "Frameries"
		},
		{
			"id": "BE.NMBS.008882107",
			"locationX": "4.179858",
			"locationY": "50.478161",
			"@id": "http://irail.be/stations/NMBS/008882107",
			"standardname": "La Louvière-Centre",
			"name": "La Louvière-Centre"
		},
		{
			"id": "BE.NMBS.008882206",
			"locationX": "4.190609",
			"locationY": "50.464974",
			"@id": "http://irail.be/stations/NMBS/008882206",
			"standardname": "La Louvière-Sud",
			"name": "La Louvière-Sud"
		},
		{
			"id": "BE.NMBS.008882230",
			"locationX": "4.247367",
			"locationY": "50.457998",
			"@id": "http://irail.be/stations/NMBS/008882230",
			"standardname": "Morlanwelz",
			"name": "Morlanwelz"
		},
		{
			"id": "BE.NMBS.008882248",
			"locationX": "4.263826",
			"locationY": "50.447957",
			"@id": "http://irail.be/stations/NMBS/008882248",
			"standardname": "Carnieres",
			"name": "Carnieres"
		},
		{
			"id": "BE.NMBS.008882339",
			"locationX": "4.211041",
			"locationY": "50.430797",
			"@id": "http://irail.be/stations/NMBS/008882339",
			"standardname": "Leval",
			"name": "Leval"
		},
		{
			"id": "BE.NMBS.008882362",
			"locationX": "4.172451",
			"locationY": "50.408764",
			"@id": "http://irail.be/stations/NMBS/008882362",
			"standardname": "Binche",
			"name": "Binche"
		},
		{
			"id": "BE.NMBS.008882701",
			"locationX": "4.234683",
			"locationY": "50.506108",
			"@id": "http://irail.be/stations/NMBS/008882701",
			"standardname": "Manage",
			"name": "Manage"
		},
		{
			"id": "BE.NMBS.008883006",
			"locationX": "4.137662",
			"locationY": "50.605079",
			"@id": "http://irail.be/stations/NMBS/008883006",
			"standardname": "Braine-le-Comte",
			"name": "Braine-le-Comte"
		},
		{
			"id": "BE.NMBS.008883022",
			"locationX": "4.175893",
			"locationY": "50.651005",
			"@id": "http://irail.be/stations/NMBS/008883022",
			"standardname": "Hennuyères",
			"name": "Hennuyères"
		},
		{
			"id": "BE.NMBS.008883113",
			"locationX": "4.067519",
			"locationY": "50.572763",
			"@id": "http://irail.be/stations/NMBS/008883113",
			"standardname": "Soignies",
			"name": "Soignies"
		},
		{
			"id": "BE.NMBS.008883121",
			"locationX": "4.010672",
			"locationY": "50.543602",
			"@id": "http://irail.be/stations/NMBS/008883121",
			"standardname": "Neufvilles",
			"name": "Neufvilles"
		},
		{
			"id": "BE.NMBS.008883212",
			"locationX": "4.156639",
			"locationY": "50.56239",
			"@id": "http://irail.be/stations/NMBS/008883212",
			"standardname": "Écaussinnes",
			"name": "Écaussinnes"
		},
		{
			"id": "BE.NMBS.008883220",
			"locationX": "4.177098",
			"locationY": "50.546173",
			"@id": "http://irail.be/stations/NMBS/008883220",
			"standardname": "Marche-lez-Écaussinnes",
			"name": "Marche-lez-Écaussinnes"
		},
		{
			"id": "BE.NMBS.008883238",
			"locationX": "4.211581",
			"locationY": "50.519358",
			"@id": "http://irail.be/stations/NMBS/008883238",
			"standardname": "Familleureux",
			"name": "Familleureux"
		},
		{
			"id": "BE.NMBS.008883311",
			"locationX": "4.047357",
			"locationY": "50.697273",
			"@id": "http://irail.be/stations/NMBS/008883311",
			"standardname": "Enghien",
			"name": "Enghien"
		},
		{
			"id": "BE.NMBS.008883436",
			"locationX": "3.935863",
			"locationY": "50.662386",
			"@id": "http://irail.be/stations/NMBS/008883436",
			"standardname": "Silly",
			"name": "Silly"
		},
		{
			"id": "BE.NMBS.008883808",
			"locationX": "4.205729",
			"locationY": "50.691708",
			"@id": "http://irail.be/stations/NMBS/008883808",
			"standardname": "Tubize",
			"name": "Tubize"
		},
		{
			"id": "BE.NMBS.008884004",
			"locationX": "3.820253",
			"locationY": "50.44286",
			"@id": "http://irail.be/stations/NMBS/008884004",
			"standardname": "Saint-Ghislain",
			"name": "Saint-Ghislain"
		},
		{
			"id": "BE.NMBS.008884319",
			"locationX": "3.797025",
			"locationY": "50.436388",
			"@id": "http://irail.be/stations/NMBS/008884319",
			"standardname": "Boussu",
			"name": "Boussu"
		},
		{
			"id": "BE.NMBS.008884327",
			"locationX": "3.766893",
			"locationY": "50.428019",
			"@id": "http://irail.be/stations/NMBS/008884327",
			"standardname": "Hainin",
			"name": "Hainin"
		},
		{
			"id": "BE.NMBS.008884335",
			"locationX": "3.68608",
			"locationY": "50.410103",
			"@id": "http://irail.be/stations/NMBS/008884335",
			"standardname": "Quievrain",
			"name": "Quievrain"
		},
		{
			"id": "BE.NMBS.008884350",
			"locationX": "3.744708",
			"locationY": "50.423335",
			"@id": "http://irail.be/stations/NMBS/008884350",
			"standardname": "Thulin",
			"name": "Thulin"
		},
		{
			"id": "BE.NMBS.008884541",
			"locationX": "3.856543",
			"locationY": "50.449827",
			"@id": "http://irail.be/stations/NMBS/008884541",
			"standardname": "Quaregnon",
			"name": "Quaregnon"
		},
		{
			"id": "BE.NMBS.008884566",
			"locationX": "3.885587",
			"locationY": "50.452577",
			"@id": "http://irail.be/stations/NMBS/008884566",
			"standardname": "Jemappes",
			"name": "Jemappes"
		},
		{
			"id": "BE.NMBS.008884632",
			"locationX": "3.724248",
			"locationY": "50.464542",
			"@id": "http://irail.be/stations/NMBS/008884632",
			"standardname": "Ville-Pommerœul",
			"name": "Ville-Pommerœul"
		},
		{
			"id": "BE.NMBS.008884640",
			"locationX": "3.698764",
			"locationY": "50.482565",
			"@id": "http://irail.be/stations/NMBS/008884640",
			"standardname": "Harchies",
			"name": "Harchies"
		},
		{
			"id": "BE.NMBS.008884715",
			"locationX": "3.666304",
			"locationY": "50.505461",
			"@id": "http://irail.be/stations/NMBS/008884715",
			"standardname": "Blaton",
			"name": "Blaton"
		},
		{
			"id": "BE.NMBS.008884855",
			"locationX": "3.592772",
			"locationY": "50.513704",
			"@id": "http://irail.be/stations/NMBS/008884855",
			"standardname": "Péruwelz",
			"name": "Péruwelz"
		},
		{
			"id": "BE.NMBS.008884889",
			"locationX": "3.52618",
			"locationY": "50.527359",
			"@id": "http://irail.be/stations/NMBS/008884889",
			"standardname": "Callenelle",
			"name": "Callenelle"
		},
		{
			"id": "BE.NMBS.008885001",
			"locationX": "3.396942",
			"locationY": "50.613134",
			"@id": "http://irail.be/stations/NMBS/008885001",
			"standardname": "Tournai",
			"name": "Tournai"
		},
		{
			"id": "BE.NMBS.008885068",
			"locationX": "3.354837",
			"locationY": "50.62989",
			"@id": "http://irail.be/stations/NMBS/008885068",
			"standardname": "Froyennes",
			"name": "Froyennes"
		},
		{
			"id": "BE.NMBS.008885522",
			"locationX": "3.451309",
			"locationY": "50.569626",
			"@id": "http://irail.be/stations/NMBS/008885522",
			"standardname": "Antoing",
			"name": "Antoing"
		},
		{
			"id": "BE.NMBS.008885530",
			"locationX": "3.495527",
			"locationY": "50.547557",
			"@id": "http://irail.be/stations/NMBS/008885530",
			"standardname": "Maubray",
			"name": "Maubray"
		},
		{
			"id": "BE.NMBS.008885704",
			"locationX": "3.228448",
			"locationY": "50.741005",
			"@id": "http://irail.be/stations/NMBS/008885704",
			"standardname": "Mouscron",
			"name": "Mouscron"
		},
		{
			"id": "BE.NMBS.008885753",
			"locationX": "3.245959",
			"locationY": "50.713894",
			"@id": "http://irail.be/stations/NMBS/008885753",
			"standardname": "Herseaux",
			"name": "Herseaux"
		},
		{
			"id": "BE.NMBS.008886009",
			"locationX": "3.777429",
			"locationY": "50.626932",
			"@id": "http://irail.be/stations/NMBS/008886009",
			"standardname": "Ath",
			"name": "Ath"
		},
		{
			"id": "BE.NMBS.008886041",
			"locationX": "3.800117",
			"locationY": "50.614356",
			"@id": "http://irail.be/stations/NMBS/008886041",
			"standardname": "Maffle",
			"name": "Maffle"
		},
		{
			"id": "BE.NMBS.008886058",
			"locationX": "3.833917",
			"locationY": "50.600108",
			"@id": "http://irail.be/stations/NMBS/008886058",
			"standardname": "Mevergnies-Attre",
			"name": "Mevergnies-Attre"
		},
		{
			"id": "BE.NMBS.008886066",
			"locationX": "3.852551",
			"locationY": "50.594229",
			"@id": "http://irail.be/stations/NMBS/008886066",
			"standardname": "Brugelette",
			"name": "Brugelette"
		},
		{
			"id": "BE.NMBS.008886074",
			"locationX": "3.874809",
			"locationY": "50.586759",
			"@id": "http://irail.be/stations/NMBS/008886074",
			"standardname": "Cambron-Casteau",
			"name": "Cambron-Casteau"
		},
		{
			"id": "BE.NMBS.008886348",
			"locationX": "3.616872",
			"locationY": "50.600612",
			"@id": "http://irail.be/stations/NMBS/008886348",
			"standardname": "Leuze",
			"name": "Leuze"
		},
		{
			"id": "BE.NMBS.008886504",
			"locationX": "3.836434",
			"locationY": "50.712015",
			"@id": "http://irail.be/stations/NMBS/008886504",
			"name": "Lessines",
			"standardname": "Lessen"
		},
		{
			"id": "BE.NMBS.008886546",
			"locationX": "3.847086",
			"locationY": "50.733095",
			"@id": "http://irail.be/stations/NMBS/008886546",
			"standardname": "Acren",
			"name": "Acren"
		},
		{
			"id": "BE.NMBS.008886553",
			"locationX": "3.835175",
			"locationY": "50.703062",
			"@id": "http://irail.be/stations/NMBS/008886553",
			"standardname": "Houraing",
			"name": "Houraing"
		},
		{
			"id": "BE.NMBS.008886561",
			"locationX": "3.823408",
			"locationY": "50.686585",
			"@id": "http://irail.be/stations/NMBS/008886561",
			"name": "Papignies",
			"standardname": "Papegem"
		},
		{
			"id": "BE.NMBS.008886587",
			"locationX": "3.793627",
			"locationY": "50.661235",
			"@id": "http://irail.be/stations/NMBS/008886587",
			"standardname": "Rebaix",
			"name": "Rebaix"
		},
		{
			"id": "BE.NMBS.008891009",
			"locationX": "3.216726",
			"locationY": "51.197226",
			"@id": "http://irail.be/stations/NMBS/008891009",
			"standardname": "Brugge",
			"name": "Brugge"
		},
		{
			"id": "BE.NMBS.008891033",
			"locationX": "3.201795",
			"locationY": "51.223115",
			"@id": "http://irail.be/stations/NMBS/008891033",
			"standardname": "Brugge-Sint-Pieters",
			"name": "Brugge-Sint-Pieters"
		},
		{
			"id": "BE.NMBS.008891116",
			"locationX": "3.257466",
			"locationY": "51.154114",
			"@id": "http://irail.be/stations/NMBS/008891116",
			"standardname": "Oostkamp",
			"name": "Oostkamp"
		},
		{
			"id": "BE.NMBS.008891124",
			"locationX": "3.329892",
			"locationY": "51.128009",
			"@id": "http://irail.be/stations/NMBS/008891124",
			"standardname": "Beernem",
			"name": "Beernem"
		},
		{
			"id": "BE.NMBS.008891132",
			"locationX": "3.38673",
			"locationY": "51.107612",
			"@id": "http://irail.be/stations/NMBS/008891132",
			"standardname": "Maria-Aalter",
			"name": "Maria-Aalter"
		},
		{
			"id": "BE.NMBS.008891140",
			"locationX": "3.447848",
			"locationY": "51.092295",
			"@id": "http://irail.be/stations/NMBS/008891140",
			"standardname": "Aalter",
			"name": "Aalter"
		},
		{
			"id": "BE.NMBS.008891157",
			"locationX": "3.487374",
			"locationY": "51.083908",
			"@id": "http://irail.be/stations/NMBS/008891157",
			"standardname": "Bellem",
			"name": "Bellem"
		},
		{
			"id": "BE.NMBS.008891165",
			"locationX": "3.536212",
			"locationY": "51.073202",
			"@id": "http://irail.be/stations/NMBS/008891165",
			"standardname": "Hansbeke",
			"name": "Hansbeke"
		},
		{
			"id": "BE.NMBS.008891173",
			"locationX": "3.186666",
			"locationY": "51.324549",
			"@id": "http://irail.be/stations/NMBS/008891173",
			"standardname": "Zeebrugge-Strand",
			"name": "Zeebrugge-Strand"
		},
		{
			"id": "BE.NMBS.008891264",
			"locationX": "3.16414",
			"locationY": "51.127047",
			"@id": "http://irail.be/stations/NMBS/008891264",
			"standardname": "Zedelgem",
			"name": "Zedelgem"
		},
		{
			"id": "BE.NMBS.008891314",
			"locationX": "3.105871",
			"locationY": "51.064707",
			"@id": "http://irail.be/stations/NMBS/008891314",
			"standardname": "Torhout",
			"name": "Torhout"
		},
		{
			"id": "BE.NMBS.008891405",
			"locationX": "3.133864",
			"locationY": "51.312432",
			"@id": "http://irail.be/stations/NMBS/008891405",
			"standardname": "Blankenberge",
			"name": "Blankenberge"
		},
		{
			"id": "BE.NMBS.008891553",
			"locationX": "3.19517",
			"locationY": "51.326383",
			"@id": "http://irail.be/stations/NMBS/008891553",
			"standardname": "Zeebrugge-Dorp",
			"name": "Zeebrugge-Dorp"
		},
		{
			"id": "BE.NMBS.008891611",
			"locationX": "3.191557",
			"locationY": "51.306409",
			"@id": "http://irail.be/stations/NMBS/008891611",
			"standardname": "Zwankendamme",
			"name": "Zwankendamme"
		},
		{
			"id": "BE.NMBS.008891629",
			"locationX": "3.194505",
			"locationY": "51.294714",
			"@id": "http://irail.be/stations/NMBS/008891629",
			"standardname": "Lissewege",
			"name": "Lissewege"
		},
		{
			"id": "BE.NMBS.008891645",
			"locationX": "3.239181",
			"locationY": "51.333979",
			"@id": "http://irail.be/stations/NMBS/008891645",
			"standardname": "Heist",
			"name": "Heist"
		},
		{
			"id": "BE.NMBS.008891652",
			"locationX": "3.263587",
			"locationY": "51.338195",
			"@id": "http://irail.be/stations/NMBS/008891652",
			"standardname": "Duinbergen",
			"name": "Duinbergen"
		},
		{
			"id": "BE.NMBS.008891660",
			"locationX": "3.285188",
			"locationY": "51.339894",
			"@id": "http://irail.be/stations/NMBS/008891660",
			"standardname": "Knokke",
			"name": "Knokke"
		},
		{
			"id": "BE.NMBS.008891702",
			"locationX": "2.925809",
			"locationY": "51.228212",
			"@id": "http://irail.be/stations/NMBS/008891702",
			"standardname": "Oostende",
			"name": "Oostende"
		},
		{
			"id": "BE.NMBS.008892007",
			"locationX": "3.710675",
			"locationY": "51.035896",
			"@id": "http://irail.be/stations/NMBS/008892007",
			"name": "Ghent-Sint-Pieters",
			"standardname": "Gent-Sint-Pieters"
		},
		{
			"id": "BE.NMBS.008892031",
			"locationX": "3.655202",
			"locationY": "51.047295",
			"@id": "http://irail.be/stations/NMBS/008892031",
			"standardname": "Drongen",
			"name": "Drongen"
		},
		{
			"id": "BE.NMBS.008892056",
			"locationX": "3.576852",
			"locationY": "51.064311",
			"@id": "http://irail.be/stations/NMBS/008892056",
			"standardname": "Landegem",
			"name": "Landegem"
		},
		{
			"id": "BE.NMBS.008892080",
			"locationX": "3.650465",
			"locationY": "50.997063",
			"@id": "http://irail.be/stations/NMBS/008892080",
			"standardname": "De Pinte",
			"name": "De Pinte"
		},
		{
			"id": "BE.NMBS.008892106",
			"locationX": "3.534432",
			"locationY": "50.978258",
			"@id": "http://irail.be/stations/NMBS/008892106",
			"standardname": "Deinze",
			"name": "Deinze"
		},
		{
			"id": "BE.NMBS.008892205",
			"locationX": "3.127212",
			"locationY": "51.025163",
			"@id": "http://irail.be/stations/NMBS/008892205",
			"standardname": "Lichtervelde",
			"name": "Lichtervelde"
		},
		{
			"id": "BE.NMBS.008892254",
			"locationX": "3.330341",
			"locationY": "50.990842",
			"@id": "http://irail.be/stations/NMBS/008892254",
			"standardname": "Tielt",
			"name": "Tielt"
		},
		{
			"id": "BE.NMBS.008892288",
			"locationX": "3.418363",
			"locationY": "50.98446",
			"@id": "http://irail.be/stations/NMBS/008892288",
			"standardname": "Aarsele",
			"name": "Aarsele"
		},
		{
			"id": "BE.NMBS.008892304",
			"locationX": "2.66994",
			"locationY": "51.073867",
			"@id": "http://irail.be/stations/NMBS/008892304",
			"standardname": "Veurne",
			"name": "Veurne"
		},
		{
			"id": "BE.NMBS.008892320",
			"locationX": "2.65277",
			"locationY": "51.079197",
			"@id": "http://irail.be/stations/NMBS/008892320",
			"standardname": "Koksijde",
			"name": "Koksijde"
		},
		{
			"id": "BE.NMBS.008892338",
			"locationX": "2.601963",
			"locationY": "51.0774",
			"@id": "http://irail.be/stations/NMBS/008892338",
			"standardname": "De Panne",
			"name": "De Panne"
		},
		{
			"id": "BE.NMBS.008892403",
			"locationX": "3.043459",
			"locationY": "51.025244",
			"@id": "http://irail.be/stations/NMBS/008892403",
			"standardname": "Kortemark",
			"name": "Kortemark"
		},
		{
			"id": "BE.NMBS.008892452",
			"locationX": "2.868943",
			"locationY": "51.032723",
			"@id": "http://irail.be/stations/NMBS/008892452",
			"standardname": "Diksmuide",
			"name": "Diksmuide"
		},
		{
			"id": "BE.NMBS.008892601",
			"locationX": "3.600386",
			"locationY": "50.850116",
			"@id": "http://irail.be/stations/NMBS/008892601",
			"standardname": "Oudenaarde",
			"name": "Oudenaarde"
		},
		{
			"id": "BE.NMBS.008892627",
			"locationX": "3.623776",
			"locationY": "50.870432",
			"@id": "http://irail.be/stations/NMBS/008892627",
			"standardname": "Eine",
			"name": "Eine"
		},
		{
			"id": "BE.NMBS.008892635",
			"locationX": "3.646384",
			"locationY": "50.908025",
			"@id": "http://irail.be/stations/NMBS/008892635",
			"standardname": "Zingem",
			"name": "Zingem"
		},
		{
			"id": "BE.NMBS.008892643",
			"locationX": "3.639732",
			"locationY": "50.930021",
			"@id": "http://irail.be/stations/NMBS/008892643",
			"standardname": "Gavere-Asper",
			"name": "Gavere-Asper"
		},
		{
			"id": "BE.NMBS.008892650",
			"locationX": "3.627839",
			"locationY": "50.960774",
			"@id": "http://irail.be/stations/NMBS/008892650",
			"standardname": "Eke-Nazareth",
			"name": "Eke-Nazareth"
		},
		{
			"id": "BE.NMBS.008892692",
			"locationX": "3.698395",
			"locationY": "50.874297",
			"@id": "http://irail.be/stations/NMBS/008892692",
			"standardname": "Sint-Denijs-Boekel",
			"name": "Sint-Denijs-Boekel"
		},
		{
			"id": "BE.NMBS.008892734",
			"locationX": "3.495014",
			"locationY": "50.826385",
			"@id": "http://irail.be/stations/NMBS/008892734",
			"standardname": "Anzegem",
			"name": "Anzegem"
		},
		{
			"id": "BE.NMBS.008892908",
			"locationX": "3.602552",
			"locationY": "50.742506",
			"@id": "http://irail.be/stations/NMBS/008892908",
			"standardname": "Ronse",
			"name": "Ronse"
		},
		{
			"id": "BE.NMBS.008893013",
			"locationX": "3.768889",
			"locationY": "51.017531",
			"@id": "http://irail.be/stations/NMBS/008893013",
			"standardname": "Merelbeke",
			"name": "Merelbeke"
		},
		{
			"id": "BE.NMBS.008893039",
			"locationX": "3.797088",
			"locationY": "51.002807",
			"@id": "http://irail.be/stations/NMBS/008893039",
			"standardname": "Melle",
			"name": "Melle"
		},
		{
			"id": "BE.NMBS.008893047",
			"locationX": "3.801672",
			"locationY": "50.980199",
			"@id": "http://irail.be/stations/NMBS/008893047",
			"standardname": "Gontrode",
			"name": "Gontrode"
		},
		{
			"id": "BE.NMBS.008893054",
			"locationX": "3.791146",
			"locationY": "50.970545",
			"@id": "http://irail.be/stations/NMBS/008893054",
			"standardname": "Landskouter",
			"name": "Landskouter"
		},
		{
			"id": "BE.NMBS.008893062",
			"locationX": "3.781339",
			"locationY": "50.953519",
			"@id": "http://irail.be/stations/NMBS/008893062",
			"standardname": "Moortsele",
			"name": "Moortsele"
		},
		{
			"id": "BE.NMBS.008893070",
			"locationX": "3.777842",
			"locationY": "50.937069",
			"@id": "http://irail.be/stations/NMBS/008893070",
			"standardname": "Scheldewindeke",
			"name": "Scheldewindeke"
		},
		{
			"id": "BE.NMBS.008893120",
			"locationX": "3.740591",
			"locationY": "51.056365",
			"@id": "http://irail.be/stations/NMBS/008893120",
			"name": "Ghent-Dampoort",
			"standardname": "Gent-Dampoort"
		},
		{
			"id": "BE.NMBS.008893179",
			"locationX": "3.756322",
			"locationY": "51.038647",
			"@id": "http://irail.be/stations/NMBS/008893179",
			"standardname": "Gentbrugge",
			"name": "Gentbrugge"
		},
		{
			"id": "BE.NMBS.008893211",
			"locationX": "3.719071",
			"locationY": "51.088357",
			"@id": "http://irail.be/stations/NMBS/008893211",
			"standardname": "Wondelgem",
			"name": "Wondelgem"
		},
		{
			"id": "BE.NMBS.008893252",
			"locationX": "3.70138",
			"locationY": "51.107585",
			"@id": "http://irail.be/stations/NMBS/008893252",
			"standardname": "Evergem",
			"name": "Evergem"
		},
		{
			"id": "BE.NMBS.008893260",
			"locationX": "3.667526",
			"locationY": "51.126607",
			"@id": "http://irail.be/stations/NMBS/008893260",
			"standardname": "Sleidinge",
			"name": "Sleidinge"
		},
		{
			"id": "BE.NMBS.008893401",
			"locationX": "4.101427",
			"locationY": "51.022781",
			"@id": "http://irail.be/stations/NMBS/008893401",
			"standardname": "Dendermonde",
			"name": "Dendermonde"
		},
		{
			"id": "BE.NMBS.008893443",
			"locationX": "4.117832",
			"locationY": "51.021693",
			"@id": "http://irail.be/stations/NMBS/008893443",
			"standardname": "Sint-Gillis-Dendermonde",
			"name": "Sint-Gillis-Dendermonde"
		},
		{
			"id": "BE.NMBS.008893518",
			"locationX": "4.064472",
			"locationY": "51.01523",
			"@id": "http://irail.be/stations/NMBS/008893518",
			"standardname": "Oudegem",
			"name": "Oudegem"
		},
		{
			"id": "BE.NMBS.008893526",
			"locationX": "4.011094",
			"locationY": "51.003149",
			"@id": "http://irail.be/stations/NMBS/008893526",
			"standardname": "Schoonaarde",
			"name": "Schoonaarde"
		},
		{
			"id": "BE.NMBS.008893534",
			"locationX": "3.969195",
			"locationY": "51.001962",
			"@id": "http://irail.be/stations/NMBS/008893534",
			"standardname": "Wichelen",
			"name": "Wichelen"
		},
		{
			"id": "BE.NMBS.008893542",
			"locationX": "3.921373",
			"locationY": "51.003149",
			"@id": "http://irail.be/stations/NMBS/008893542",
			"standardname": "Schellebelle",
			"name": "Schellebelle"
		},
		{
			"id": "BE.NMBS.008893559",
			"locationX": "3.881883",
			"locationY": "51.001603",
			"@id": "http://irail.be/stations/NMBS/008893559",
			"standardname": "Wetteren",
			"name": "Wetteren"
		},
		{
			"id": "BE.NMBS.008893567",
			"locationX": "3.829593",
			"locationY": "50.99175",
			"@id": "http://irail.be/stations/NMBS/008893567",
			"standardname": "Kwatrecht",
			"name": "Kwatrecht"
		},
		{
			"id": "BE.NMBS.008893583",
			"locationX": "3.959361",
			"locationY": "50.984397",
			"@id": "http://irail.be/stations/NMBS/008893583",
			"standardname": "Serskamp",
			"name": "Serskamp"
		},
		{
			"id": "BE.NMBS.008893708",
			"locationX": "3.574515",
			"locationY": "51.181333",
			"@id": "http://irail.be/stations/NMBS/008893708",
			"standardname": "Eeklo",
			"name": "Eeklo"
		},
		{
			"id": "BE.NMBS.008893815",
			"locationX": "3.615353",
			"locationY": "51.154608",
			"@id": "http://irail.be/stations/NMBS/008893815",
			"standardname": "Waarschoot",
			"name": "Waarschoot"
		},
		{
			"id": "BE.NMBS.008894151",
			"locationX": "3.879384",
			"locationY": "51.08753",
			"@id": "http://irail.be/stations/NMBS/008894151",
			"standardname": "Beervelde",
			"name": "Beervelde"
		},
		{
			"id": "BE.NMBS.008894201",
			"locationX": "3.987794",
			"locationY": "51.108062",
			"@id": "http://irail.be/stations/NMBS/008894201",
			"standardname": "Lokeren",
			"name": "Lokeren"
		},
		{
			"id": "BE.NMBS.008894235",
			"locationX": "4.041999",
			"locationY": "51.073256",
			"@id": "http://irail.be/stations/NMBS/008894235",
			"standardname": "Zele",
			"name": "Zele"
		},
		{
			"id": "BE.NMBS.008894425",
			"locationX": "4.06894",
			"locationY": "51.143398",
			"@id": "http://irail.be/stations/NMBS/008894425",
			"standardname": "Sinaai",
			"name": "Sinaai"
		},
		{
			"id": "BE.NMBS.008894433",
			"locationX": "4.088608",
			"locationY": "51.150994",
			"@id": "http://irail.be/stations/NMBS/008894433",
			"standardname": "Belsele",
			"name": "Belsele"
		},
		{
			"id": "BE.NMBS.008894508",
			"locationX": "4.142966",
			"locationY": "51.171472",
			"@id": "http://irail.be/stations/NMBS/008894508",
			"standardname": "Sint-Niklaas",
			"name": "Sint-Niklaas"
		},
		{
			"id": "BE.NMBS.008894672",
			"locationX": "4.221352",
			"locationY": "51.126085",
			"@id": "http://irail.be/stations/NMBS/008894672",
			"standardname": "Temse",
			"name": "Temse"
		},
		{
			"id": "BE.NMBS.008894714",
			"locationX": "4.185907",
			"locationY": "51.185612",
			"@id": "http://irail.be/stations/NMBS/008894714",
			"standardname": "Nieuwkerken-Waas",
			"name": "Nieuwkerken-Waas"
		},
		{
			"id": "BE.NMBS.008894748",
			"locationX": "4.25952",
			"locationY": "51.208336",
			"@id": "http://irail.be/stations/NMBS/008894748",
			"standardname": "Beveren",
			"name": "Beveren"
		},
		{
			"id": "BE.NMBS.008894755",
			"locationX": "4.286766",
			"locationY": "51.21071",
			"@id": "http://irail.be/stations/NMBS/008894755",
			"standardname": "Melsele",
			"name": "Melsele"
		},
		{
			"id": "BE.NMBS.008894821",
			"locationX": "4.32978",
			"locationY": "51.214108",
			"@id": "http://irail.be/stations/NMBS/008894821",
			"standardname": "Zwijndrecht",
			"name": "Zwijndrecht"
		},
		{
			"id": "BE.NMBS.008895000",
			"locationX": "4.039653",
			"locationY": "50.942813",
			"@id": "http://irail.be/stations/NMBS/008895000",
			"standardname": "Aalst",
			"name": "Aalst"
		},
		{
			"id": "BE.NMBS.008895067",
			"locationX": "3.984981",
			"locationY": "50.970895",
			"@id": "http://irail.be/stations/NMBS/008895067",
			"standardname": "Lede",
			"name": "Lede"
		},
		{
			"id": "BE.NMBS.008895091",
			"locationX": "4.055447",
			"locationY": "50.919621",
			"@id": "http://irail.be/stations/NMBS/008895091",
			"standardname": "Erembodegem",
			"name": "Erembodegem"
		},
		{
			"id": "BE.NMBS.008895125",
			"locationX": "4.024407",
			"locationY": "50.948377",
			"@id": "http://irail.be/stations/NMBS/008895125",
			"standardname": "Aalst-Kerrebroek",
			"name": "Aalst-Kerrebroek"
		},
		{
			"id": "BE.NMBS.008895208",
			"locationX": "3.81441",
			"locationY": "50.869102",
			"@id": "http://irail.be/stations/NMBS/008895208",
			"standardname": "Zottegem",
			"name": "Zottegem"
		},
		{
			"id": "BE.NMBS.008895232",
			"locationX": "3.733238",
			"locationY": "50.875673",
			"@id": "http://irail.be/stations/NMBS/008895232",
			"standardname": "Munkzwalm",
			"name": "Munkzwalm"
		},
		{
			"id": "BE.NMBS.008895240",
			"locationX": "3.80587",
			"locationY": "50.90051",
			"@id": "http://irail.be/stations/NMBS/008895240",
			"standardname": "Balegem-Zuid",
			"name": "Balegem-Zuid"
		},
		{
			"id": "BE.NMBS.008895257",
			"locationX": "3.791425",
			"locationY": "50.919612",
			"@id": "http://irail.be/stations/NMBS/008895257",
			"standardname": "Balegem-Dorp",
			"name": "Balegem-Dorp"
		},
		{
			"id": "BE.NMBS.008895422",
			"locationX": "3.857469",
			"locationY": "50.891296",
			"@id": "http://irail.be/stations/NMBS/008895422",
			"standardname": "Hillegem",
			"name": "Hillegem"
		},
		{
			"id": "BE.NMBS.008895430",
			"locationX": "3.880616",
			"locationY": "50.89722",
			"@id": "http://irail.be/stations/NMBS/008895430",
			"standardname": "Herzele",
			"name": "Herzele"
		},
		{
			"id": "BE.NMBS.008895448",
			"locationX": "3.896653",
			"locationY": "50.901643",
			"@id": "http://irail.be/stations/NMBS/008895448",
			"standardname": "Terhagen",
			"name": "Terhagen"
		},
		{
			"id": "BE.NMBS.008895455",
			"locationX": "3.922416",
			"locationY": "50.907198",
			"@id": "http://irail.be/stations/NMBS/008895455",
			"standardname": "Burst",
			"name": "Burst"
		},
		{
			"id": "BE.NMBS.008895463",
			"locationX": "3.935711",
			"locationY": "50.913769",
			"@id": "http://irail.be/stations/NMBS/008895463",
			"standardname": "Bambrugge",
			"name": "Bambrugge"
		},
		{
			"id": "BE.NMBS.008895471",
			"locationX": "3.962463",
			"locationY": "50.928601",
			"@id": "http://irail.be/stations/NMBS/008895471",
			"standardname": "Erpe-Mere",
			"name": "Erpe-Mere"
		},
		{
			"id": "BE.NMBS.008895489",
			"locationX": "3.98125",
			"locationY": "50.943254",
			"@id": "http://irail.be/stations/NMBS/008895489",
			"standardname": "Vijfhuizen",
			"name": "Vijfhuizen"
		},
		{
			"id": "BE.NMBS.008895505",
			"locationX": "3.872328",
			"locationY": "50.771137",
			"@id": "http://irail.be/stations/NMBS/008895505",
			"standardname": "Geraardsbergen",
			"name": "Geraardsbergen"
		},
		{
			"id": "BE.NMBS.008895570",
			"locationX": "3.826564",
			"locationY": "50.816236",
			"@id": "http://irail.be/stations/NMBS/008895570",
			"standardname": "Lierde",
			"name": "Lierde"
		},
		{
			"id": "BE.NMBS.008895612",
			"locationX": "3.917337",
			"locationY": "50.751981",
			"@id": "http://irail.be/stations/NMBS/008895612",
			"standardname": "Viane-Moerbeke",
			"name": "Viane-Moerbeke"
		},
		{
			"id": "BE.NMBS.008895620",
			"locationX": "3.965726",
			"locationY": "50.743918",
			"@id": "http://irail.be/stations/NMBS/008895620",
			"standardname": "Galmaarden",
			"name": "Galmaarden"
		},
		{
			"id": "BE.NMBS.008895638",
			"locationX": "3.992828",
			"locationY": "50.735522",
			"@id": "http://irail.be/stations/NMBS/008895638",
			"standardname": "Tollembeek",
			"name": "Tollembeek"
		},
		{
			"id": "BE.NMBS.008895646",
			"locationX": "4.014573",
			"locationY": "50.723701",
			"@id": "http://irail.be/stations/NMBS/008895646",
			"standardname": "Herne",
			"name": "Herne"
		},
		{
			"id": "BE.NMBS.008895711",
			"locationX": "3.899286",
			"locationY": "50.797844",
			"@id": "http://irail.be/stations/NMBS/008895711",
			"standardname": "Schendelbeke",
			"name": "Schendelbeke"
		},
		{
			"id": "BE.NMBS.008895729",
			"locationX": "3.921553",
			"locationY": "50.801871",
			"@id": "http://irail.be/stations/NMBS/008895729",
			"standardname": "Idegem",
			"name": "Idegem"
		},
		{
			"id": "BE.NMBS.008895737",
			"locationX": "3.957653",
			"locationY": "50.806986",
			"@id": "http://irail.be/stations/NMBS/008895737",
			"standardname": "Zandbergen",
			"name": "Zandbergen"
		},
		{
			"id": "BE.NMBS.008895745",
			"locationX": "3.972108",
			"locationY": "50.813063",
			"@id": "http://irail.be/stations/NMBS/008895745",
			"standardname": "Appelterre",
			"name": "Appelterre"
		},
		{
			"id": "BE.NMBS.008895752",
			"locationX": "3.993745",
			"locationY": "50.823994",
			"@id": "http://irail.be/stations/NMBS/008895752",
			"standardname": "Eichem",
			"name": "Eichem"
		},
		{
			"id": "BE.NMBS.008895760",
			"locationX": "4.026133",
			"locationY": "50.839509",
			"@id": "http://irail.be/stations/NMBS/008895760",
			"standardname": "Ninove",
			"name": "Ninove"
		},
		{
			"id": "BE.NMBS.008895778",
			"locationX": "4.054557",
			"locationY": "50.857712",
			"@id": "http://irail.be/stations/NMBS/008895778",
			"standardname": "Okegem",
			"name": "Okegem"
		},
		{
			"id": "BE.NMBS.008895802",
			"locationX": "4.071825",
			"locationY": "50.891925",
			"@id": "http://irail.be/stations/NMBS/008895802",
			"standardname": "Denderleeuw",
			"name": "Denderleeuw"
		},
		{
			"id": "BE.NMBS.008895836",
			"locationX": "4.095287",
			"locationY": "50.882531",
			"@id": "http://irail.be/stations/NMBS/008895836",
			"standardname": "Liedekerke",
			"name": "Liedekerke"
		},
		{
			"id": "BE.NMBS.008895844",
			"locationX": "4.06849",
			"locationY": "50.876886",
			"@id": "http://irail.be/stations/NMBS/008895844",
			"standardname": "Iddergem",
			"name": "Iddergem"
		},
		{
			"id": "BE.NMBS.008895851",
			"locationX": "4.05062",
			"locationY": "50.903279",
			"@id": "http://irail.be/stations/NMBS/008895851",
			"standardname": "Welle",
			"name": "Welle"
		},
		{
			"id": "BE.NMBS.008895869",
			"locationX": "4.023958",
			"locationY": "50.906838",
			"@id": "http://irail.be/stations/NMBS/008895869",
			"standardname": "Haaltert",
			"name": "Haaltert"
		},
		{
			"id": "BE.NMBS.008895877",
			"locationX": "3.987524",
			"locationY": "50.911054",
			"@id": "http://irail.be/stations/NMBS/008895877",
			"standardname": "Ede",
			"name": "Ede"
		},
		{
			"id": "BE.NMBS.008896008",
			"locationX": "3.264549",
			"locationY": "50.824506",
			"@id": "http://irail.be/stations/NMBS/008896008",
			"standardname": "Kortrijk",
			"name": "Kortrijk"
		},
		{
			"id": "BE.NMBS.008896115",
			"locationX": "3.314008",
			"locationY": "50.85586",
			"@id": "http://irail.be/stations/NMBS/008896115",
			"standardname": "Harelbeke",
			"name": "Harelbeke"
		},
		{
			"id": "BE.NMBS.008896149",
			"locationX": "3.42551",
			"locationY": "50.892456",
			"@id": "http://irail.be/stations/NMBS/008896149",
			"standardname": "Waregem",
			"name": "Waregem"
		},
		{
			"id": "BE.NMBS.008896230",
			"locationX": "3.39163",
			"locationY": "50.833657",
			"@id": "http://irail.be/stations/NMBS/008896230",
			"standardname": "Vichte",
			"name": "Vichte"
		},
		{
			"id": "BE.NMBS.008896305",
			"locationX": "3.113791",
			"locationY": "50.799489",
			"@id": "http://irail.be/stations/NMBS/008896305",
			"standardname": "Menen",
			"name": "Menen"
		},
		{
			"id": "BE.NMBS.008896370",
			"locationX": "3.18352",
			"locationY": "50.811526",
			"@id": "http://irail.be/stations/NMBS/008896370",
			"standardname": "Wevelgem",
			"name": "Wevelgem"
		},
		{
			"id": "BE.NMBS.008896388",
			"locationX": "3.224205",
			"locationY": "50.825845",
			"@id": "http://irail.be/stations/NMBS/008896388",
			"standardname": "Bissegem",
			"name": "Bissegem"
		},
		{
			"id": "BE.NMBS.008896396",
			"locationX": "3.046983",
			"locationY": "50.781861",
			"@id": "http://irail.be/stations/NMBS/008896396",
			"standardname": "Wervik",
			"name": "Wervik"
		},
		{
			"id": "BE.NMBS.008896412",
			"locationX": "2.999286",
			"locationY": "50.772072",
			"@id": "http://irail.be/stations/NMBS/008896412",
			"standardname": "Comines",
			"name": "Comines"
		},
		{
			"id": "BE.NMBS.008896503",
			"locationX": "2.876593",
			"locationY": "50.847402",
			"@id": "http://irail.be/stations/NMBS/008896503",
			"standardname": "Ieper",
			"name": "Ieper"
		},
		{
			"id": "BE.NMBS.008896735",
			"locationX": "2.736343",
			"locationY": "50.854449",
			"@id": "http://irail.be/stations/NMBS/008896735",
			"standardname": "Poperinge",
			"name": "Poperinge"
		},
		{
			"id": "BE.NMBS.008896800",
			"locationX": "3.130412",
			"locationY": "50.949025",
			"@id": "http://irail.be/stations/NMBS/008896800",
			"standardname": "Roeselare",
			"name": "Roeselare"
		},
		{
			"id": "BE.NMBS.008896909",
			"locationX": "3.212088",
			"locationY": "50.921149",
			"@id": "http://irail.be/stations/NMBS/008896909",
			"standardname": "Izegem",
			"name": "Izegem"
		},
		{
			"id": "BE.NMBS.008896925",
			"locationX": "3.255416",
			"locationY": "50.914326",
			"@id": "http://irail.be/stations/NMBS/008896925",
			"standardname": "Ingelmunster",
			"name": "Ingelmunster"
		},
		{
			"id": "BE.NMBS.088022054",
			"locationX": "6.09251",
			"locationY": "49.89644",
			"@id": "http://irail.be/stations/NMBS/088022054",
			"standardname": "Michelau",
			"name": "Michelau"
		}
	]
};

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map