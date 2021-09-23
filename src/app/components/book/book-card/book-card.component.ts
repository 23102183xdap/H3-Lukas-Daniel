import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book/book.module';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book_title: any;
  @Input() book_pages: any;
  @Input() book_series: any;
  @Input() book_popularity: any;
  @Input() book_publishDate: any;
  @Input() book_author: any;

  book: any;
  constructor() {}

  ngOnInit(): void {
    this.book = {
      title: this.book_title,
      pages: this.book_pages,
      series: this.book_series,
      popularity: this.book_popularity,
      publishDate: formatDate(this.book_publishDate, 'yyyy-dd-MM', 'en-US'),
      author: this.book_author,
    };
    console.log(this.book);
  }
}
