import { AuthGuardService } from './shared/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: 'logIn', component: RegisterComponent, data: {loginMode: 'logIn'}},
    {path: '',  loadChildren: 'app/app-main/app-main.module#AppMainModule' , canActivate: [AuthGuardService]}
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
