import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { filter } from 'rxjs/operators';

import { AuthorDto, AuthorRestControllerService } from 'src/api/service';
import { AuthorEditComponent } from './../author-edit/author-edit.component';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  dataSource = new MatTableDataSource<AuthorDto>([]);
  displayedColumns = ['name', 'country', 'books', 'actions'];


  constructor(
    private authorService: AuthorRestControllerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.authorService.getAuthorsUsingGET()
      .subscribe(authors => this.dataSource = new MatTableDataSource(authors));
  }

  create() {
    this.dialog.open(AuthorEditComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false, 
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(author => {
        this.dataSource.data.push(author);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  update(genreDto: AuthorDto) {
    this.dialog.open(AuthorEditComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false,
      data: genreDto
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(author => {
        const index = this.dataSource.data.findIndex(a => a.id === author.id);
        this.dataSource.data[index] = author;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  delete(id: string) {
    this.authorService.deleteAuthorByIdUsingDELETE(id)
      .subscribe(() => {
        const index = this.dataSource.data.findIndex(author => author.id === id);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
        }
      });
  }

}
