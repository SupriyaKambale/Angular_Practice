import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentObjectPassComponent } from './child-to-parent-object-pass.component';

describe('ChildToParentObjectPassComponent', () => {
  let component: ChildToParentObjectPassComponent;
  let fixture: ComponentFixture<ChildToParentObjectPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentObjectPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentObjectPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
