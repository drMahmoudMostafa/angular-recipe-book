import { AuthGuard } from './shared/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './register/success/success.component';
import { FormComponent } from './register/form/form.component';

const appRoutes: Routes = [
    {path: '', component: RegisterComponent, canActivate: [AuthGuard], children: [
      {path: 'welcome', component: SuccessComponent},
      {path: 'logIn', component: FormComponent, data: {loginMode: 'logIn'}},
      {path: 'signUp', component: FormComponent, data: {loginMode: 'signUp'}},
      {path: '', redirectTo: '/logIn', pathMatch: 'full'}
    ]},
    {path: '',  loadChildren: 'app/app-main/app-main.module#AppMainModule', canLoad: [AuthGuard], pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
