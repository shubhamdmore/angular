import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exp2Component } from './exp2.component';

describe('Exp2Component', () => {
  let component: Exp2Component;
  let fixture: ComponentFixture<Exp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
