import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'journeydetail',
    templateUrl: './templates/journeyDetail.component.html',
    styleUrls: ['./styles/journeyDetail.component.scss']
})
export class JourneyDetail {
    connectionToProcessable = (conn:any) => {
        let res = {
            duration: conn.duration,
            stations: [conn.departure],
            occupancy: conn.occupancy
        };
        console.log(conn.vias.via);
        Array.prototype.push.apply(res.stations, conn.vias.via);
        res.stations.push(conn.arrival);
        return res;
    }
}