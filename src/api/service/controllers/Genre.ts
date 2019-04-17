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

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface CreateGenreUsingPOSTParams {
  /** name */
  name?: string;
}

export interface GetGenreUsingGETParams {
  /** id */
  id: string;
}

export interface UpdateGenreUsingPUTParams {
  /** id */
  id: string;
  /** name */
  name?: string;
}

export interface DeleteGenreByIdUsingDELETEParams {
  /** id */
  id: string;
}

@Injectable()
export class GenreService {
  constructor(private http: HttpClient) {}

  /**
   * getGenres
   * http://localhost:8083/swagger/swagger-ui.html#!/genre-rest-controller/getGenresUsingGET
   */
  getGenresUsingGET(): Observable<__model.GenreView[]> {
    return this.http.get<__model.GenreView[]>(`/api/genre`);
  }

  /**
   * createGenre
   * http://localhost:8083/swagger/swagger-ui.html#!/genre-rest-controller/createGenreUsingPOST
   */
  createGenreUsingPOST(params: CreateGenreUsingPOSTParams): Observable<void> {
    const queryParamBase = {
      name: params.name,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else if (Array.isArray(value)) value.forEach(v => queryParams = queryParams.append(key, v));
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.post<void>(`/api/genre`, {}, {params: queryParams});
  }

  /**
   * getGenre
   * http://localhost:8083/swagger/swagger-ui.html#!/genre-rest-controller/getGenreUsingGET
   */
  getGenreUsingGET(params: GetGenreUsingGETParams): Observable<__model.GenreView> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.GenreView>(`/api/genre/${pathParams.id}`);
  }

  /**
   * updateGenre
   * http://localhost:8083/swagger/swagger-ui.html#!/genre-rest-controller/updateGenreUsingPUT
   */
  updateGenreUsingPUT(params: UpdateGenreUsingPUTParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    const queryParamBase = {
      name: params.name,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else if (Array.isArray(value)) value.forEach(v => queryParams = queryParams.append(key, v));
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.put<void>(`/api/genre/${pathParams.id}`, {}, {params: queryParams});
  }

  /**
   * deleteGenreById
   * http://localhost:8083/swagger/swagger-ui.html#!/genre-rest-controller/deleteGenreByIdUsingDELETE
   */
  deleteGenreByIdUsingDELETE(params: DeleteGenreByIdUsingDELETEParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    return this.http.delete<void>(`/api/genre/${pathParams.id}`);
  }
}
