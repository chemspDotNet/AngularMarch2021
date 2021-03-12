import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DataService } from './services/data.service';
import { MytestService } from './services/mytest.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GreetPipe } from './greet.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// const appRoutes: Routes = [
//   { path: 'parent1', component: ParentComponent },
//   { path: 'task1', component: TaskComponent },
//   { path: '', redirectTo: '/parent1', pathMatch: 'full' },
//   { path: '**', component: NotfoundComponent },

// ]

@NgModule({
  declarations: [AppComponent, HighlightDirective, TaskComponent, NotfoundComponent, GreetPipe, TaskdetailsComponent],
  imports: [
    BrowserModule,
    CustomModule,
    FormsModule,
    HttpClientModule,
    //  RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [DataService, MytestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
