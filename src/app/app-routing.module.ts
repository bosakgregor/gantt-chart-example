import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'news',
    title: 'Breaking News',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'gantt',
    loadChildren: () =>
      import('./gantt/gantt.module').then((m) => m.GanttModule),
  },
  {
    path: 'second-gantt',
    loadChildren: () =>
      import('./second-gantt/second-gantt.module').then(
        (m) => m.SecondGanttModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
