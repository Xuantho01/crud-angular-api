import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(next => {this.book = next; },
      error => {
        console.log('nuhnhn');
        this.book = null;
      });
  }
}
