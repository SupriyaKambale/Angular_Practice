import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifexComponent } from './ngifex.component';

describe('NgifexComponent', () => {
  let component: NgifexComponent;
  let fixture: ComponentFixture<NgifexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
