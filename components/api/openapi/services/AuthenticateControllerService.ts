/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JWTToken } from '../models/JWTToken';
import type { LoginVM } from '../models/LoginVM';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticateControllerService {
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static isAuthenticated(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/authenticate',
        });
    }
    /**
     * @param requestBody
     * @returns JWTToken OK
     * @throws ApiError
     */
    public static authorize(
        requestBody: LoginVM,
    ): CancelablePromise<JWTToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authenticate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
