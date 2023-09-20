import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GanttComponent } from './gantt.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GanttComponent,
      },
    ]),
  ],
  declarations: [GanttComponent],
})
export class GanttModule {}
