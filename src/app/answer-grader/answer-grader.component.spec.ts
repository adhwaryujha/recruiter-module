import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerGraderComponent } from './answer-grader.component';

describe('AnswerGraderComponent', () => {
  let component: AnswerGraderComponent;
  let fixture: ComponentFixture<AnswerGraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerGraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerGraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
