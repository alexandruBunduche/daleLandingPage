import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPickerComponent } from './skills-picker.component';

describe('SkillsPickerComponent', () => {
  let component: SkillsPickerComponent;
  let fixture: ComponentFixture<SkillsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
