import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
    EmployeeFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
