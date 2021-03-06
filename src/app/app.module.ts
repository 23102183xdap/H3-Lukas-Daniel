import { MatDatepickerModule } from '@angular/material/datepicker';
import { BookService } from './shared/services/book.service';
import { AuthService } from './shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { AuthorModule } from './components/author/author.module';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/before-login/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './views/before-login/login/login.component';
import { BooktestComponent } from './test-components/booktest/booktest.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CustomerService } from './shared/services/customer.service';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { OurBooksComponent } from './views/before-login/our-books/our-books.component';
import { UpdateAuthorComponent } from './test-components/update-author/update-author.component';
import { BookCardComponent } from './components/book/book-card/book-card.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookCardComponent,
    NavbarComponent,
    LoginComponent,
    BooktestComponent,
    LoginPageComponent,
    OurBooksComponent,
    UpdateAuthorComponent,
    BookCardComponent,
    BookListComponent,
    SignupComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    AuthorModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
