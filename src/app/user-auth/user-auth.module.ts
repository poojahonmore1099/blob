import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginComponent,
    FormsModule
  ],
  exports:[
    LoginComponent
  ],
})
export class UserAuthModule { }
