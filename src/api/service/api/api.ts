export * from './authorRestController.service';
import { AuthorRestControllerService } from './authorRestController.service';
export * from './bookRestController.service';
import { BookRestControllerService } from './bookRestController.service';
export * from './commentRestController.service';
import { CommentRestControllerService } from './commentRestController.service';
export * from './genreRestController.service';
import { GenreRestControllerService } from './genreRestController.service';
export const APIS = [AuthorRestControllerService, BookRestControllerService, CommentRestControllerService, GenreRestControllerService];
