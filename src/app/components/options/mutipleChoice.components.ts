import { Component, Input } from '@angular/core';

import { AppModule } from '../../app.module';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'multiple-choice',
    templateUrl: './templates/multipleChoice.component.html',
    styleUrls: ['./styles/multipleChoice.component.scss'],
    viewProviders: [MdIconRegistry]
})

export class MultipleChoiceComponent {
    @Input('choice') choice: number;
    @Input('name') name: string;
    @Input('id') id: string;
    @Input('tooltip') tooltip: string;

    constructor(iconReg: MdIconRegistry, sanitizer: DomSanitizer) {
        iconReg.addSvgIcon('test', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/test.svg'));
    }

    /**
     * Changes the weight of a qoe parameter
     * @param val a percentage value
     */
    changeVal(val) {
        this.choice = val;
        console.log(`id: ${this.id} val: ${this.choice}`);
        AppModule.options.qoeParameters[this.id] = this.choice;
        AppModule.options.save();
    }

}
