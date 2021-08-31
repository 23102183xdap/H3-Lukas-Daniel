import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author/author.module';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  
  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:8080/api/authors';

  public GetAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/`)
  }

  public GetAuthor(authorId?: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/author/${authorId}`)
  }

  public DeleteAuthor(authorId?: number): Observable<Author> {
    return this.http.delete<Author>(`${this.baseUrl}/authors/delete/${authorId}`)
  }  
  public CreateAuthor(data: any): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}/authors/create`, data)
  }

}
