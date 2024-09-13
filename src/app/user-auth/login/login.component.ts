import { Component } from '@angular/core';
import { FormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  loginForm=new FormGroup({
    name:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])  
      
    })

    loginUser()
    {
      console.log(this.loginForm.value);
    }
    get name()
    {
      return this.loginForm.get('name');
    }
    get password()
    {
      return this.loginForm.get('password');
    }
  userLogin(item:any)
  {
    console.log(item);
  }


}
