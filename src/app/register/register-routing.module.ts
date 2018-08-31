import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';


const registerRoutes: Routes = [
    {path: 'logIn', component: RegisterComponent, data: {loginMode: 'logIn', animation: 'LogInPage'}},
    {path: 'signUp', component: RegisterComponent, data: {loginMode: 'signUp', animation: 'SignUpPage'}}
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
