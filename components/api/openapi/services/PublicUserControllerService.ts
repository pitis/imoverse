/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from '../models/UserDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicUserControllerService {
    /**
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns UserDTO OK
     * @throws ApiError
     */
    public static getAllPublicUsers(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<Array<UserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
}
