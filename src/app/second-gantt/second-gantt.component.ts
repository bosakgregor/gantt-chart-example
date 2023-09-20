import { Component, OnInit } from '@angular/core';
import 'anychart';

@Component({
  selector: 'app-second-gantt',
  templateUrl: './second-gantt.component.html',
  styleUrls: ['./second-gantt.component.scss'],
})
export class SecondGanttComponent implements OnInit {
  data = []

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
    chart.container('secondContainer');
    chart.draw();
  }
}
