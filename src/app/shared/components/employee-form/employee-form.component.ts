import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.interface';
import { EmployeeFormModule } from 'src/app/shared/components/employee-form/employee-form.module';
import { EmployeesService } from 'src/app/pages/employees/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;
  employeeForm!: FormGroup;

  constructor(private router: Router, private fb:FormBuilder, private employeesSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee)
    }
  }

  onSave():void {
    console.log('Saved', this.employeeForm.value)
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      startDate: ['', [Validators.required]]
    })
  }

}
