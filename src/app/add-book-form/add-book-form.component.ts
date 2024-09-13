import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../services/book-service.service';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ToastrModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css'
})
export class AddBookFormComponent {
 // post api


 books:any;
 // api call
 constructor(private bookaData:BookServiceService,private router:Router)
 {
   bookaData.books().subscribe((data)=>{
     this.books=data;
     console.warn(this.books);
   })
 }

 getBookFormData(data:any)
 {
   console.log("form data****",data.subTitle);
   
     const formData = [
       {
         title: {
           title:data.bookTitle,
           subTitle: data.subTitle
         },
         price: data.price
       }
     ];
     const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

     console.log("form data****$$$$$$",formData[0]);
     this.bookaData.saveBooks(formData[0], { headers }).subscribe({
      next: (result) => {
        console.log("Response:", result);
        this.router.navigate(['/bookList'])
        // this.toastr.success('Success message', 'Title');
      },
      error: (error) => {

        // this.toastr.success('Success message', 'Title');
        console.error("Error:", error);
      }
    });
  
 }
}
