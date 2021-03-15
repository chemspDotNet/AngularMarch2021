// import { Component } from '@angular/core';

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";
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
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  task = 'task';
  dataItems = [];
  dataItems1;
  testData;

  mycustomObs: Observable<any>;
  counter = 0;

  customers = ['John', 'Mary', 'Bob'];
  custName = 'Sam';

  constructor(private dataService: DataService,
    private mytest: MytestService, private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit() {

    let mess = this.dataService.sayHello();

    this.mycustomObs = new Observable((obsever) => {   // custom Observable
      setInterval(
        () => {
          this.counter++;
          obsever.next(this.counter);

          if (this.counter == 3) {
            obsever.complete();
          }

          if (this.counter == 2) {
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


  navigate() {
    this.router.navigate(['taskdetail', 100, 200], { queryParams: { 'city': 'London' } });
  }



  doLogin() {
    this.authservice.login();
  }

  doLogOut() {
    this.authservice.logout();
  }
}