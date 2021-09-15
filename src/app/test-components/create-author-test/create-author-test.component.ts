import { AuthorService } from '../../shared/services/author.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

  
@Component({
  selector: 'app-create-author-test',
  templateUrl: './create-author-test.component.html',
  styleUrls: ['./create-author-test.component.scss']
})
export class CreateAuthorTestComponent implements OnInit {

  createAuthorForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  })

  submitAuthor(firstName: string, lastName: string){
    const data = {
      firstname: firstName,
      lastname: lastName,
    }

    console.log(data);
    this.api.CreateAuthor(data).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log(error);
    });
  }

  constructor(public api: AuthorService) { }

  ngOnInit(): void {
  }

}
