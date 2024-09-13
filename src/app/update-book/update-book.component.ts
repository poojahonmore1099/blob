import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../services/book-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  bookId:any;
  bookData = {
    bookTitle: '',
    subTitle: '',
    price: '',
    id:0,
    titleId:''

  };

  constructor(private router:ActivatedRoute,private route:Router,private booksData:BookServiceService)
  {

  }
  ngOnInit(): void {
    this.bookId = this.router.snapshot.params['id'];
    if(this.bookId)
    {
      this.loadData(this.bookId);
    }
    throw new Error('Method not implemented.');
  }
 
  loadData(id:any)
  {
    this.booksData.getBookById(id).subscribe({
      next: (result:any) => {
        this.bookData.bookTitle=result.title.title;
        this.bookData.id=result.id;
        this.bookData.price=result.price;
        this.bookData.subTitle=result.title.subTitle;
        this.bookData.titleId=result.title.id;
        console.log("Response loaded data:", result);
       
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  updateBook(data:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const formData = [
      {
        id:this.bookData.id,
        title: {
          id:this.bookData.titleId,
          title:data.bookTitle,
          subTitle: data.subTitle
        },
        price: data.price
      }
    ];

    this.booksData.saveBooks(formData[0], { headers }).subscribe({
      next: (result) => {
        console.log("Response:", result);
        this.route.navigate(['/bookList'])
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }

  
}
