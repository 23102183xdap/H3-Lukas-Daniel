import { AuthorService } from './../../../shared/services/author.service';
import { Component, OnInit } from '@angular/core';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { Author } from 'src/app/shared/models/author/author.module';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {


  authors?: Array<any>;

  constructor(public api: AuthorService ) { }

  ngOnInit(): void {
    // Get all authors
    this.api.GetAuthors().subscribe( data => {
      console.log(data)
      this.authors = data;
    });

  }

}
