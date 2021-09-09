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
import { environment } from 'src/environments/environment';

// firebase
import { initializeApp } from '@firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';

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
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
