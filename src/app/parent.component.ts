import { Component } from "@angular/core";

@Component({
    selector: 'app-parent',
    template: '<h3>This is Parent Component</h3> <app-child></app-child>'
})
export class ParentComponent { }