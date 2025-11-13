/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SavedListingDTO } from '../models/SavedListingDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SavedListingControllerService {
    /**
     * @param id
     * @returns SavedListingDTO OK
     * @throws ApiError
     */
    public static getSavedListing(
        id: number,
    ): CancelablePromise<SavedListingDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/saved-listings/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns SavedListingDTO OK
     * @throws ApiError
     */
    public static updateSavedListing(
        id: number,
        requestBody: SavedListingDTO,
    ): CancelablePromise<SavedListingDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/saved-listings/{id}',
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
    public static deleteSavedListing(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/saved-listings/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns SavedListingDTO OK
     * @throws ApiError
     */
    public static partialUpdateSavedListing(
        id: number,
        requestBody: SavedListingDTO,
    ): CancelablePromise<SavedListingDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/saved-listings/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param eagerload
     * @returns SavedListingDTO OK
     * @throws ApiError
     */
    public static getAllSavedListings(
        eagerload: boolean = true,
    ): CancelablePromise<Array<SavedListingDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/saved-listings',
            query: {
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SavedListingDTO OK
     * @throws ApiError
     */
    public static createSavedListing(
        requestBody: SavedListingDTO,
    ): CancelablePromise<SavedListingDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/saved-listings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
