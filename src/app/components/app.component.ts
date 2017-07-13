import { Component, ViewChild, OnInit } from '@angular/core';

import { ConnectionQuery } from './search/connectionQuery.component';

import { SearchData } from './../classes/searchData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public static searchData: SearchData[];
    private static currPage = 0;
    private static prevPage = 0;

    public static setPage(number) {
        // TODO: Insert check if page exists
        if (number <= 3) {
            AppComponent.prevPage = AppComponent.currPage;
            AppComponent.currPage = number;
        }
    }

    public static goBack() {
        AppComponent.setPage(AppComponent.prevPage);
    }

    constructor() { }

    getPage() {
        return AppComponent.currPage;
    }
}
