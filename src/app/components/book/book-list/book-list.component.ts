import { AuthorService } from './../../../shared/services/author.service';
import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Author } from 'src/app/shared/models/author/author.module';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  authors?: Author[];

  books: Array<any> = [
    {
      "Id": 1,
      "Name": "Harry Potter",
      "Type": "2nd",
      "Price": 20
    },
    {
      "Id": 2,
      "Name": "Game of Thrones",
      "Type": "3rd",
      "Price": 30
    },
    {
      "Id": 3,
      "Name": "C# For Dummies",
      "Type": "",
      "Price": 5,
    },
    {
      "Id": 4,
      "Name": "CA$H Stories",
      "Type": "",
      "Price": 2
    },
    {
      "Id": 5,
      "Name": "Dragon Ball",
      "Type": "",
      "Price": 50
    },
  ];

  constructor(public api: AuthorService ) { }

  ngOnInit(): void {

    this.api.GetAuthors().subscribe( data => {
      console.log(data)
      this.authors = data;
    });

  }

}
