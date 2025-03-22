
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService } from '../../services/employee.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-employee-payroll-form',
//   standalone: true,
//   imports: [],
//   templateUrl: './employee-payroll-form.component.html',
//   styleUrls: ['./employee-payroll-form.component.css']
// })
// export class PayrollFormComponent {
//   payrollForm: FormGroup;

//   constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
//     this.payrollForm = this.fb.group({
//       name: ['', Validators.required],
//       profileImage: [''],
//       gender: ['', Validators.required],
//       department: ['', Validators.required],
//       salary: ['', Validators.required],
//       startDate: ['', Validators.required],
//       notes: ['']
//     });
//   }

//   onSubmit() {
//     if (this.payrollForm.valid) {
//       this.employeeService.addEmployee(this.payrollForm.value);
//       alert('Employee added successfully!');
//       this.router.navigate(['/']); // Redirect to employee details page
//     } else {
//       alert('Please fill all required fields.');
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-payroll-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Ensure ReactiveFormsModule is imported
  templateUrl: './employee-payroll-form.component.html',
  styleUrls: ['./employee-payroll-form.component.css']
})
export class PayrollFormComponent {
  payrollForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.payrollForm = this.fb.group({
      name: [''],
      profileImage: [''],
      gender: [''],
      department: [''],
      salary: [''],
      startDate: [''],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.payrollForm.valid) {
      this.employeeService.addEmployee(this.payrollForm.value);
      alert('Employee added successfully!');
      this.router.navigate(['/']); // Navigate back to employee list
    }
  }
}
