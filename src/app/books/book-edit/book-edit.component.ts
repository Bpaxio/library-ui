import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AuthorRestControllerService,
  BookDto,
  BookRestControllerService,
  GenreDto,
  GenreRestControllerService,
} from '../../../api/service';

export interface Author {
  id: string;
  name: string;
}

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {

  form: FormGroup;
  authors$: Observable<Author[]>;
  genres$: Observable<GenreDto[]>;

  constructor(
    private bookService: BookRestControllerService,
    readonly authorService: AuthorRestControllerService,
    readonly genreService: GenreRestControllerService,
    private dialogRef: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public book: BookDto
  ) {
    this.authors$ = authorService.getAuthorsUsingGET()
      .pipe(
        map(authors => authors.map(
          author => {
            return {id: author.id, name: author.name + ' ' + author.surname} as Author;
          })
        )
      );
    this.genres$ = genreService.getGenresUsingGET();
    this.form = new FormGroup(
      {
        name: new FormControl(book ? book.name : '', Validators.required),
        authorId: new FormControl(book ? book.authorId : '', Validators.required),
        publicationDate: new FormControl(book ? book.publicationDate : '', Validators.required),
        publishingOffice: new FormControl(book ? book.publishingOffice : '', Validators.required),
        price: new FormControl(book ? book.price : '', Validators.required),
        genreId: new FormControl(book ? book.genreId : '', Validators.required),
      }
    );
  }

  update() {
    this.bookService.updateBookUsingPUT(this.toBook(this.book.id))
      .subscribe(updatedBook => {
        this.dialogRef.close(updatedBook);
      });
  }

  create() {
    this.bookService.createBookUsingPOST(this.toBook(null))
      .subscribe(updatedBook => {
        this.dialogRef.close(updatedBook);
      });
  }

  private toBook(bookId: string) {
    return {
      id: bookId,
      authorId: this.form.get('authorId').value,
      genreId: this.form.get('genreId').value,
      name: this.form.get('name').value,
      price: this.form.get('price').value,
      publicationDate: this.form.get('publicationDate').value,
      publishingOffice: this.form.get('publishingOffice').value
    } as BookDto;
  }

  cancel() {
    this.dialogRef.close();
  }

  compareItems(i1, i2) {
    return i1 && i2 && i1.id === i2.id;
  }

}
