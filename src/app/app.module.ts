import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

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
  imports: [BrowserModule, CustomModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
