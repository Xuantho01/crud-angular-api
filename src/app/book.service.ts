import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlFood = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient){}
  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.urlFood);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.urlFood}/${id}`);
  }
  update(book: Book): Observable<Book>{
    // console.log(book);
    return this.httpClient.put<Book>(`${this.urlFood}/${book.id}`, book);
  }
  add(book: Book): Observable<Book>{
    // console.log(book);
    return this.httpClient.post<Book>(`${this.urlFood}`, book);
  }
  delete(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${this.urlFood}/${id}`);
  }
}
