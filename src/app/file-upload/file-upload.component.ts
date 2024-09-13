import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', this.selectedFile?.name);
    }
  }

  // onSubmit() {
  
  //   if (this.selectedFile?.name) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile);
  
  //     // Post the file to the backend API
  //     this.http.post('http://localhost:9000/upload-file', formData).subscribe({
  //       next: (response: any) => {
  //         console.log("Response:", response);
  
  //         // Success notification
  //         // this.toastr.success('File uploaded successfully!', 'Success');
  //         alert('File uploaded successfully!');
  //       },
  //       error: (error) => {
  //         // Error handling and notification
  //         console.error("Error:", error);
  
  //         // Notify the user of the error
  //         // this.toastr.error('File upload failed. Please try again.', 'Error');
  //         alert('File upload failed. Please try again.');
  //       }
  //     });
  //   } else {
  //     console.error('No file selected!');
  //     alert('No file selected. Please choose a file to upload.');
  //   }
  // }
  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
  
      // Set responseType to 'text' to handle non-JSON responses
      this.http.post('http://localhost:9000/upload-file', formData, { responseType: 'text' }).subscribe({
        next: (response: string) => {
          console.log("Response:", response);
          alert('File uploaded successfully!');
        },
        error: (error) => {
          console.error("Error:", error);
          alert('File upload failed. Please try again.');
        }
      });
    } else {
      console.error('No file selected!');
      alert('No file selected. Please choose a file to upload.');
    }
  }
  
}
