import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrystatedrpComponent } from './countrystatedrp.component';

describe('CountrystatedrpComponent', () => {
  let component: CountrystatedrpComponent;
  let fixture: ComponentFixture<CountrystatedrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrystatedrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrystatedrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
