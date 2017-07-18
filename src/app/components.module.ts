/* Components */
import { AppComponent } from './components/app.component';
import { StationList } from './components/search/stationList.component';
import { ConnectionQuery } from './components/search/connectionQuery.component';
import { TravelTime } from './components/search/travelTime.component';
import { TravelDate } from './components/search/travelDate.component';
import { Connections } from './components/connections/connections.component';
import { Connection } from './components/connections/connection.component';
import { Options } from './components/options/options.component';
import { LanguageChooser } from './components/options/languagechooser.component';
import { ConnectionDetail } from './components/connections/connectionDetail.component';
import { NavComponent } from './components/nav.component';
import { QoESliderComponent } from './components/options/qoeSlider.component';
import { Recents } from "./components/search/recents.component";
import { Route } from "./components/connections/route.component";

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
        LanguageChooser,
        ConnectionDetail,
        NavComponent,
        QoESliderComponent,
        Recents,
        Route
    ];
}
