/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AuthorDto } from '../model/authorDto';
import { BookDto } from '../model/bookDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AuthorRestControllerService {

    protected basePath = 'http://localhost:8083';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createAuthor
     * 
     * @param authorDto authorDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAuthorUsingPOST(authorDto: AuthorDto, observe?: 'body', reportProgress?: boolean): Observable<AuthorDto>;
    public createAuthorUsingPOST(authorDto: AuthorDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AuthorDto>>;
    public createAuthorUsingPOST(authorDto: AuthorDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AuthorDto>>;
    public createAuthorUsingPOST(authorDto: AuthorDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorDto === null || authorDto === undefined) {
            throw new Error('Required parameter authorDto was null or undefined when calling createAuthorUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<AuthorDto>(`${this.configuration.basePath}/api/author`,
            authorDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteAuthorById
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAuthorByIdUsingDELETE(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAuthorByIdUsingDELETE(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAuthorByIdUsingDELETE(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAuthorByIdUsingDELETE(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAuthorByIdUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/author/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAuthor
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthorUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<AuthorDto>;
    public getAuthorUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AuthorDto>>;
    public getAuthorUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AuthorDto>>;
    public getAuthorUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAuthorUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<AuthorDto>(`${this.configuration.basePath}/api/author/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAuthors
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthorsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<AuthorDto>>;
    public getAuthorsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AuthorDto>>>;
    public getAuthorsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AuthorDto>>>;
    public getAuthorsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<AuthorDto>>(`${this.configuration.basePath}/api/author`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBooks
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBooksUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<BookDto>>;
    public getBooksUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BookDto>>>;
    public getBooksUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BookDto>>>;
    public getBooksUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBooksUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<BookDto>>(`${this.configuration.basePath}/api/author/${encodeURIComponent(String(id))}/book`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateAuthor
     * 
     * @param authorDto authorDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAuthorUsingPUT(authorDto: AuthorDto, observe?: 'body', reportProgress?: boolean): Observable<AuthorDto>;
    public updateAuthorUsingPUT(authorDto: AuthorDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AuthorDto>>;
    public updateAuthorUsingPUT(authorDto: AuthorDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AuthorDto>>;
    public updateAuthorUsingPUT(authorDto: AuthorDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (authorDto === null || authorDto === undefined) {
            throw new Error('Required parameter authorDto was null or undefined when calling updateAuthorUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<AuthorDto>(`${this.configuration.basePath}/api/author`,
            authorDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
