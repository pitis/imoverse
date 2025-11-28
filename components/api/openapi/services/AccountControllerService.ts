/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminUserDTO } from '../models/AdminUserDTO';
import type { KeyAndPasswordVM } from '../models/KeyAndPasswordVM';
import type { PasswordChangeDTO } from '../models/PasswordChangeDTO';
import type { UserRegistrationDTO } from '../models/UserRegistrationDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountControllerService {
    /**
     * @returns UserRegistrationDTO OK
     * @throws ApiError
     */
    public static getAccount(): CancelablePromise<UserRegistrationDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/account',
        });
    }
    /**
     * @param requestBody
     * @returns AdminUserDTO OK
     * @throws ApiError
     */
    public static updateAccount(
        requestBody: UserRegistrationDTO,
    ): CancelablePromise<AdminUserDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static resendActivation(
        requestBody: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/resend-activation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static registerAccount(
        requestBody: UserRegistrationDTO,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static requestPasswordReset(
        requestBody: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/reset-password/init',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static finishPasswordReset(
        requestBody: KeyAndPasswordVM,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/reset-password/finish',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static changePassword(
        requestBody: PasswordChangeDTO,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param key
     * @returns any OK
     * @throws ApiError
     */
    public static activateAccount(
        key: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/activate',
            query: {
                'key': key,
            },
        });
    }
}
