import { environment } from './../environments/environment.prod';
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

// firebase 
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BookListComponent,
    // BookCardComponent,
    CreateAuthorTestComponent,
    AuthorCardComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
