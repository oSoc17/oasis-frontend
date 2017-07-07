import { Component, Input } from '@angular/core';

@Component({
    selector: 'departtime',
    templateUrl: './templates/departTime.component.html',
    styleUrls: ['./styles/departTime.component.scss']
})

export class DepartTime {
    selectedTime: string = "00:00"
}