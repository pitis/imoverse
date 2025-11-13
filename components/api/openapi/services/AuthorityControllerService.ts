/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Authority } from '../models/Authority';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthorityControllerService {
    /**
     * @returns Authority OK
     * @throws ApiError
     */
    public static getAllAuthorities(): CancelablePromise<Array<Authority>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authorities',
        });
    }
    /**
     * @param requestBody
     * @returns Authority OK
     * @throws ApiError
     */
    public static createAuthority(
        requestBody: Authority,
    ): CancelablePromise<Authority> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authorities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns Authority OK
     * @throws ApiError
     */
    public static getAuthority(
        id: string,
    ): CancelablePromise<Authority> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authorities/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAuthority(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/authorities/{id}',
            path: {
                'id': id,
            },
        });
    }
}
