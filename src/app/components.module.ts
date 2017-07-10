/* Components */
import { AppComponent } from './components/app.component';
import { StationList } from './components/search/stationList.component';
import { ConnectionQuery } from './components/search/connectionQuery.component';
import { TravelTime } from './components/search/travelTime.component';
import { TravelDate } from './components/search/travelDate.component';
import { Connections } from './components/connections/connections.component';
import { Connection } from './components/connections/connection.component';
import { Options } from './components/options.component';
import { ConnectionDetail } from './components/connections/connectionDetail.component';

export class Components {
    public static components = [
        AppComponent,
        StationList,
        ConnectionQuery,
        TravelTime,
        TravelDate,
        Connections,
        Connection,
        Options,
        ConnectionDetail
    ];
}
