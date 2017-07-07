import { Component, ViewChild } from '@angular/core';

import { GraphSection } from './graphSection.component';

@Component({
    selector: 'app-root',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./styles/app.component.scss']
})

export class AppComponent {
    title = 'Oasis';
    @ViewChild(GraphSection) graph: GraphSection;

    handleRouteUpdate(e) {
        console.log("Route updated?")
        this.graph.updateData(e);
        console.log(e)
    }
}
