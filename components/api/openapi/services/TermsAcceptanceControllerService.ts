/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TermsAcceptanceDTO } from '../models/TermsAcceptanceDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TermsAcceptanceControllerService {
    /**
     * @param id
     * @returns TermsAcceptanceDTO OK
     * @throws ApiError
     */
    public static getTermsAcceptance(
        id: number,
    ): CancelablePromise<TermsAcceptanceDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-acceptances/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns TermsAcceptanceDTO OK
     * @throws ApiError
     */
    public static updateTermsAcceptance(
        id: number,
        requestBody: TermsAcceptanceDTO,
    ): CancelablePromise<TermsAcceptanceDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/terms-acceptances/{id}',
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
    public static deleteTermsAcceptance(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/terms-acceptances/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns TermsAcceptanceDTO OK
     * @throws ApiError
     */
    public static partialUpdateTermsAcceptance(
        id: number,
        requestBody: TermsAcceptanceDTO,
    ): CancelablePromise<TermsAcceptanceDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/terms-acceptances/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param eagerload
     * @returns TermsAcceptanceDTO OK
     * @throws ApiError
     */
    public static getAllTermsAcceptances(
        eagerload: boolean = true,
    ): CancelablePromise<Array<TermsAcceptanceDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-acceptances',
            query: {
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns TermsAcceptanceDTO OK
     * @throws ApiError
     */
    public static createTermsAcceptance(
        requestBody: TermsAcceptanceDTO,
    ): CancelablePromise<TermsAcceptanceDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/terms-acceptances',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
