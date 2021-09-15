import { BookService } from './../shared/services/book.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.scss']
})
export class BooktestComponent implements OnInit {

  // create book form
  createBookForm = new FormGroup({
    title: new FormControl(),
    pages: new FormControl(),
  })

  submitBook(title: string, pages: string) {
    const data = {
      title: title,
      pages: pages,
    }

    console.log(data);
    this.api.CreateBook(data).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log(error);
    });
  }

  //


  books?: Array<any>;

  constructor(public api: BookService) { }

  ngOnInit(): void {
    // Get all books
    this.api.GetBooks().subscribe(data => {
      console.log(data)
      this.books = data;
    });
  }
}
