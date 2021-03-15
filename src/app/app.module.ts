import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DataService } from './services/data.service';
import { MytestService } from './services/mytest.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GreetPipe } from './greet.pipe';
import { TaskdetailsComponent } from './task/taskdetails/taskdetails.component';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { MytemplatedrivenComponent } from './mytemplatedriven/mytemplatedriven.component';
import { AuthService } from './services/auth.service';
import { AuthGaurdSerivce } from './services/auth-gaurd.service';

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
  declarations: [
    AppComponent,
    HighlightDirective,
    TaskComponent,
    NotfoundComponent,
    GreetPipe,
    TaskdetailsComponent,
    MyreactiveComponent,
    MytemplatedrivenComponent],
  imports: [
    BrowserModule,
    CustomModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [DataService, MytestService, AuthService, AuthGaurdSerivce],
  bootstrap: [AppComponent],
})
export class AppModule { }
