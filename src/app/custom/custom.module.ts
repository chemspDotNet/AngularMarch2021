import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "../child/child.component";
import { ParentComponent } from "../parent/parent.component";

@NgModule({
    declarations: [ParentComponent, ChildComponent],
    imports: [
        CommonModule, FormsModule
    ],
    exports: [ParentComponent, ChildComponent]
})
export class CustomModule { }