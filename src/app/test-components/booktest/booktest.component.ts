import { AuthorService } from '../../shared/services/author.service';
import { BookService } from '../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.scss']
})
export class BooktestComponent implements OnInit {


  books?: Array<any>;
  authorsList?: Array<any>;

  constructor(public bapi: BookService, public aapi: AuthorService) { }

  // create book form
  createBookForm = new FormGroup({
    title: new FormControl(),
    pages: new FormControl(),
    publishDate: new FormControl(),
    authors: new FormControl(),
    coverLink: new FormControl(),
  });

  submitBook(title: string, pages: string, publishDate: string, authors: string[]) {

    let nPublish = new Date(publishDate);
    const data = {
      title: title,
      pages: pages,
      publishDate: nPublish,
      author: authors,
    }

    console.log(data);
    this.bapi.CreateBook(data).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.ShowAuthors();
    this.ShowBooks();
  }

  ShowAuthors() {
    this.aapi.GetAuthors().subscribe(data => {
      console.log(data)
      this.authorsList = data;
    });
  }

  ShowBooks() {
    this.bapi.GetBooks().subscribe(data => {
      console.log(data)
      this.books = data;
    });
  }
}
