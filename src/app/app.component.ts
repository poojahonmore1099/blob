import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { LoginComponent } from "./user-auth/login/login.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { ConvertRupeePipe } from './pipes/convert-rupee.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceService } from './services/book-service.service';
import { HttpClient } from '@angular/common/http';
import { AddBookFormComponent } from "./add-book-form/add-book-form.component";
import { RouterLink } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadComponent,RouterLink,HttpClientModule, RouterOutlet, DemoComponent, LoginComponent, UserAuthModule, CommonModule, HeaderComponent, FormsModule, MatSlideToggleModule, ChildComponent, ConvertRupeePipe, AddBookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blob';
  inputValue='';
  users=["pooja","megha","darshan","omkar"];
  userDetails=[
    {name:"pooja",age:25,city:"pune",socialAccounts:["facebook","insta"]},
    {name:"megha",age:26,city:"mumbai",socialAccounts:["facebook","insta"]},
    {name:"darshan",age:27,city:"kolhapur",socialAccounts:["facebook","insta"]},
    {name:"omkar",age:28,city:"nagpur",socialAccounts:["facebook","insta"]}
  ];
color="";
formData:any={};
display=false;
dataToPssChild="data from from parent";
dataFromChild="x";

userData=[
  {
    name:"pooja",
    age:25,
    email:"pooja@gmail.com"
  },
  {
    name:"megha",
    age:23,
    email:"megha@gmail.com"
  },
  {
    name:"omkar",
    age:21,
    email:"omkar@gmail.com"
  }
]

  getName(name:any)
  {
   alert(name)
  }

  inputBoxEvents(val:any)
  {
    this.inputValue=val;
    console.log(val);
  }
  updatecolor()
  {
    this.color="red";
  }
  getData(data:NgForm)
  {
    this.formData=data;
    console.warn(data);
  }
  toggle()
  {
    this.display=!this.display;
  }



  getDataFromChild(data:string)
  {
    this.dataFromChild=data;
  }
  


 
  }


