

// import { Routes } from '@angular/router';
// import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
// import { PayrollFormComponent } from './components/employee-payroll-form/employee-payroll-form.component';

// export const routes: Routes = [
//   { path: '', component: EmployeeDetailsComponent }, // Default Route
//   { path: 'add-employee', component: PayrollFormComponent }, // Add Employee Route
// ];


import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { PayrollFormComponent } from './components/employee-payroll-form/employee-payroll-form.component';

export const routes: Routes = [
  { path: '', component: EmployeeDetailsComponent }, // Home Page
  { path: 'add-employee', component: PayrollFormComponent } // Add Employee Page
];
