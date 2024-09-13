import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { 
    
  }
  books()
    {
      return this.http.get("http://localhost:9000/books")
    }

  saveBooks(data:any,header:any)
  {
   
      return this.http.post("http://localhost:9000/books",data,header)
  }
  deleteBook(id:any)
  {
      return this.http.delete("http://localhost:9000/books/"+id)
  }
  getBookById(id:any)
  {
    return this.http.get("http://localhost:9000/books/"+id);

  }
  getFiles()
  {
    return this.http.get<string[]>("http://localhost:9000/files");
  }
}
