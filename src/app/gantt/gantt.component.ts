import { Component, OnInit } from '@angular/core';
import 'anychart';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
})
export class GanttComponent implements OnInit {
  data = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart(): void {
    const chart: anychart.charts.Gantt = anychart.ganttResource();
    chart.fitAll();
    chart.credits().enabled(false);
    chart.animation(false);
    const treeData = anychart.data.tree(this.data, 'as-tree');
    chart.data(treeData);
    chart.container('container');
    chart.draw();
  }
}
