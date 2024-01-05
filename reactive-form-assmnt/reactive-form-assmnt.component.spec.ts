import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAssmntComponent } from './reactive-form-assmnt.component';

describe('ReactiveFormAssmntComponent', () => {
  let component: ReactiveFormAssmntComponent;
  let fixture: ComponentFixture<ReactiveFormAssmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAssmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAssmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
