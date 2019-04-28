import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { GenreRestControllerService } from '../../../api/service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreDialogComponent {

  form = new FormGroup(
    { name: new FormControl('', Validators.required)}
  );

  constructor(
    private router: Router,
    private genreService: GenreRestControllerService,
    private dialogRef: MatDialogRef<CreateGenreDialogComponent>) { }

  create() {
    this.genreService.createGenreUsingPOST(this.form.get('name').value)
      .subscribe(genre => {
        this.dialogRef.close(genre);
      });
  }


  cancel() {
    this.dialogRef.close();
  }

}
