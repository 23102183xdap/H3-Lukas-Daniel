import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/before-login/home/home.component';
// import { BookListComponent } from './components/book/book-list/book-list.component';
// import { BookCardComponent } from './components/book/book-card/book-card.component';
import { CreateAuthorTestComponent } from './test-components/create-author-test/create-author-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorCardComponent } from './components/author/author-card/author-card.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './views/before-login/login/login.component';
import { BooktestComponent } from './test-components/booktest/booktest.component';
import { environment } from 'src/environments/environment';

// firebase
import { initializeApp } from '@firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestnavComponent } from './test-components/testnav/testnav.component';
import { MatIconModule } from '@angular/material/icon';

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
    LoginComponent,
    BooktestComponent,
    TestnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
