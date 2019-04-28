import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CommentDto, CommentRestControllerService } from '../../../../../api/service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: CommentDto;
  @Output() delete = new EventEmitter<string>();

  constructor(private commentService: CommentRestControllerService) { }

  ngOnInit() {
    console.log(this.comment);
  }

  deleteComment() {
    this.commentService.deleteCommentUsingDELETE(this.comment.id)
      .subscribe(() => this.delete.emit(this.comment.id));
  }

}
