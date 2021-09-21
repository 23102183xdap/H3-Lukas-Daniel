import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


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
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorModule { }
