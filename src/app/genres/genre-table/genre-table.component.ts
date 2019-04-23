import { CreateGenreDialogComponent } from './../create-genre/create-genre.component';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';

import { GenreDto } from '../../../api/service';
import { GenreRestControllerService } from '../../../api/service/api/genreRestController.service';

@Component({
  selector: 'app-genre-table',
  templateUrl: './genre-table.component.html',
  styleUrls: ['./genre-table.component.scss']
})
export class GenreTableComponent implements OnInit {
  dataSource = new MatTableDataSource<GenreDto>([]);
  displayedColumns = ['name', 'actions', 'books'];


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

}
