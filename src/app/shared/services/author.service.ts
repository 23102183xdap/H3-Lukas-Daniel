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
    return this.http.get<Author[]>(`${this.baseUrl}/`);
  }

  public GetAuthorByID(authorId?: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/id/${authorId}`);
  }

  public GetAuthorByName(firstname?: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/firstname/${firstname}`);
  }

  public DeleteAuthor(authorId?: number): Observable<Author> {
    return this.http.delete<Author>(`${this.baseUrl}/delete/${authorId}`);
  }
  public CreateAuthor(data: any): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}/create`, data);
  }

  public UpdateAuthor(data: any, id?: number): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}/update/${id}`, data);
  }

}
