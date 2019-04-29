import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthorRestControllerService, AuthorDto } from 'src/api/service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent {

  form: FormGroup;

  constructor(
    readonly authorService: AuthorRestControllerService,
    private dialogRef: MatDialogRef<AuthorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public author: AuthorDto
  ) {
    this.form = new FormGroup(
      {
        name: new FormControl(author ? author.name : '', Validators.required),
        surname: new FormControl(author ? author.surname : '', Validators.required),
        country: new FormControl(author ? author.country : '', Validators.required)
      }
    );
  }

  update() {
    this.authorService.updateAuthorUsingPUT(this.toAuthor(this.author.id))
      .subscribe(updatedBook => {
        this.dialogRef.close(updatedBook);
      });
  }

  create() {
    this.authorService.createAuthorUsingPOST(this.toAuthor(null))
      .subscribe(updatedBook => {
        this.dialogRef.close(updatedBook);
      });
  }

  private toAuthor(authorId: string) {
    return {
      id: authorId,
      name: this.form.get('name').value,
      surname: this.form.get('surname').value,
      country: this.form.get('country').value
    } as AuthorDto;
  }

  cancel() {
    this.dialogRef.close();
  }
}
