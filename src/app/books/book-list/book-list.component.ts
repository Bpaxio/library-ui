import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { combineLatest, Observable, iif } from 'rxjs';
import { filter, map, shareReplay, withLatestFrom } from 'rxjs/operators';

import {
  AuthorRestControllerService,
  BookDto,
  BookRestControllerService,
  GenreRestControllerService,
} from '../../../api/service';
import { AuthorDto, GenreDto } from './../../../api/service';
import { BookEditComponent } from './../book-edit/book-edit.component';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

export interface Book {
  book: BookDto;
  author: AuthorDto;
  genre: GenreDto;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  authors$: Observable<AuthorDto[]>;
  genres$: Observable<GenreDto[]>;
  dataSource = new MatTableDataSource<Book>([]);
  displayedColumns = ['name', 'genre', 'author', 'publicationDate', 'price', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookRestControllerService,
    readonly authorService: AuthorRestControllerService,
    readonly genreService: GenreRestControllerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const genre = this.route.snapshot.queryParamMap.get('genre') || '';
    const books$ = iif(
      () => genre.length === 0,
      this.bookService.getBooksUsingGET1(),
      this.genreService.getBooksUsingGET2(genre)
    );
    this.authors$ = this.authorService.getAuthorsUsingGET().pipe(shareReplay(1));
    this.genres$ = this.genreService.getGenresUsingGET().pipe(shareReplay(1));
    combineLatest(books$, this.authors$, this.genres$)
      .pipe(
        map(([books, authors, genres]) => books.map(data => this.toBook(data, authors, genres)))
      )
      .subscribe(books => this.dataSource = new MatTableDataSource<Book>(books));
  }

  update(book: BookDto) {
    this.dialog.open(BookEditComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
      data: book
    }).afterClosed()
      .pipe(
        filter(Boolean),
        withLatestFrom(this.authors$, this.genres$),
        map(([updated, authors, genres]) => this.toBook(updated, authors, genres))
      )
      .subscribe(updated  => {
        const index = this.dataSource.data.findIndex(data => data.book.id === updated.book.id);
        this.dataSource.data[index] = updated;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  create() {
    this.dialog.open(BookEditComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false
    }).afterClosed()
      .pipe(
        filter(Boolean),
        withLatestFrom(this.authors$, this.genres$),
        map(([book, authors, genres]) => this.toBook(book, authors, genres))
      )
      .subscribe(book  => {
        this.dataSource.data.push(book);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  delete(id: string) {
    this.bookService.deleteBookByIdUsingDELETE(id)
      .subscribe(() => {
        const index = this.dataSource.data.findIndex(data => data.book.id === id);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
        }
      });
  }

  private toBook(bookDto: BookDto, authors: AuthorDto[], genres: GenreDto[]) {
    return {
      book: bookDto,
      author: authors.find(author => author.id === bookDto.authorId),
      genre: genres.find(genre => genre.id === bookDto.genreId)
    } as Book;
  }

}
