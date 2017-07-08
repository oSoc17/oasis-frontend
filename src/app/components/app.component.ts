import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./styles/app.component.scss']
})

export class AppComponent {
    title = 'Oasis';

    handleRouteUpdate(e) {
        console.log('Route has been requested!')
        // TODO: Start the calculator...
        console.log(e)
    }
}
