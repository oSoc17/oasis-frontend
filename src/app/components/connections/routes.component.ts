// Node modules
import { Component,  Input } from '@angular/core';

// Custom modules
import { QoE } from '../../classes/connections/qoe';

@Component({
    selector: 'routes',
    templateUrl: './templates/routes.component.html'
})

/**
 * A list of route components
 */
export class Routes {
    @Input() qoeList: QoE[];
}
