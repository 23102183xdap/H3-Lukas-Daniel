import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authors',
    component: AuthorListComponent,
  },
  {
    path: 'authors/create',
    component: AuthorCreateComponent,
  },
  {
    path: 'authors/:authorId/details',
    component: AuthorDetailsComponent
  },
  {
    path: 'authors/edit/:authorId',
    component: AuthorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
