import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { TaskComponent } from './task/task.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';


const appRoutes: Routes = [
  { path: 'parent', component: ParentComponent },
  {
    path: 'task', children: [
      { path: '', component: TaskComponent },
      { path: 'tasldetails/:id:id2', component: TaskdetailsComponent }
    ]
  },

  { path: 'customer', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];
@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
