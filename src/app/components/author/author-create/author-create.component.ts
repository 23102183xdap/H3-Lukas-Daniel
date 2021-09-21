import { FormGroup, FormControl } from '@angular/forms';
import { AuthorService } from './../../../shared/services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {


  createAuthor = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  });

  constructor(public api: AuthorService) { }

  ngOnInit(): void {
  }

  submitAuthor(firstName: string, lastName: string) {
    const data = {
      firstname: firstName,
      lastName: lastName,
    }

    this.api.CreateAuthor(data).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log(error);
    });
  }
}
