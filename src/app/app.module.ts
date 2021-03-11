import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DataService } from './services/data.service';
import { MytestService } from './services/mytest.service';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [AppComponent, HighlightDirective],
  imports: [BrowserModule, CustomModule, FormsModule, HttpClientModule],
  providers: [DataService, MytestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
