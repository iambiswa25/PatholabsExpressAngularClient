import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedAppointmentComponent } from './booked-appointment.component';

describe('BookedAppointmentComponent', () => {
  let component: BookedAppointmentComponent;
  let fixture: ComponentFixture<BookedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
