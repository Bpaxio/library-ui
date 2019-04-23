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

import { CommentDto } from '../model/commentDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class CommentRestControllerService {

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
     * createComment
     * 
     * @param bookId bookId
     * @param message message
     * @param username username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCommentUsingPOST(bookId?: string, message?: string, username?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createCommentUsingPOST(bookId?: string, message?: string, username?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createCommentUsingPOST(bookId?: string, message?: string, username?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createCommentUsingPOST(bookId?: string, message?: string, username?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (bookId !== undefined && bookId !== null) {
            queryParameters = queryParameters.set('bookId', <any>bookId);
        }
        if (message !== undefined && message !== null) {
            queryParameters = queryParameters.set('message', <any>message);
        }
        if (username !== undefined && username !== null) {
            queryParameters = queryParameters.set('username', <any>username);
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/api/comment`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * editComment
     * 
     * @param id id
     * @param message message
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editCommentUsingPUT(id: string, message: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public editCommentUsingPUT(id: string, message: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public editCommentUsingPUT(id: string, message: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public editCommentUsingPUT(id: string, message: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling editCommentUsingPUT.');
        }
        if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling editCommentUsingPUT.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/api/comment/${encodeURIComponent(String(id))}`,
            message,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBookComments
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBookCommentsUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CommentDto>>;
    public getBookCommentsUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CommentDto>>>;
    public getBookCommentsUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CommentDto>>>;
    public getBookCommentsUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBookCommentsUsingGET.');
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

        return this.httpClient.get<Array<CommentDto>>(`${this.configuration.basePath}/api/comment/book/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getComment
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCommentUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<CommentDto>;
    public getCommentUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommentDto>>;
    public getCommentUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommentDto>>;
    public getCommentUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCommentUsingGET.');
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

        return this.httpClient.get<CommentDto>(`${this.configuration.basePath}/api/comment/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getComments
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCommentsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CommentDto>>;
    public getCommentsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CommentDto>>>;
    public getCommentsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CommentDto>>>;
    public getCommentsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<CommentDto>>(`${this.configuration.basePath}/api/comment`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
