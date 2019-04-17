/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Api Documentation
 * 1.0
 * Api Documentation
 * urn:tos
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * localhost:8083
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {UpdateGenreUsingPUTParams} from '../../../../controllers/Genre';

export enum Actions {
  START = '[Genre updateGenreUsingPUT] Start',
  SUCCESS = '[Genre updateGenreUsingPUT] Success',
  ERROR = '[Genre updateGenreUsingPUT] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateGenreUsingPUTParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdateGenreUsingPUTAction = Start | Success | Error;
