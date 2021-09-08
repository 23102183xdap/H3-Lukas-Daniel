import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {

  @Input() author_firstName : any;
  @Input() author_lastName : any;
  @Input() author_id : any;

  authorImgUrl?: string;

  Author: any = {
    "firstName": "",
    "lastName": "",
    "id": "",
  }

  constructor() { 
    var height = Math.floor(Math.random() * 100) + 301;
    this.authorImgUrl = `https://picsum.photos/400/${height}`; // this url is a test url
  }

  ngOnInit(): void {
    this.Author.firstName = this.author_firstName;
    this.Author.lastName = this.author_lastName;
    this.Author.id = this.author_id;

  }
}
