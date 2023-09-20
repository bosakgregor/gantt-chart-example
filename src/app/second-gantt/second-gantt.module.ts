import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondGanttComponent } from './second-gantt.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecondGanttComponent,
      },
    ]),
  ],
  declarations: [SecondGanttComponent],
})
export class SecondGanttModule {}
