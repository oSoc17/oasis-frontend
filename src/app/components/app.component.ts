import { Component, ViewChild, OnInit } from '@angular/core';

import { ConnectionQuery } from './search/connectionQuery.component';

import { SearchData } from './../classes/connections/searchData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public static searchData: SearchData[];
    public static searchString: string;
    private static currPage = 0;
    private static prevPage = 0;

    /**
     * change current page
     * @param number page ID
     */
    public static setPage(number) {
        if (number <= 3) {
            AppComponent.prevPage = AppComponent.currPage;
            AppComponent.currPage = number;
        }
    }

    /**
     * Go back 1 screen
     */
    public static goBack() {
        AppComponent.setPage(AppComponent.prevPage);
    }

    /**
     * Get the currently shown page
     */
    public static getPage() {
        return AppComponent.currPage;
    }

    constructor() { }

    /**
     * Get the currently shown page
     */
    private getPage() {
        return AppComponent.currPage;
    }
}
