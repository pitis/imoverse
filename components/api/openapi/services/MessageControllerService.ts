/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDTO } from '../models/MessageDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageControllerService {
    /**
     * @param id
     * @returns MessageDTO OK
     * @throws ApiError
     */
    public static getMessage(
        id: number,
    ): CancelablePromise<MessageDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns MessageDTO OK
     * @throws ApiError
     */
    public static updateMessage(
        id: number,
        requestBody: MessageDTO,
    ): CancelablePromise<MessageDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/messages/{id}',
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
    public static deleteMessage(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/messages/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns MessageDTO OK
     * @throws ApiError
     */
    public static partialUpdateMessage(
        id: number,
        requestBody: MessageDTO,
    ): CancelablePromise<MessageDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/messages/{id}',
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
     * @returns MessageDTO OK
     * @throws ApiError
     */
    public static getAllMessages(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
        eagerload: boolean = true,
    ): CancelablePromise<Array<MessageDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/messages',
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
     * @returns MessageDTO OK
     * @throws ApiError
     */
    public static createMessage(
        requestBody: MessageDTO,
    ): CancelablePromise<MessageDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/messages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
