import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../../model/Book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  book: Book;
  bookForm = this.fb.group({
    title: [''],
    author: [''],
    description: ['']
  });
  constructor(private fb: FormBuilder, private bookService: BookService, public route: Router) {}
  ngOnInit(): void {
  }
  onSubmit(){
    this.book = this.bookForm.value;
    try {
      this.bookService.add(this.book).subscribe(data => {
        this.route.navigate(['']);
        this.bookForm.reset();
        alert('successfully');
      });
    }catch (e) {
      alert(e);
    }
  }
}
