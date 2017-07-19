import { Component, forwardRef, Input } from '@angular/core';

import { AppModule } from '../../app.module';

@Component({
    selector: 'time-choice',
    templateUrl: './templates/timeChoice.component.html',
    styleUrls: ['./styles/timeChoice.component.scss']
})

export class TimeChoiceComponent {

    @Input('time') time: number;
    @Input('name') name: string;
    @Input('id') id: string;
    @Input('tooltip') tooltip: string;
    @Input('unit') unit: string;

    /**
     * Changes the weight of a qoe parameter
     * @param val a percentage value
     */
    changeVal(val) {
        console.log(`id: ${this.id} val: ${this.time}`);
        AppModule.options.qoeParameters[this.id] = val;
        AppModule.options.save();
    }
}
