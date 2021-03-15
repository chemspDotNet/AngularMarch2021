import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreactiveComponent } from './myreactive.component';

describe('MyreactiveComponent', () => {
  let component: MyreactiveComponent;
  let fixture: ComponentFixture<MyreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
