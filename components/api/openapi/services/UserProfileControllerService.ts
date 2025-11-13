/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfileDTO } from '../models/UserProfileDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserProfileControllerService {
    /**
     * @param id
     * @returns UserProfileDTO OK
     * @throws ApiError
     */
    public static getUserProfile(
        id: number,
    ): CancelablePromise<UserProfileDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-profiles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns UserProfileDTO OK
     * @throws ApiError
     */
    public static updateUserProfile(
        id: number,
        requestBody: UserProfileDTO,
    ): CancelablePromise<UserProfileDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user-profiles/{id}',
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
    public static deleteUserProfile(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user-profiles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns UserProfileDTO OK
     * @throws ApiError
     */
    public static partialUpdateUserProfile(
        id: number,
        requestBody: UserProfileDTO,
    ): CancelablePromise<UserProfileDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user-profiles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param idGreaterThan
     * @param idLessThan
     * @param idGreaterThanOrEqual
     * @param idLessThanOrEqual
     * @param idEquals
     * @param idNotEquals
     * @param idSpecified
     * @param idIn
     * @param idNotIn
     * @param userTypeEquals
     * @param userTypeNotEquals
     * @param userTypeSpecified
     * @param userTypeIn
     * @param userTypeNotIn
     * @param displayNameContains
     * @param displayNameDoesNotContain
     * @param displayNameEquals
     * @param displayNameNotEquals
     * @param displayNameSpecified
     * @param displayNameIn
     * @param displayNameNotIn
     * @param firstNameContains
     * @param firstNameDoesNotContain
     * @param firstNameEquals
     * @param firstNameNotEquals
     * @param firstNameSpecified
     * @param firstNameIn
     * @param firstNameNotIn
     * @param lastNameContains
     * @param lastNameDoesNotContain
     * @param lastNameEquals
     * @param lastNameNotEquals
     * @param lastNameSpecified
     * @param lastNameIn
     * @param lastNameNotIn
     * @param phoneContains
     * @param phoneDoesNotContain
     * @param phoneEquals
     * @param phoneNotEquals
     * @param phoneSpecified
     * @param phoneIn
     * @param phoneNotIn
     * @param companyNameContains
     * @param companyNameDoesNotContain
     * @param companyNameEquals
     * @param companyNameNotEquals
     * @param companyNameSpecified
     * @param companyNameIn
     * @param companyNameNotIn
     * @param taxIdContains
     * @param taxIdDoesNotContain
     * @param taxIdEquals
     * @param taxIdNotEquals
     * @param taxIdSpecified
     * @param taxIdIn
     * @param taxIdNotIn
     * @param kycStatusEquals
     * @param kycStatusNotEquals
     * @param kycStatusSpecified
     * @param kycStatusIn
     * @param kycStatusNotIn
     * @param createdAtGreaterThan
     * @param createdAtLessThan
     * @param createdAtGreaterThanOrEqual
     * @param createdAtLessThanOrEqual
     * @param createdAtEquals
     * @param createdAtNotEquals
     * @param createdAtSpecified
     * @param createdAtIn
     * @param createdAtNotIn
     * @param updatedAtGreaterThan
     * @param updatedAtLessThan
     * @param updatedAtGreaterThanOrEqual
     * @param updatedAtLessThanOrEqual
     * @param updatedAtEquals
     * @param updatedAtNotEquals
     * @param updatedAtSpecified
     * @param updatedAtIn
     * @param updatedAtNotIn
     * @param deletedEquals
     * @param deletedNotEquals
     * @param deletedSpecified
     * @param deletedIn
     * @param deletedNotIn
     * @param deletedAtGreaterThan
     * @param deletedAtLessThan
     * @param deletedAtGreaterThanOrEqual
     * @param deletedAtLessThanOrEqual
     * @param deletedAtEquals
     * @param deletedAtNotEquals
     * @param deletedAtSpecified
     * @param deletedAtIn
     * @param deletedAtNotIn
     * @param userIdGreaterThan
     * @param userIdLessThan
     * @param userIdGreaterThanOrEqual
     * @param userIdLessThanOrEqual
     * @param userIdEquals
     * @param userIdNotEquals
     * @param userIdSpecified
     * @param userIdIn
     * @param userIdNotIn
     * @param distinct
     * @returns UserProfileDTO OK
     * @throws ApiError
     */
    public static getAllUserProfiles(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        userTypeEquals?: 'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN',
        userTypeNotEquals?: 'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN',
        userTypeSpecified?: boolean,
        userTypeIn?: Array<'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN'>,
        userTypeNotIn?: Array<'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN'>,
        displayNameContains?: string,
        displayNameDoesNotContain?: string,
        displayNameEquals?: string,
        displayNameNotEquals?: string,
        displayNameSpecified?: boolean,
        displayNameIn?: Array<string>,
        displayNameNotIn?: Array<string>,
        firstNameContains?: string,
        firstNameDoesNotContain?: string,
        firstNameEquals?: string,
        firstNameNotEquals?: string,
        firstNameSpecified?: boolean,
        firstNameIn?: Array<string>,
        firstNameNotIn?: Array<string>,
        lastNameContains?: string,
        lastNameDoesNotContain?: string,
        lastNameEquals?: string,
        lastNameNotEquals?: string,
        lastNameSpecified?: boolean,
        lastNameIn?: Array<string>,
        lastNameNotIn?: Array<string>,
        phoneContains?: string,
        phoneDoesNotContain?: string,
        phoneEquals?: string,
        phoneNotEquals?: string,
        phoneSpecified?: boolean,
        phoneIn?: Array<string>,
        phoneNotIn?: Array<string>,
        companyNameContains?: string,
        companyNameDoesNotContain?: string,
        companyNameEquals?: string,
        companyNameNotEquals?: string,
        companyNameSpecified?: boolean,
        companyNameIn?: Array<string>,
        companyNameNotIn?: Array<string>,
        taxIdContains?: string,
        taxIdDoesNotContain?: string,
        taxIdEquals?: string,
        taxIdNotEquals?: string,
        taxIdSpecified?: boolean,
        taxIdIn?: Array<string>,
        taxIdNotIn?: Array<string>,
        kycStatusEquals?: 'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED',
        kycStatusNotEquals?: 'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED',
        kycStatusSpecified?: boolean,
        kycStatusIn?: Array<'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED'>,
        kycStatusNotIn?: Array<'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED'>,
        createdAtGreaterThan?: string,
        createdAtLessThan?: string,
        createdAtGreaterThanOrEqual?: string,
        createdAtLessThanOrEqual?: string,
        createdAtEquals?: string,
        createdAtNotEquals?: string,
        createdAtSpecified?: boolean,
        createdAtIn?: Array<string>,
        createdAtNotIn?: Array<string>,
        updatedAtGreaterThan?: string,
        updatedAtLessThan?: string,
        updatedAtGreaterThanOrEqual?: string,
        updatedAtLessThanOrEqual?: string,
        updatedAtEquals?: string,
        updatedAtNotEquals?: string,
        updatedAtSpecified?: boolean,
        updatedAtIn?: Array<string>,
        updatedAtNotIn?: Array<string>,
        deletedEquals?: boolean,
        deletedNotEquals?: boolean,
        deletedSpecified?: boolean,
        deletedIn?: Array<boolean>,
        deletedNotIn?: Array<boolean>,
        deletedAtGreaterThan?: string,
        deletedAtLessThan?: string,
        deletedAtGreaterThanOrEqual?: string,
        deletedAtLessThanOrEqual?: string,
        deletedAtEquals?: string,
        deletedAtNotEquals?: string,
        deletedAtSpecified?: boolean,
        deletedAtIn?: Array<string>,
        deletedAtNotIn?: Array<string>,
        userIdGreaterThan?: number,
        userIdLessThan?: number,
        userIdGreaterThanOrEqual?: number,
        userIdLessThanOrEqual?: number,
        userIdEquals?: number,
        userIdNotEquals?: number,
        userIdSpecified?: boolean,
        userIdIn?: Array<number>,
        userIdNotIn?: Array<number>,
        distinct?: boolean,
    ): CancelablePromise<Array<UserProfileDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-profiles',
            query: {
                'id.greaterThan': idGreaterThan,
                'id.lessThan': idLessThan,
                'id.greaterThanOrEqual': idGreaterThanOrEqual,
                'id.lessThanOrEqual': idLessThanOrEqual,
                'id.equals': idEquals,
                'id.notEquals': idNotEquals,
                'id.specified': idSpecified,
                'id.in': idIn,
                'id.notIn': idNotIn,
                'userType.equals': userTypeEquals,
                'userType.notEquals': userTypeNotEquals,
                'userType.specified': userTypeSpecified,
                'userType.in': userTypeIn,
                'userType.notIn': userTypeNotIn,
                'displayName.contains': displayNameContains,
                'displayName.doesNotContain': displayNameDoesNotContain,
                'displayName.equals': displayNameEquals,
                'displayName.notEquals': displayNameNotEquals,
                'displayName.specified': displayNameSpecified,
                'displayName.in': displayNameIn,
                'displayName.notIn': displayNameNotIn,
                'firstName.contains': firstNameContains,
                'firstName.doesNotContain': firstNameDoesNotContain,
                'firstName.equals': firstNameEquals,
                'firstName.notEquals': firstNameNotEquals,
                'firstName.specified': firstNameSpecified,
                'firstName.in': firstNameIn,
                'firstName.notIn': firstNameNotIn,
                'lastName.contains': lastNameContains,
                'lastName.doesNotContain': lastNameDoesNotContain,
                'lastName.equals': lastNameEquals,
                'lastName.notEquals': lastNameNotEquals,
                'lastName.specified': lastNameSpecified,
                'lastName.in': lastNameIn,
                'lastName.notIn': lastNameNotIn,
                'phone.contains': phoneContains,
                'phone.doesNotContain': phoneDoesNotContain,
                'phone.equals': phoneEquals,
                'phone.notEquals': phoneNotEquals,
                'phone.specified': phoneSpecified,
                'phone.in': phoneIn,
                'phone.notIn': phoneNotIn,
                'companyName.contains': companyNameContains,
                'companyName.doesNotContain': companyNameDoesNotContain,
                'companyName.equals': companyNameEquals,
                'companyName.notEquals': companyNameNotEquals,
                'companyName.specified': companyNameSpecified,
                'companyName.in': companyNameIn,
                'companyName.notIn': companyNameNotIn,
                'taxId.contains': taxIdContains,
                'taxId.doesNotContain': taxIdDoesNotContain,
                'taxId.equals': taxIdEquals,
                'taxId.notEquals': taxIdNotEquals,
                'taxId.specified': taxIdSpecified,
                'taxId.in': taxIdIn,
                'taxId.notIn': taxIdNotIn,
                'kycStatus.equals': kycStatusEquals,
                'kycStatus.notEquals': kycStatusNotEquals,
                'kycStatus.specified': kycStatusSpecified,
                'kycStatus.in': kycStatusIn,
                'kycStatus.notIn': kycStatusNotIn,
                'createdAt.greaterThan': createdAtGreaterThan,
                'createdAt.lessThan': createdAtLessThan,
                'createdAt.greaterThanOrEqual': createdAtGreaterThanOrEqual,
                'createdAt.lessThanOrEqual': createdAtLessThanOrEqual,
                'createdAt.equals': createdAtEquals,
                'createdAt.notEquals': createdAtNotEquals,
                'createdAt.specified': createdAtSpecified,
                'createdAt.in': createdAtIn,
                'createdAt.notIn': createdAtNotIn,
                'updatedAt.greaterThan': updatedAtGreaterThan,
                'updatedAt.lessThan': updatedAtLessThan,
                'updatedAt.greaterThanOrEqual': updatedAtGreaterThanOrEqual,
                'updatedAt.lessThanOrEqual': updatedAtLessThanOrEqual,
                'updatedAt.equals': updatedAtEquals,
                'updatedAt.notEquals': updatedAtNotEquals,
                'updatedAt.specified': updatedAtSpecified,
                'updatedAt.in': updatedAtIn,
                'updatedAt.notIn': updatedAtNotIn,
                'deleted.equals': deletedEquals,
                'deleted.notEquals': deletedNotEquals,
                'deleted.specified': deletedSpecified,
                'deleted.in': deletedIn,
                'deleted.notIn': deletedNotIn,
                'deletedAt.greaterThan': deletedAtGreaterThan,
                'deletedAt.lessThan': deletedAtLessThan,
                'deletedAt.greaterThanOrEqual': deletedAtGreaterThanOrEqual,
                'deletedAt.lessThanOrEqual': deletedAtLessThanOrEqual,
                'deletedAt.equals': deletedAtEquals,
                'deletedAt.notEquals': deletedAtNotEquals,
                'deletedAt.specified': deletedAtSpecified,
                'deletedAt.in': deletedAtIn,
                'deletedAt.notIn': deletedAtNotIn,
                'userId.greaterThan': userIdGreaterThan,
                'userId.lessThan': userIdLessThan,
                'userId.greaterThanOrEqual': userIdGreaterThanOrEqual,
                'userId.lessThanOrEqual': userIdLessThanOrEqual,
                'userId.equals': userIdEquals,
                'userId.notEquals': userIdNotEquals,
                'userId.specified': userIdSpecified,
                'userId.in': userIdIn,
                'userId.notIn': userIdNotIn,
                'distinct': distinct,
            },
        });
    }
    /**
     * @param requestBody
     * @returns UserProfileDTO OK
     * @throws ApiError
     */
    public static createUserProfile(
        requestBody: UserProfileDTO,
    ): CancelablePromise<UserProfileDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-profiles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param idGreaterThan
     * @param idLessThan
     * @param idGreaterThanOrEqual
     * @param idLessThanOrEqual
     * @param idEquals
     * @param idNotEquals
     * @param idSpecified
     * @param idIn
     * @param idNotIn
     * @param userTypeEquals
     * @param userTypeNotEquals
     * @param userTypeSpecified
     * @param userTypeIn
     * @param userTypeNotIn
     * @param displayNameContains
     * @param displayNameDoesNotContain
     * @param displayNameEquals
     * @param displayNameNotEquals
     * @param displayNameSpecified
     * @param displayNameIn
     * @param displayNameNotIn
     * @param firstNameContains
     * @param firstNameDoesNotContain
     * @param firstNameEquals
     * @param firstNameNotEquals
     * @param firstNameSpecified
     * @param firstNameIn
     * @param firstNameNotIn
     * @param lastNameContains
     * @param lastNameDoesNotContain
     * @param lastNameEquals
     * @param lastNameNotEquals
     * @param lastNameSpecified
     * @param lastNameIn
     * @param lastNameNotIn
     * @param phoneContains
     * @param phoneDoesNotContain
     * @param phoneEquals
     * @param phoneNotEquals
     * @param phoneSpecified
     * @param phoneIn
     * @param phoneNotIn
     * @param companyNameContains
     * @param companyNameDoesNotContain
     * @param companyNameEquals
     * @param companyNameNotEquals
     * @param companyNameSpecified
     * @param companyNameIn
     * @param companyNameNotIn
     * @param taxIdContains
     * @param taxIdDoesNotContain
     * @param taxIdEquals
     * @param taxIdNotEquals
     * @param taxIdSpecified
     * @param taxIdIn
     * @param taxIdNotIn
     * @param kycStatusEquals
     * @param kycStatusNotEquals
     * @param kycStatusSpecified
     * @param kycStatusIn
     * @param kycStatusNotIn
     * @param createdAtGreaterThan
     * @param createdAtLessThan
     * @param createdAtGreaterThanOrEqual
     * @param createdAtLessThanOrEqual
     * @param createdAtEquals
     * @param createdAtNotEquals
     * @param createdAtSpecified
     * @param createdAtIn
     * @param createdAtNotIn
     * @param updatedAtGreaterThan
     * @param updatedAtLessThan
     * @param updatedAtGreaterThanOrEqual
     * @param updatedAtLessThanOrEqual
     * @param updatedAtEquals
     * @param updatedAtNotEquals
     * @param updatedAtSpecified
     * @param updatedAtIn
     * @param updatedAtNotIn
     * @param deletedEquals
     * @param deletedNotEquals
     * @param deletedSpecified
     * @param deletedIn
     * @param deletedNotIn
     * @param deletedAtGreaterThan
     * @param deletedAtLessThan
     * @param deletedAtGreaterThanOrEqual
     * @param deletedAtLessThanOrEqual
     * @param deletedAtEquals
     * @param deletedAtNotEquals
     * @param deletedAtSpecified
     * @param deletedAtIn
     * @param deletedAtNotIn
     * @param userIdGreaterThan
     * @param userIdLessThan
     * @param userIdGreaterThanOrEqual
     * @param userIdLessThanOrEqual
     * @param userIdEquals
     * @param userIdNotEquals
     * @param userIdSpecified
     * @param userIdIn
     * @param userIdNotIn
     * @param distinct
     * @returns number OK
     * @throws ApiError
     */
    public static countUserProfiles(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        userTypeEquals?: 'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN',
        userTypeNotEquals?: 'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN',
        userTypeSpecified?: boolean,
        userTypeIn?: Array<'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN'>,
        userTypeNotIn?: Array<'BUYER' | 'SELLER' | 'AGENCY' | 'MODERATOR' | 'MANAGER' | 'ADMIN'>,
        displayNameContains?: string,
        displayNameDoesNotContain?: string,
        displayNameEquals?: string,
        displayNameNotEquals?: string,
        displayNameSpecified?: boolean,
        displayNameIn?: Array<string>,
        displayNameNotIn?: Array<string>,
        firstNameContains?: string,
        firstNameDoesNotContain?: string,
        firstNameEquals?: string,
        firstNameNotEquals?: string,
        firstNameSpecified?: boolean,
        firstNameIn?: Array<string>,
        firstNameNotIn?: Array<string>,
        lastNameContains?: string,
        lastNameDoesNotContain?: string,
        lastNameEquals?: string,
        lastNameNotEquals?: string,
        lastNameSpecified?: boolean,
        lastNameIn?: Array<string>,
        lastNameNotIn?: Array<string>,
        phoneContains?: string,
        phoneDoesNotContain?: string,
        phoneEquals?: string,
        phoneNotEquals?: string,
        phoneSpecified?: boolean,
        phoneIn?: Array<string>,
        phoneNotIn?: Array<string>,
        companyNameContains?: string,
        companyNameDoesNotContain?: string,
        companyNameEquals?: string,
        companyNameNotEquals?: string,
        companyNameSpecified?: boolean,
        companyNameIn?: Array<string>,
        companyNameNotIn?: Array<string>,
        taxIdContains?: string,
        taxIdDoesNotContain?: string,
        taxIdEquals?: string,
        taxIdNotEquals?: string,
        taxIdSpecified?: boolean,
        taxIdIn?: Array<string>,
        taxIdNotIn?: Array<string>,
        kycStatusEquals?: 'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED',
        kycStatusNotEquals?: 'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED',
        kycStatusSpecified?: boolean,
        kycStatusIn?: Array<'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED'>,
        kycStatusNotIn?: Array<'NONE' | 'PENDING' | 'VERIFIED' | 'REJECTED'>,
        createdAtGreaterThan?: string,
        createdAtLessThan?: string,
        createdAtGreaterThanOrEqual?: string,
        createdAtLessThanOrEqual?: string,
        createdAtEquals?: string,
        createdAtNotEquals?: string,
        createdAtSpecified?: boolean,
        createdAtIn?: Array<string>,
        createdAtNotIn?: Array<string>,
        updatedAtGreaterThan?: string,
        updatedAtLessThan?: string,
        updatedAtGreaterThanOrEqual?: string,
        updatedAtLessThanOrEqual?: string,
        updatedAtEquals?: string,
        updatedAtNotEquals?: string,
        updatedAtSpecified?: boolean,
        updatedAtIn?: Array<string>,
        updatedAtNotIn?: Array<string>,
        deletedEquals?: boolean,
        deletedNotEquals?: boolean,
        deletedSpecified?: boolean,
        deletedIn?: Array<boolean>,
        deletedNotIn?: Array<boolean>,
        deletedAtGreaterThan?: string,
        deletedAtLessThan?: string,
        deletedAtGreaterThanOrEqual?: string,
        deletedAtLessThanOrEqual?: string,
        deletedAtEquals?: string,
        deletedAtNotEquals?: string,
        deletedAtSpecified?: boolean,
        deletedAtIn?: Array<string>,
        deletedAtNotIn?: Array<string>,
        userIdGreaterThan?: number,
        userIdLessThan?: number,
        userIdGreaterThanOrEqual?: number,
        userIdLessThanOrEqual?: number,
        userIdEquals?: number,
        userIdNotEquals?: number,
        userIdSpecified?: boolean,
        userIdIn?: Array<number>,
        userIdNotIn?: Array<number>,
        distinct?: boolean,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-profiles/count',
            query: {
                'id.greaterThan': idGreaterThan,
                'id.lessThan': idLessThan,
                'id.greaterThanOrEqual': idGreaterThanOrEqual,
                'id.lessThanOrEqual': idLessThanOrEqual,
                'id.equals': idEquals,
                'id.notEquals': idNotEquals,
                'id.specified': idSpecified,
                'id.in': idIn,
                'id.notIn': idNotIn,
                'userType.equals': userTypeEquals,
                'userType.notEquals': userTypeNotEquals,
                'userType.specified': userTypeSpecified,
                'userType.in': userTypeIn,
                'userType.notIn': userTypeNotIn,
                'displayName.contains': displayNameContains,
                'displayName.doesNotContain': displayNameDoesNotContain,
                'displayName.equals': displayNameEquals,
                'displayName.notEquals': displayNameNotEquals,
                'displayName.specified': displayNameSpecified,
                'displayName.in': displayNameIn,
                'displayName.notIn': displayNameNotIn,
                'firstName.contains': firstNameContains,
                'firstName.doesNotContain': firstNameDoesNotContain,
                'firstName.equals': firstNameEquals,
                'firstName.notEquals': firstNameNotEquals,
                'firstName.specified': firstNameSpecified,
                'firstName.in': firstNameIn,
                'firstName.notIn': firstNameNotIn,
                'lastName.contains': lastNameContains,
                'lastName.doesNotContain': lastNameDoesNotContain,
                'lastName.equals': lastNameEquals,
                'lastName.notEquals': lastNameNotEquals,
                'lastName.specified': lastNameSpecified,
                'lastName.in': lastNameIn,
                'lastName.notIn': lastNameNotIn,
                'phone.contains': phoneContains,
                'phone.doesNotContain': phoneDoesNotContain,
                'phone.equals': phoneEquals,
                'phone.notEquals': phoneNotEquals,
                'phone.specified': phoneSpecified,
                'phone.in': phoneIn,
                'phone.notIn': phoneNotIn,
                'companyName.contains': companyNameContains,
                'companyName.doesNotContain': companyNameDoesNotContain,
                'companyName.equals': companyNameEquals,
                'companyName.notEquals': companyNameNotEquals,
                'companyName.specified': companyNameSpecified,
                'companyName.in': companyNameIn,
                'companyName.notIn': companyNameNotIn,
                'taxId.contains': taxIdContains,
                'taxId.doesNotContain': taxIdDoesNotContain,
                'taxId.equals': taxIdEquals,
                'taxId.notEquals': taxIdNotEquals,
                'taxId.specified': taxIdSpecified,
                'taxId.in': taxIdIn,
                'taxId.notIn': taxIdNotIn,
                'kycStatus.equals': kycStatusEquals,
                'kycStatus.notEquals': kycStatusNotEquals,
                'kycStatus.specified': kycStatusSpecified,
                'kycStatus.in': kycStatusIn,
                'kycStatus.notIn': kycStatusNotIn,
                'createdAt.greaterThan': createdAtGreaterThan,
                'createdAt.lessThan': createdAtLessThan,
                'createdAt.greaterThanOrEqual': createdAtGreaterThanOrEqual,
                'createdAt.lessThanOrEqual': createdAtLessThanOrEqual,
                'createdAt.equals': createdAtEquals,
                'createdAt.notEquals': createdAtNotEquals,
                'createdAt.specified': createdAtSpecified,
                'createdAt.in': createdAtIn,
                'createdAt.notIn': createdAtNotIn,
                'updatedAt.greaterThan': updatedAtGreaterThan,
                'updatedAt.lessThan': updatedAtLessThan,
                'updatedAt.greaterThanOrEqual': updatedAtGreaterThanOrEqual,
                'updatedAt.lessThanOrEqual': updatedAtLessThanOrEqual,
                'updatedAt.equals': updatedAtEquals,
                'updatedAt.notEquals': updatedAtNotEquals,
                'updatedAt.specified': updatedAtSpecified,
                'updatedAt.in': updatedAtIn,
                'updatedAt.notIn': updatedAtNotIn,
                'deleted.equals': deletedEquals,
                'deleted.notEquals': deletedNotEquals,
                'deleted.specified': deletedSpecified,
                'deleted.in': deletedIn,
                'deleted.notIn': deletedNotIn,
                'deletedAt.greaterThan': deletedAtGreaterThan,
                'deletedAt.lessThan': deletedAtLessThan,
                'deletedAt.greaterThanOrEqual': deletedAtGreaterThanOrEqual,
                'deletedAt.lessThanOrEqual': deletedAtLessThanOrEqual,
                'deletedAt.equals': deletedAtEquals,
                'deletedAt.notEquals': deletedAtNotEquals,
                'deletedAt.specified': deletedAtSpecified,
                'deletedAt.in': deletedAtIn,
                'deletedAt.notIn': deletedAtNotIn,
                'userId.greaterThan': userIdGreaterThan,
                'userId.lessThan': userIdLessThan,
                'userId.greaterThanOrEqual': userIdGreaterThanOrEqual,
                'userId.lessThanOrEqual': userIdLessThanOrEqual,
                'userId.equals': userIdEquals,
                'userId.notEquals': userIdNotEquals,
                'userId.specified': userIdSpecified,
                'userId.in': userIdIn,
                'userId.notIn': userIdNotIn,
                'distinct': distinct,
            },
        });
    }
}
