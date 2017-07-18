import { Component, ViewChild } from '@angular/core';
import { Language } from '../../classes/language';
import { AppComponent } from '../app.component';
import { SearchData } from '../../classes/searchData';
import { AppModule } from '../../app.module';
import { Recent } from '../../classes/recent';

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

    onClick(recent) {
        AppComponent.searchData = recent.searchData;
        AppComponent.setPage(1);
    }

}
