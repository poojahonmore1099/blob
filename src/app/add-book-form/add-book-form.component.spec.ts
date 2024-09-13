import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookFormComponent } from './add-book-form.component';
import { HttpClientModule } from '@angular/common/http';
describe('AddBookFormComponent', () => {
  let component: AddBookFormComponent;
  let fixture: ComponentFixture<AddBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookFormComponent,HttpClientModule],
     
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
