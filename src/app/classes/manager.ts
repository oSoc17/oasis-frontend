import { Route } from './route';
import { QoE } from './qoe';
import { SearchData } from './searchData';
import { RouteService } from '../services/routing.service';
import { Connection } from './connection';
import { RouteHistory } from './routeHistory';

export class Manager {

    private config = require('../../config.json');
    // private entryPoints = this.config.servers.reduce((array, server) => array.concat(server.uri), []);
    private entryPoints = this.config.entrypoints;
    private routeService = new RouteService(this.entryPoints);

    getQoE(searchDataList: SearchData[]): Promise<QoE> {
        return this.routeService
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
