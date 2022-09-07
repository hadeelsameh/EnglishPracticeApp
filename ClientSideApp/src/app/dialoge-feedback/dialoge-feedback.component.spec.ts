import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeFeedbackComponent } from './dialoge-feedback.component';

describe('DialogeFeedbackComponent', () => {
  let component: DialogeFeedbackComponent;
  let fixture: ComponentFixture<DialogeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
