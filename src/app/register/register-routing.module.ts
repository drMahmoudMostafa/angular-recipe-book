import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';


const registerRoutes: Routes = [
    {path: 'register', children: [
      {path: 'welcome', component: SuccessComponent},
      {path: 'logIn', component: FormComponent, data: {loginMode: 'logIn'}},
      {path: 'signUp', component: FormComponent, data: {loginMode: 'signUp'}},
      {path: '', redirectTo: '/register/logIn', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
