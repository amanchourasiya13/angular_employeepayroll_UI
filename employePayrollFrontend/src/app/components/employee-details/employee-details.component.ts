


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-employee-details',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './employee-details.component.html',
//   styleUrls: ['./employee-details.component.css']
// })
// export class EmployeeDetailsComponent {
//   // For testing, we add static employee data.
//   employees: any[] = [
//     {
//       profileImage: 'assets/profile1.png',
//       name: 'John Doe',
//       gender: 'Male',
//       department: 'HR',
//       salary: 50000,
//       startDate: new Date('2023-01-15'),
//       notes: 'Hardworking and punctual'
//     },
//     {
//       profileImage: 'assets/profile2.png',
//       name: 'Jane Smith',
//       gender: 'Female',
//       department: 'Finance',
//       salary: 60000,
//       startDate: new Date('2023-02-20'),
//       notes: 'Great with numbers'
//     }
//   ];

//   // You can add functions for editing/deleting if needed.
//   editEmployee(emp: any) {
//     console.log('Edit Employee:', emp);
//   }

//   deleteEmployee(emp: any) {
//     this.employees = this.employees.filter(e => e !== emp);
//     console.log('Deleted Employee:', emp);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    // Subscribe to changes in the employee list
    this.employeeService.employees$.subscribe(data => {
      this.employees = data;
    });
  }

  navigateToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  editEmployee(emp: any) {
    console.log('Edit Employee:', emp);
  }

  deleteEmployee(emp: any) {
    // For example, remove the employee from the list
    this.employees = this.employees.filter(e => e !== emp);
    // If you implement deletion in your service, update it there as well.
    console.log('Deleted Employee:', emp);
  }
}
