import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
// @ Input() item="";
@ Input() item:{name:string,age:number,email:string}={name:   '',age:0,email:''};

@ Output() updateDataEvent= new EventEmitter<string>();   
}
