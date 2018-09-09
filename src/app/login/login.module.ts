import { NgModule } from '@angular/core';

import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
})
export class LoginModule { }
