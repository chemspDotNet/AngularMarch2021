import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  message =
    [
      { "name": "New Class1" },
      { "name": "New Class2" },
      { "name": "New Class3" },
      { "name": "New Class4" }
    ];
  flag = false;
  inputVal = '';
  inputVal2 = 'fsdfsdfsdfs';

  @Input()
  couterInChild = 0;

  countertoPasstoParent = 0;

  @Output() counterchanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }


  ngOnInit() {
    // call backend

  }

  ngOnDestroy() {

    // cleanupwork
  }

  getMessage() {

  }

  toggle() {
    this.flag = !this.flag;
  }

  setValue(val) {

    this.inputVal = val;
  }


  increment() {
    this.countertoPasstoParent++;
    this.counterchanged.emit(this.countertoPasstoParent);

  }



  decrement() {
    this.countertoPasstoParent--;

    this.counterchanged.emit(this.countertoPasstoParent);
  }

}
