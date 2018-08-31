import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    RegisterComponent,
    FormComponent,
    SuccessComponent
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
