import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit, OnDestroy {

  constructor(private activatedroute: ActivatedRoute) { }
  item1;
  item2;
  mysub: Subscription;

  mysub2: Subscription;
  counter = 0;
  myobser: Observable<any>;
  ngOnInit() {
    // this.item1 = this.activatedroute.snapshot.params['id']
    // this.item2 = this.activatedroute.snapshot.params['id2']

    this.mysub = this.activatedroute.params.subscribe((params) => {
      this.item1 = params['id'];
      this.item2 = params['id2'];
    })
    debugger
    let x = this.activatedroute.queryParamMap
    this.myobser = new Observable((obsever) => {
      setInterval(() => {
        this.counter++;
        obsever.next(this.counter);
      }, 1000)
    })

    this.mysub2 = this.myobser.subscribe((data) => {
      console.log(data);
    })




  }

  ngOnDestroy() {
    this.mysub.unsubscribe();
    this.mysub2.unsubscribe();
  }

}
