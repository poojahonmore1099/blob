import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-show-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-files.component.html',
  styleUrl: './show-files.component.css'

})
export class ShowFilesComponent implements OnInit { 
  fileUrls: string[] = [];

  constructor(private fileService:BookServiceService) {}

  ngOnInit(): void {
    this.loadFiles();
  }
loadFiles(): void {
    this.fileService.getFiles().subscribe((urls: string[]) => {
      this.fileUrls = urls;
    },
    
    (error) => {
      console.error('Failed to load files', error);
    })
    
  } 

}
