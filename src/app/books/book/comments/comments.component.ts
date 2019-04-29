import { shareReplay, switchMap, withLatestFrom, map, tap, expand, first, mapTo } from 'rxjs/operators';
import { Observable, Subject, merge } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { CommentRestControllerService, CommentDto } from '../../../../api/service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() bookId: string;

  comments$: Observable<CommentDto[]>;
  count$: Observable<number>;
  form = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  readonly create$ = new Subject<void>();
  readonly delete$ = new Subject<string>();

  constructor(private commentService: CommentRestControllerService) { }

  ngOnInit() {
    const modified$ = this.create$
      .pipe(
        switchMap(() => this.commentService.createCommentUsingPOST(
          {bookId: this.bookId, message: this.form.get('message').value}
        )),
        tap(() => {
          this.form.reset({message: ''});
          this.form.get('message').setErrors(null);
        })
      );
    this.comments$ = this.commentService.getBookCommentsUsingGET(this.bookId)
      .pipe(
        expand(comments =>
          merge(
            modified$
              .pipe(
                first(),
                map(comment => {
                  comments.push(comment);
                  return comments;
                })
              ),
            this.delete$
              .pipe(
                first(),
                switchMap(id => this.commentService.deleteCommentUsingDELETE(id).pipe(mapTo(id))),
                map(id => {
                  const index = comments.findIndex(data => id === data.id);
                  if (index > -1) {
                    comments.splice(index, 1);
                    return comments;
                  }
                })
              )
          )
        ),
        shareReplay(1)
      );
    this.count$ = this.comments$
      .pipe(map(comments => comments.length));
  }
}
