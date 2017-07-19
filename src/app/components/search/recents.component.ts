import { Component, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppModule } from '../../app.module';

import { Language } from '../../classes/userData/language';
import { SearchData } from '../../classes/connections/searchData';
import { Recent } from '../../classes/userData/recent';

@Component({
    selector: 'recents',
    templateUrl: './templates/recents.component.html',
    styleUrls: ['./styles/recents.component.scss']
})

export class Recents {
    language: Language = new Language();
    recents: Recent[] = AppModule.options.recents;

    constructor() {
    }

    /**
     * handles the re-querying of a recent search
     * @param recent the recent object to re-query
     */
    onClick(recent: Recent) {
        AppComponent.searchData = recent.searchData;
        AppComponent.searchString = recent.depStationReadable + ' - ' + recent.arrStationReadable;
        AppComponent.setPage(1);
    }
}
