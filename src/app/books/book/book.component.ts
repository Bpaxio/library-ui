import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookRestControllerService, BookDto } from '../../../api/service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book$: Observable<BookDto>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookRestControllerService
  ) {}

  ngOnInit() {
    this.book$ = this.bookService.getBookUsingGET(this.route.snapshot.paramMap.get('id'))
      .pipe(shareReplay(1));
  }

}
