import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfor2Component } from './ngfor2.component';

describe('Ngfor2Component', () => {
  let component: Ngfor2Component;
  let fixture: ComponentFixture<Ngfor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngfor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngfor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
