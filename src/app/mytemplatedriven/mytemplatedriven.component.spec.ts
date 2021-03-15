import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytemplatedrivenComponent } from './mytemplatedriven.component';

describe('MytemplatedrivenComponent', () => {
  let component: MytemplatedrivenComponent;
  let fixture: ComponentFixture<MytemplatedrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytemplatedrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytemplatedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
