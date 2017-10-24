/* Components */
import { AppComponent } from './components/app.component';
import { StationList } from './components/search/stationList.component';
import { ConnectionQuery } from './components/search/connectionQuery.component';
import { TravelTime } from './components/search/travelTime.component';
import { TravelDay } from './components/search/travelDay.component';
import { Routes } from './components/connections/routes.component';
import { Options } from './components/options/options.component';
import { LanguageChooser } from './components/options/languagechooser.component';
import { NavComponent } from './components/nav.component';
import { QoESliderComponent } from './components/options/qoeSlider.component';
import { TimeChoiceComponent } from './components/options/sliderChoice';
import { MultipleChoiceComponent } from './components/options/mutipleChoice.components';
import { Recents } from './components/search/recents.component';
import { Route } from './components/connections/route.component';
import { FooterComponent } from './components/footer.component';
import { RouteScreen } from './components/connections/routeScreen.component';

export class Components {
    public static components = [
        AppComponent,
        StationList,
        ConnectionQuery,
        TravelTime,
        TravelDay,
        Routes,
        Options,
        LanguageChooser,
        NavComponent,
        QoESliderComponent,
        TimeChoiceComponent,
        MultipleChoiceComponent,
        Recents,
        Route,
        FooterComponent,
        RouteScreen
    ];
}
