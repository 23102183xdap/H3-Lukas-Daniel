import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { BooktestComponent } from './test-components/booktest/booktest.component';
import { LoginComponent } from './views/before-login/login/login.component';
import { HomeComponent } from './views/before-login/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'booktest',
    component: BooktestComponent
  },
  {
    path: 'authors',
    component: AuthorListComponent,
    loadChildren: () => import('./components/author/author.module').then(m => m.AuthorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
