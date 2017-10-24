export class ServerConfig {
    private static config = require('../../../config.json');
    private static servers = ServerConfig.config.entrypoints;

    /**
     * Returns the entrypoint for a certain country
     * @param country The name of the country
     */
    public static getServer(country: string): [string] {
        return [ServerConfig.servers[country].uri];
    }

    /**
     * Compares 2 URI's to make sure they're of the same server
     * @param uri the uri
     * @param compareTo the uri to compare to
     */
    public static equalUris(uri: string, compareTo: string) {
        const domain = uri.match(/^(http|https):\/\/(.*)\//g)[0];
        const compare = compareTo.match(/^(http|https):\/\/(.*)\//g)[0];
        if (domain && compare && domain === compare) {
            return true;
        }
        return false;
    }

    /**
     * Returns the entrypoint server containing the data for a certain station
     * @param uri the uri of a station
     */
    public static getServerByStation(uri: string): [string] {
        const domain = uri.match(/\/\/(.*)\//g)[0].substring(2);
        const stations = ServerConfig.config.stationUris;
        if (stations[domain]) {
            return ServerConfig.getServer(stations[domain]);
        }
        return [''];
    }
}
