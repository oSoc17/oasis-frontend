// Node modules
import { Component } from '@angular/core';
import { ISimpleEvent, SimpleEventDispatcher } from 'strongly-typed-events';

// Custom modules
import { SearchData } from './../classes/connections/searchData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public static searchData: SearchData[];
    public static searchString: any;
    private static currPage = 0;
    private static prevPage = 0;
    private static _pageChange: SimpleEventDispatcher<number> = new SimpleEventDispatcher<number>();
    private pageChangeEvent: ISimpleEvent<number> = AppComponent._pageChange;

    public static get pageChange(): ISimpleEvent<number> {
        return this._pageChange;
    }

    /**
     * change current page
     * @param number page ID
     */
    public static setPage(number) {
        if (number <= 3) {
            if (AppComponent.currPage !== 2) {
                AppComponent.prevPage = AppComponent.currPage;
            }
            AppComponent.currPage = number;
            AppComponent._pageChange.dispatch(number);
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

    constructor() {
        this.pageChangeEvent = AppComponent._pageChange;
    }

    /**
     * Get the currently shown page
     */
    private getPage() {
        return AppComponent.currPage;
    }

    private getPageChange() {
        return AppComponent._pageChange;
    }
}
