import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book/book.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:8080/api/books';

  public GetBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/`)
  }

  public GetBook(bookId?: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/book/${bookId}`)
  }

  public DeleteBook(bookId?: number): Observable<Book> {
    return this.http.delete<Book>(`${this.baseUrl}/delete/${bookId}`)
  }  
  public CreateBook(data: any): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/create`, data)
  }

}
