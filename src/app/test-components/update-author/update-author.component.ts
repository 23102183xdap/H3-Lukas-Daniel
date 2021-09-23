import { Author } from './../../shared/models/author/author.module';
import { AuthorService } from './../../shared/services/author.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit {


  authors?: Array<any>;
  author?: any;
  isSelected?: boolean = false;

  constructor(public api: AuthorService) { }


  selectForm = new FormGroup({
    author: new FormControl(),
  })

  updateForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl()
  })

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.api.GetAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    })
  }

  selectAuthor(id?: string) {
    this.api.GetAuthorByID(id).subscribe(data => {
      console.log(data);
      this.author = data;
      this.isSelected = true;
    })
  }

  updateAuthor(firstname: string, lastname: string, ) {
    const data = {
      firstname: firstname,
      lastname: lastname,
    }
    this.api.UpdateAuthor(data, this.author?.id).subscribe(res => {
      console.log(res);
      this.isSelected = false;
      this.getAll();
    }, ((error: any) => {
      console.log(error.message);
    }));
  }

}
