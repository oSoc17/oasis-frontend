import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';

@Component({
    selector: 'multiple-choice',
    templateUrl: './templates/multipleChoice.component.html',
    styleUrls: ['./styles/multipleChoice.component.scss']
})

export class MultipleChoiceComponent {
    @Input('choice') choice: number;
    @Input('name') name: string;
    @Input('id') id: string;
    @Input('tooltip') tooltip: string;

    /**
     * Changes the weight of a qoe parameter
     * @param val a percentage value
     */
    changeVal(val) {
        console.log(`id: ${this.id} val: ${this.choice}`);
        AppModule.options.qoeParameters[this.id] = val;
        AppModule.options.save();
    }

    isSelected(val) {
        return val === this.choice;
    }
}
