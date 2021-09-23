import { CustomerService } from './../../shared/services/customer.service';
import { AuthService } from './../../shared/services/auth.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
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
  styleUrls: ['./signup.component.scss'],
  providers: []
})
export class SignupComponent implements OnInit {


  userData = JSON.parse(localStorage.getItem('user') || '{}')

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(24),
  ]);
  datepicker = new FormControl('', [
    Validators.required
  ]);
  firstname = new FormControl('', [
    Validators.required
  ]);
  lastname = new FormControl('', [
    Validators.required,
  ]);
  matcher = new ErrorState();

  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
    datepicker: this.datepicker,
    firstname: this.firstname,
    lastname: this.lastname,
  })

  constructor(public auth: AuthService, private customer: CustomerService) { }
  ngOnInit(): void {
  }

  async CreateCustomer(firstname: string, lastname: string, birthdate: string) {
    let nBirthdate = new Date(birthdate)

    const data = {
      id: this.userData.uid,
      firstname: firstname,
      lastname: lastname,
      birthdate: nBirthdate,
    }

    let dName = data.firstname + " " + data.lastname

    this.customer.SetDisplayName(dName);
    this.customer.CreateCustomer(data).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error.message);
    })
  }
}
