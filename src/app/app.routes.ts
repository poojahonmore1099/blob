import { Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { DemoComponent } from './demo/demo.component';
import { ChildComponent } from './child/child.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ShowFilesComponent } from './show-files/show-files.component';

export const routes: Routes = [
    {
        path:'bookList',
        component:BookListComponent
    },
   
    // {
    //     path:'**',
    //     component:NoPageComponent
    // },
    {
        path:'addBook',
        component: AddBookFormComponent
    },
    {
        path:'uploadFile',
        component: FileUploadComponent
    },
    {
        path:'viewFile',
        component: ShowFilesComponent
    },
    // {
    //     path:'',
    //     component:AppComponent
    // }
    {
        path:'update/:id',
        component:UpdateBookComponent
    },
    // { path: '', redirectTo: '/books', pathMatch: 'full' }
];


