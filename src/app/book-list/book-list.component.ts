import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookServiceService } from '../services/book-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books:any;
  // api call
  constructor(private bookaData:BookServiceService,private router:Router)
  {
    bookaData.books().subscribe((data)=>{
      this.books=data;
      console.warn(this.books);
    })
  }

  deleteBookById(id:any)
  {
    this.bookaData.deleteBook(id).subscribe({
      next: (data) => {
        console.log(data);
      
       this.bookaData.books().subscribe((data)=>{
        this.books=data;
       });
      },
      error: (error) => console.error(error)
    }
    )
  }
 
}
