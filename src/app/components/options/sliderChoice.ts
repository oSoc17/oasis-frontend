import { Component, forwardRef, Input } from '@angular/core';

import { AppModule } from '../../app.module';

@Component({
    selector: 'time-choice',
    templateUrl: './templates/sliderChoice.html',
    styleUrls: ['./styles/sliderChoice.component.scss']
})

export class TimeChoiceComponent {

    @Input('time') time: number;
    @Input('name') name: string;
    @Input('id') id: string;
    @Input('tooltip') tooltip: string;
    @Input('unit') unit: string;
    @Input('min') min: number;
    @Input('max') max: number;

    /**
     * Changes the weight of a qoe parameter
     * @param val a percentage value
     */
    changeVal(val) {
        if (val === null) {
            this.time = AppModule.options.qoeParameters[this.id];
            return;
        }
        if (val > this.max) {
            this.time =  this.max;
        } else if (val < this.min) {
            this.time = this.min;
        } else {
            this.time = val;
        }
        AppModule.options.qoeParameters[this.id] = this.time;
        AppModule.options.save();
    }
}
