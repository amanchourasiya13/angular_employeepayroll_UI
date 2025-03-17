
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {
//   private employees: any[] = [];

//   getEmployees() {
//     return this.employees;
//   }

//   addEmployee(employee: any) {
//     this.employees.push(employee);
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Create a BehaviorSubject to hold the employees array
  private employeesSubject = new BehaviorSubject<any[]>([]);
  // Expose the observable for components to subscribe to
  employees$ = this.employeesSubject.asObservable();

  // Get the current value (if needed elsewhere)
  getEmployees() {
    return this.employeesSubject.getValue();
  }

  addEmployee(employee: any) {
    const currentEmployees = this.getEmployees();
    // Emit a new array that includes the new employee
    this.employeesSubject.next([...currentEmployees, employee]);
  }

  // Optionally, add methods for delete or update if needed
}
