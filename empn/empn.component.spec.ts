import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnComponent } from './empn.component';

describe('EmpnComponent', () => {
  let component: EmpnComponent;
  let fixture: ComponentFixture<EmpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
