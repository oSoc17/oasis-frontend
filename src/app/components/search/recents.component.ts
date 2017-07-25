// Node modules
import { Component, ViewChild } from '@angular/core';

// Custom modules
import { AppComponent } from '../app.component';
import { AppModule } from '../../app.module';
import { Language } from '../../classes/userData/language';
import { Recent } from '../../classes/userData/recent';

@Component({
    selector: 'recents',
    templateUrl: './templates/recents.component.html',
    styleUrls: ['./styles/recents.component.scss']
})

/**
 * A panel with the recent search queries, clickable to query again
 */
export class Recents {
    language: Language = new Language();
    recents: Recent[] = AppModule.options.recents.slice().reverse(); // recents are pushed at the back, but displayed on the front

    constructor() {
    }

    /**
     * handles the re-querying of a recent search
     * @param recent the recent object to re-query
     */
    onClick(recent: Recent) {
        AppComponent.searchData = recent.searchData;
        AppComponent.searchString = {
            stations: recent.depStationReadable + ' - ' + recent.arrStationReadable,
            time: recent.travelTimeReadable + ' ' + this.language.getMessage('weekdays')[recent.travelDay]
        };
        AppComponent.setPage(1); // set page to score screen (value 1)
    }
}
