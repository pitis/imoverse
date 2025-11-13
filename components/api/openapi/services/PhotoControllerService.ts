/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhotoDTO } from '../models/PhotoDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PhotoControllerService {
    /**
     * @param id
     * @returns PhotoDTO OK
     * @throws ApiError
     */
    public static getPhoto(
        id: number,
    ): CancelablePromise<PhotoDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/photos/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns PhotoDTO OK
     * @throws ApiError
     */
    public static updatePhoto(
        id: number,
        requestBody: PhotoDTO,
    ): CancelablePromise<PhotoDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/photos/{id}',
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
    public static deletePhoto(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/photos/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns PhotoDTO OK
     * @throws ApiError
     */
    public static partialUpdatePhoto(
        id: number,
        requestBody: PhotoDTO,
    ): CancelablePromise<PhotoDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/photos/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param eagerload
     * @returns PhotoDTO OK
     * @throws ApiError
     */
    public static getAllPhotos(
        eagerload: boolean = true,
    ): CancelablePromise<Array<PhotoDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/photos',
            query: {
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns PhotoDTO OK
     * @throws ApiError
     */
    public static createPhoto(
        requestBody: PhotoDTO,
    ): CancelablePromise<PhotoDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/photos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
