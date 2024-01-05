import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAgeCalculatorComponent } from './service-age-calculator.component';

describe('ServiceAgeCalculatorComponent', () => {
  let component: ServiceAgeCalculatorComponent;
  let fixture: ComponentFixture<ServiceAgeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAgeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAgeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
