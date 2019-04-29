import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book/book.component';
import { CommentsComponent } from './book/comments/comments.component';
import { CommentComponent } from './book/comments/comment/comment.component';

@NgModule({
  imports: [
    MaterialModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookEditComponent,
    BookComponent,
    CommentsComponent,
    CommentComponent
  ],
  entryComponents: [
    BookEditComponent
  ]
})
export class BooksModule {
}
