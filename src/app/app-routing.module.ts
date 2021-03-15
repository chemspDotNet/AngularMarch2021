import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { MytemplatedrivenComponent } from './mytemplatedriven/mytemplatedriven.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { AuthGaurdSerivce } from './services/auth-gaurd.service';
import { TaskComponent } from './task/task.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';


const appRoutes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'template-driven', component: MytemplatedrivenComponent, canActivate: [AuthGaurdSerivce] },
  { path: 'reactive', component: MyreactiveComponent },
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

//{   path:'', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }