import { AuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
// import { BookListComponent } from './components/book/book-list/book-list.component';
// import { BookCardComponent } from './components/book/book-card/book-card.component';
import { CreateAuthorTestComponent } from './create-author-test/create-author-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorCardComponent } from './components/author/author-card/author-card.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// firebase
// import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BookListComponent,
    // BookCardComponent,
    CreateAuthorTestComponent,
    AuthorCardComponent,
    AuthorListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
