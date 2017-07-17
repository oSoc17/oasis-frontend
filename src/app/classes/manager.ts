import { Route } from './route';
import { QoE } from './qoe';
import { SearchData } from './searchData';
import { RouteService } from '../services/routing.service';
import { Connection } from './connection';
import { RouteHistory } from './routeHistory';
import { RouteMockService } from '../services/routing.mock.service';
import { environment } from '../../environments/environment';
import { UserPreferencesMock } from './userprefs.mock';
import { UserPreferences } from './userprefs';

export class Manager {
    private static config = require('../../config.json');
    // private entryPoints = this.config.servers.reduce((array, server) => array.concat(server.uri), []);
    private static entryPoints = Manager.config.entrypoints;
    private static routeService = new RouteService(Manager.entryPoints);

    /**
     * gets QoE object
     * @param searchDataList datalist to query
     * @param deploycheck wether or not deployment should be checked (default: true)
     */
    static getQoE(searchDataList: SearchData[], deploycheck: boolean = true): Promise<QoE> {
        if (deploycheck) {
            return Manager.routeService
            .queryPeriod(searchDataList)
            .then((routes) => {
                console.log('routes');
                console.log(routes);
                return new RouteHistory(routes.map((connections) => {
                    return new Route(connections.map((connection) => {
                        return new Connection(connection);
                    }));
                }));
            })
            .then((routeHistory) => {
                    return new QoE(routeHistory, new UserPreferencesMock());
                }
            );
        } else {
            return new RouteMockService()
            .queryPeriod(searchDataList)
            .then((routes) => {
                return new RouteHistory(routes.map((connections) => {
                    return new Route(connections.map((connection) => {
                        return new Connection(connection);
                    }));
                }));
            })
            .then((routeHistory) => new QoE(routeHistory, new UserPreferencesMock())); // TODO: change for production
        }
    }

    public static get getRouteService() {
        return this.routeService;
    }
}
