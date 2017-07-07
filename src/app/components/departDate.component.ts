import { Component, Input } from '@angular/core';

@Component({
    selector: 'departdate',
    templateUrl: './templates/departDate.component.html',
    styleUrls: ['./styles/departDate.component.scss']
})

export class DepartDate {
    selectedDate: string = new Date().toLocaleDateString('en-GB');
    
    changeDate(val) {
        console.log(new Date(this.selectedDate).toLocaleDateString('en-GB'))
    }
}