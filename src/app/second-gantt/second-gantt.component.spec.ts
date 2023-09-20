import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGanttComponent } from './second-gantt.component';

describe('SecondGanttComponent', () => {
  let component: SecondGanttComponent;
  let fixture: ComponentFixture<SecondGanttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondGanttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
