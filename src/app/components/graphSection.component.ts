import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Graph } from './graph.component';

@Component({
    selector: 'graphsection',
    templateUrl: './templates/graphSection.component.html',
    styleUrls: ['./styles/graphSection.component.scss']
})

export class GraphSection {
    @ViewChild(Graph) graph: Graph;

    updateData(routes) {
        console.log("update the data")
        this.graph.drawGraph(routes);
    }
}