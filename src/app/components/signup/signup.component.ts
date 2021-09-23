import { AuthService } from './../../shared/services/auth.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';

export class ErrorState implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  email = new FormControl();
  password = new FormControl();
  matcher = new ErrorState();

  signupForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
