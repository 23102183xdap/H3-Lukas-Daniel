import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorCardComponent,
    AuthorCreateComponent,
    AuthorDetailsComponent,
    AuthorEditComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MatCardModule
  ]
})
export class AuthorModule { }
