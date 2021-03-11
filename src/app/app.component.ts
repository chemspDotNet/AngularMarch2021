// import { Component } from '@angular/core';

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./services/data.service";
import { MytestService } from "./services/mytest.service";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-first-app';
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: []
})
export class AppComponent implements OnInit {

  dataItems = [];
  dataItems1;
  testData;

  mycustomObs: Observable<any>;
  counter = 0;
  constructor(private dataService: DataService, private mytest: MytestService) { }

  ngOnInit() {

    let mess = this.dataService.sayHello();

    this.mycustomObs = new Observable((obsever) => {   // custom Observable
      setInterval(
        () => {
          this.counter++;
          obsever.next(this.counter);

          if (this.counter == 6) {
            obsever.complete();
          }

          if (this.counter == 4) {
            obsever.error('Something went wrong')
          }

        }, 1000);
    });

    this.mycustomObs.subscribe(    // subscribe custom observable

      (data) => {
        console.log(data);
      },

      (err) => {
        console.log(err);

      },

      () => {
        console.log('No more data');
      });



    this.mytest.getData().subscribe(
      (data) => {
        this.testData = data;
      },

      (error) => {
        console.log(error);
      },

      () => {
        console.log("I am finshed");
      });

    this.dataService.getstrings().subscribe((data) => {
      this.dataItems1 = data;
    });

    this.dataService.getDataArray().subscribe((data) => {

      this.dataItems.push(data);

      sessionStorage.setItem('token', 'asdasfsfsfdsfdsfdfgzfhgzdfhdhdfhdhdfhdfhdf')

    });
  }
}