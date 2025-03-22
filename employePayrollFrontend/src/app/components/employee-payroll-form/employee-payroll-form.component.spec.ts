import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollFormComponent } from './employee-payroll-form.component';

describe('EmployeePayrollFormComponent', () => {
  let component: EmployeePayrollFormComponent;
  let fixture: ComponentFixture<EmployeePayrollFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePayrollFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePayrollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
