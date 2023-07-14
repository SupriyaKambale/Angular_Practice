import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormAsmntComponent } from './template-driven-form-asmnt.component';

describe('TemplateDrivenFormAsmntComponent', () => {
  let component: TemplateDrivenFormAsmntComponent;
  let fixture: ComponentFixture<TemplateDrivenFormAsmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormAsmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormAsmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
