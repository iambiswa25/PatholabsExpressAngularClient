import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegdComponent } from './admin-regd.component';

describe('AdminRegdComponent', () => {
  let component: AdminRegdComponent;
  let fixture: ComponentFixture<AdminRegdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
