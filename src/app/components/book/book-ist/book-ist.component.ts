import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book/book.module';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-ist',
  templateUrl: './book-ist.component.html',
  styleUrls: ['./book-ist.component.scss'],
})
export class BookIstComponent implements OnInit {
  books!: Array<Book>;
  constructor(private api: BookService) {}

  ngOnInit(): void {
    this.api.GetBooks().subscribe;
  }
}
