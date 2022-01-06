import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../../shared/models/employee.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees: Observable<Employee[]> | undefined;

  private employeesCollection: AngularFirestoreCollection<Employee>;

  constructor( private readonly afs:AngularFirestore ) {
    this.employeesCollection = afs.collection<Employee>('employees');
    this.getEmployees();
   }


   onDeleteEmployee ( empId: string): Promise<void>{}

   onSaveEmployee ( employee: Employee, empId: string): Promise<void> {
     return new Promise ( async ( resolve, reject) => {
       try {
          const id = empId || this.afs.createId();
          const data = {id, ...employee};
          const result = await this.employeesCollection.doc(id).set(data);
          resolve(result);


       } catch (err) {
         reject(err.message)
       }
     })
   }



   private getEmployees(): void {
    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Employee))
    );
   }



}
