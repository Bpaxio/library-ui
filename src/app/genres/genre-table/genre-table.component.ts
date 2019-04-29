import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { filter } from 'rxjs/operators';

import { GenreDto, GenreRestControllerService } from '../../../api/service';
import { CreateGenreDialogComponent } from './../create-genre/create-genre.component';
import { GenreEditComponent } from './../genre-edit/genre-edit.component';

@Component({
  selector: 'app-genre-table',
  templateUrl: './genre-table.component.html',
  styleUrls: ['./genre-table.component.scss']
})
export class GenreTableComponent implements OnInit {
  dataSource = new MatTableDataSource<GenreDto>([]);
  displayedColumns = ['name', 'books', 'actions'];


  constructor(
    private genreService: GenreRestControllerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.genreService.getGenresUsingGET()
      .subscribe(genres => this.dataSource = new MatTableDataSource(genres));
  }

  create() {
    this.dialog.open(CreateGenreDialogComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false,
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(genre => {
        this.dataSource.data.push(genre);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  delete(id: string) {
    this.genreService.deleteGenreByIdUsingDELETE(id)
      .subscribe(() => {
        const index = this.dataSource.data.findIndex(genre => genre.id === id);
        if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource = new MatTableDataSource(this.dataSource.data);
        }
      });
  }

  update(genreDto: GenreDto) {
    this.dialog.open(GenreEditComponent, {
      height: 'auto',
      width: 'auto',
      autoFocus: false,
      data: genreDto
    }).afterClosed()
      .pipe(filter(Boolean))
      .subscribe(genre => {
        const index = this.dataSource.data.findIndex(g => g.id === genre.id);
        this.dataSource.data[index] = genre;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

}
