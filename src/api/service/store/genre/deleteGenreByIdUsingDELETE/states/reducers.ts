/* tslint:disable:max-line-length */
/**
 * Api Documentation
 * 1.0
 * Api Documentation
 * urn:tos
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * localhost:8083
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface DeleteGenreByIdUsingDELETEState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDeleteGenreByIdUsingDELETEState: DeleteGenreByIdUsingDELETEState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Genre_DeleteGenreByIdUsingDELETE';
export const getDeleteGenreByIdUsingDELETEStateSelector = createFeatureSelector<DeleteGenreByIdUsingDELETEState>(selectorName);

export function DeleteGenreByIdUsingDELETEReducer(
  state: DeleteGenreByIdUsingDELETEState = initialDeleteGenreByIdUsingDELETEState,
  action: actions.DeleteGenreByIdUsingDELETEAction): DeleteGenreByIdUsingDELETEState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
