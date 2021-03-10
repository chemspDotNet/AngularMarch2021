import { Component, OnInit, ViewChild } from "@angular/core";
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
    CounterInParent = 0;

    showdata = true;
    CounterFromChild = 0;

    incrementCounter() {
        this.CounterInParent++;
    }

    @ViewChild(ChildComponent, { static: true }) mychildcomponent: ChildComponent;

    @ViewChild('myinput', { static: true }) myinput;

    ngOnInit() {

        let xyz = this.mychildcomponent;

        let x = this.myinput;
    }

    myEventHandler(val: any) {
        this.CounterFromChild = val;
    }

    toggle() {
        this.showdata = !this.showdata;
    }
}