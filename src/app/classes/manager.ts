import { Route } from './route';
import { QoE } from './qoe';
import { SearchData } from './searchData';
import { RouteService } from '../services/routing.service';
import { Connection } from './connection';
import { RouteHistory } from './routeHistory';
import { RouteMockService } from '../services/routing.mock.service';
import { environment } from '../../environments/environment';

export class Manager {

    private static config = require('../../config.json');
    // private entryPoints = this.config.servers.reduce((array, server) => array.concat(server.uri), []);
    private static entryPoints = Manager.config.entrypoints;
    private static routeService = environment.production ? new RouteService(Manager.entryPoints) : new RouteMockService();

    static getQoE(searchDataList: SearchData[]): Promise<QoE> {
        return Manager.routeService
            .queryPeriod(searchDataList)
            .then((routes) => {
                return new RouteHistory(routes.map((connections) => {
                    return new Route(connections.map((connection) => {
                        return new Connection(connection);
                    }));
                }));
            })
            .then((routeHistory) => new QoE(routeHistory));
    }

}
