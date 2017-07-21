import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';

@Component({
  selector: 'qoe-slider',
  templateUrl: './templates/qoeSlider.component.html',
  styleUrls: ['./styles/qoeSlider.component.scss']
})

export class QoESliderComponent {
    @Input('percentage') percentage: number;
    @Input('name') name: string;
    @Input('id') id: string;
    @Input('tooltip') tooltip: string;

    /**
     * Changes the weight of a qoe parameter
     * @param val a percentage value
     */
    changeVal(val) {
        console.log(`id: ${this.id} val: ${this.percentage}`);
        AppModule.options.qoeParameters[this.id] = val;
        AppModule.options.save();
    }
}
