import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingTestComponent } from './event-binding-test.component';

describe('EventBindingTestComponent', () => {
  let component: EventBindingTestComponent;
  let fixture: ComponentFixture<EventBindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
