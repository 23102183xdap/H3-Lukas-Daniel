import { CustomerService } from './../../shared/services/customer.service';
import { AuthService } from './../../shared/services/auth.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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



  userID!: string
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(24),
  ]);
  firstname = new FormControl();
  lastname = new FormControl();
  birthdate = new FormControl();
  matcher = new ErrorState();

  signupForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor(public auth: AuthService, private customer: CustomerService) { }

  ngOnInit(): void {
  }

  async SetUID(id?: string) {
    id = this.userID;
  }

  async CreateCustomer(firstname: string, lastname: string, birthdate: string) {
    let nBirthdate = new Date(birthdate)
    const data = {
      id: this.userID,
      firstname: firstname,
      lastname: lastname,
      birthdate: nBirthdate
    }
    this.customer.CreateCustomer(data).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error.message);
    })
  }
}
