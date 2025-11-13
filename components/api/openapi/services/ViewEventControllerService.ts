/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ViewEventDTO } from '../models/ViewEventDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ViewEventControllerService {
    /**
     * @param id
     * @returns ViewEventDTO OK
     * @throws ApiError
     */
    public static getViewEvent(
        id: number,
    ): CancelablePromise<ViewEventDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/view-events/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ViewEventDTO OK
     * @throws ApiError
     */
    public static updateViewEvent(
        id: number,
        requestBody: ViewEventDTO,
    ): CancelablePromise<ViewEventDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/view-events/{id}',
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
    public static deleteViewEvent(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/view-events/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ViewEventDTO OK
     * @throws ApiError
     */
    public static partialUpdateViewEvent(
        id: number,
        requestBody: ViewEventDTO,
    ): CancelablePromise<ViewEventDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/view-events/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param eagerload
     * @returns ViewEventDTO OK
     * @throws ApiError
     */
    public static getAllViewEvents(
        eagerload: boolean = true,
    ): CancelablePromise<Array<ViewEventDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/view-events',
            query: {
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ViewEventDTO OK
     * @throws ApiError
     */
    public static createViewEvent(
        requestBody: ViewEventDTO,
    ): CancelablePromise<ViewEventDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/view-events',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
