import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { BooktestComponent } from './test-components/booktest/booktest.component';
import { LoginComponent } from './views/before-login/login/login.component';
import { HomeComponent } from './views/before-login/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurBooksComponent } from './views/before-login/our-books/our-books.component';
import { UpdateAuthorComponent } from './test-components/update-author/update-author.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'booktest',
    component: BooktestComponent,
  },
  {
    path: 'authors',
    component: AuthorListComponent,
    loadChildren: () =>
      import('./components/author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'updatetest',
    component: UpdateAuthorComponent,
  },
  {
    path: 'our-books',
    component: OurBooksComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
