/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageThreadDTO } from '../models/MessageThreadDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageThreadControllerService {
    /**
     * @param id
     * @returns MessageThreadDTO OK
     * @throws ApiError
     */
    public static getMessageThread(
        id: number,
    ): CancelablePromise<MessageThreadDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/message-threads/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns MessageThreadDTO OK
     * @throws ApiError
     */
    public static updateMessageThread(
        id: number,
        requestBody: MessageThreadDTO,
    ): CancelablePromise<MessageThreadDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/message-threads/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMessageThread(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/message-threads/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns MessageThreadDTO OK
     * @throws ApiError
     */
    public static partialUpdateMessageThread(
        id: number,
        requestBody: MessageThreadDTO,
    ): CancelablePromise<MessageThreadDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/message-threads/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param eagerload
     * @returns MessageThreadDTO OK
     * @throws ApiError
     */
    public static getAllMessageThreads(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
        eagerload: boolean = true,
    ): CancelablePromise<Array<MessageThreadDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/message-threads',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns MessageThreadDTO OK
     * @throws ApiError
     */
    public static createMessageThread(
        requestBody: MessageThreadDTO,
    ): CancelablePromise<MessageThreadDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message-threads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
