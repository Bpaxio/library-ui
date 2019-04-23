import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    MaterialModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent
  ]
})
export class BooksModule {
}
