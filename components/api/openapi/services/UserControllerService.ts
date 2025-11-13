/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminUserDTO } from '../models/AdminUserDTO';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param login
     * @returns AdminUserDTO OK
     * @throws ApiError
     */
    public static getUser(
        login: string,
    ): CancelablePromise<AdminUserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users/{login}',
            path: {
                'login': login,
            },
        });
    }
    /**
     * @param login
     * @param requestBody
     * @returns AdminUserDTO OK
     * @throws ApiError
     */
    public static updateUser(
        login: string,
        requestBody: AdminUserDTO,
    ): CancelablePromise<AdminUserDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/admin/users/{login}',
            path: {
                'login': login,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param login
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUser(
        login: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/admin/users/{login}',
            path: {
                'login': login,
            },
        });
    }
    /**
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns AdminUserDTO OK
     * @throws ApiError
     */
    public static getAllUsers(
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<Array<AdminUserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users',
            query: {
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * @param requestBody
     * @returns AdminUserDTO OK
     * @throws ApiError
     */
    public static updateUser1(
        requestBody: AdminUserDTO,
    ): CancelablePromise<AdminUserDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/admin/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns User OK
     * @throws ApiError
     */
    public static createUser(
        requestBody: AdminUserDTO,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
