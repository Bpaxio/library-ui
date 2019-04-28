import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { GenreRestControllerService } from '../../../api/service';
import { GenreDto } from './../../../api/service/model/genreDto';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.scss']
})
export class GenreEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private genreService: GenreRestControllerService,
    private dialogRef: MatDialogRef<GenreEditComponent>,
    @Inject(MAT_DIALOG_DATA) public genreDto: GenreDto) {
      this.form = new FormGroup(
        { name: new FormControl(genreDto.name, Validators.required)}
      );
     }

  ngOnInit() {
  }

  update() {
    this.genreService.updateGenreUsingPUT(this.genreDto.id, this.form.get('name').value)
      .subscribe(genre => {
        this.dialogRef.close(genre);
      });
  }

  cancel() {
    this.dialogRef.close();
  }
}
