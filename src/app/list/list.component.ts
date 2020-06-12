import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../../model/Book';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  book: Book;
  bookList: Book[];
  constructor(private bookService: BookService, private route: Router) {}
  ngOnInit(){
    this.bookService.getAll().subscribe(result => {
      console.log(result);
      this.bookList = result;
    }, err => {console.log(err); });
  }
  onclick(id: number){
    this.bookService.delete(id).subscribe(() => {
      alert('delete successfully');
      this.route.navigate(['']);
    },
      error => console.log(error));
  }
}
