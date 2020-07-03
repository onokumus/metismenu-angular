import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetismenuAngularComponent } from './metismenu-angular.component';

describe('MetismenuAngularComponent', () => {
  let component: MetismenuAngularComponent;
  let fixture: ComponentFixture<MetismenuAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetismenuAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetismenuAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
