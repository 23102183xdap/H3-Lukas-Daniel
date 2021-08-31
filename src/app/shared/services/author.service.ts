import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author/author.module';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  
  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:5001/api';

  public GetAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/Author/GetAuthors`)
  }

  public GetAuthor(authorId?: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/Author/GetAuthor/${authorId}`)
  }

  public DeleteAuthor(authorId?: number): Observable<Author> {
    return this.http.delete<Author>(`${this.baseUrl}/Author/DeleteAuthor/${authorId}`)
  }

}
