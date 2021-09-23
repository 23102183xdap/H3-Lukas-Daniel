import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book/book.module';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books?: Array<any>;
  constructor(private api: BookService) {}

  ShowBooks() {
    this.api.GetBooks().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }

  ngOnInit(): void {
    this.ShowBooks();
  }
}
