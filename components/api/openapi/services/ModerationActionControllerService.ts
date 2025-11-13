/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModerationActionDTO } from '../models/ModerationActionDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModerationActionControllerService {
    /**
     * @param id
     * @returns ModerationActionDTO OK
     * @throws ApiError
     */
    public static getModerationAction(
        id: number,
    ): CancelablePromise<ModerationActionDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/moderation-actions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ModerationActionDTO OK
     * @throws ApiError
     */
    public static updateModerationAction(
        id: number,
        requestBody: ModerationActionDTO,
    ): CancelablePromise<ModerationActionDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/moderation-actions/{id}',
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
    public static deleteModerationAction(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/moderation-actions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ModerationActionDTO OK
     * @throws ApiError
     */
    public static partialUpdateModerationAction(
        id: number,
        requestBody: ModerationActionDTO,
    ): CancelablePromise<ModerationActionDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/moderation-actions/{id}',
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
     * @param actionEquals
     * @param actionNotEquals
     * @param actionSpecified
     * @param actionIn
     * @param actionNotIn
     * @param reasonContains
     * @param reasonDoesNotContain
     * @param reasonEquals
     * @param reasonNotEquals
     * @param reasonSpecified
     * @param reasonIn
     * @param reasonNotIn
     * @param actedAtGreaterThan
     * @param actedAtLessThan
     * @param actedAtGreaterThanOrEqual
     * @param actedAtLessThanOrEqual
     * @param actedAtEquals
     * @param actedAtNotEquals
     * @param actedAtSpecified
     * @param actedAtIn
     * @param actedAtNotIn
     * @param listingIdGreaterThan
     * @param listingIdLessThan
     * @param listingIdGreaterThanOrEqual
     * @param listingIdLessThanOrEqual
     * @param listingIdEquals
     * @param listingIdNotEquals
     * @param listingIdSpecified
     * @param listingIdIn
     * @param listingIdNotIn
     * @param moderatorIdGreaterThan
     * @param moderatorIdLessThan
     * @param moderatorIdGreaterThanOrEqual
     * @param moderatorIdLessThanOrEqual
     * @param moderatorIdEquals
     * @param moderatorIdNotEquals
     * @param moderatorIdSpecified
     * @param moderatorIdIn
     * @param moderatorIdNotIn
     * @param distinct
     * @returns ModerationActionDTO OK
     * @throws ApiError
     */
    public static getAllModerationActions(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        actionEquals?: 'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE',
        actionNotEquals?: 'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE',
        actionSpecified?: boolean,
        actionIn?: Array<'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE'>,
        actionNotIn?: Array<'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE'>,
        reasonContains?: string,
        reasonDoesNotContain?: string,
        reasonEquals?: string,
        reasonNotEquals?: string,
        reasonSpecified?: boolean,
        reasonIn?: Array<string>,
        reasonNotIn?: Array<string>,
        actedAtGreaterThan?: string,
        actedAtLessThan?: string,
        actedAtGreaterThanOrEqual?: string,
        actedAtLessThanOrEqual?: string,
        actedAtEquals?: string,
        actedAtNotEquals?: string,
        actedAtSpecified?: boolean,
        actedAtIn?: Array<string>,
        actedAtNotIn?: Array<string>,
        listingIdGreaterThan?: number,
        listingIdLessThan?: number,
        listingIdGreaterThanOrEqual?: number,
        listingIdLessThanOrEqual?: number,
        listingIdEquals?: number,
        listingIdNotEquals?: number,
        listingIdSpecified?: boolean,
        listingIdIn?: Array<number>,
        listingIdNotIn?: Array<number>,
        moderatorIdGreaterThan?: number,
        moderatorIdLessThan?: number,
        moderatorIdGreaterThanOrEqual?: number,
        moderatorIdLessThanOrEqual?: number,
        moderatorIdEquals?: number,
        moderatorIdNotEquals?: number,
        moderatorIdSpecified?: boolean,
        moderatorIdIn?: Array<number>,
        moderatorIdNotIn?: Array<number>,
        distinct?: boolean,
    ): CancelablePromise<Array<ModerationActionDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/moderation-actions',
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
                'action.equals': actionEquals,
                'action.notEquals': actionNotEquals,
                'action.specified': actionSpecified,
                'action.in': actionIn,
                'action.notIn': actionNotIn,
                'reason.contains': reasonContains,
                'reason.doesNotContain': reasonDoesNotContain,
                'reason.equals': reasonEquals,
                'reason.notEquals': reasonNotEquals,
                'reason.specified': reasonSpecified,
                'reason.in': reasonIn,
                'reason.notIn': reasonNotIn,
                'actedAt.greaterThan': actedAtGreaterThan,
                'actedAt.lessThan': actedAtLessThan,
                'actedAt.greaterThanOrEqual': actedAtGreaterThanOrEqual,
                'actedAt.lessThanOrEqual': actedAtLessThanOrEqual,
                'actedAt.equals': actedAtEquals,
                'actedAt.notEquals': actedAtNotEquals,
                'actedAt.specified': actedAtSpecified,
                'actedAt.in': actedAtIn,
                'actedAt.notIn': actedAtNotIn,
                'listingId.greaterThan': listingIdGreaterThan,
                'listingId.lessThan': listingIdLessThan,
                'listingId.greaterThanOrEqual': listingIdGreaterThanOrEqual,
                'listingId.lessThanOrEqual': listingIdLessThanOrEqual,
                'listingId.equals': listingIdEquals,
                'listingId.notEquals': listingIdNotEquals,
                'listingId.specified': listingIdSpecified,
                'listingId.in': listingIdIn,
                'listingId.notIn': listingIdNotIn,
                'moderatorId.greaterThan': moderatorIdGreaterThan,
                'moderatorId.lessThan': moderatorIdLessThan,
                'moderatorId.greaterThanOrEqual': moderatorIdGreaterThanOrEqual,
                'moderatorId.lessThanOrEqual': moderatorIdLessThanOrEqual,
                'moderatorId.equals': moderatorIdEquals,
                'moderatorId.notEquals': moderatorIdNotEquals,
                'moderatorId.specified': moderatorIdSpecified,
                'moderatorId.in': moderatorIdIn,
                'moderatorId.notIn': moderatorIdNotIn,
                'distinct': distinct,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ModerationActionDTO OK
     * @throws ApiError
     */
    public static createModerationAction(
        requestBody: ModerationActionDTO,
    ): CancelablePromise<ModerationActionDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/moderation-actions',
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
     * @param actionEquals
     * @param actionNotEquals
     * @param actionSpecified
     * @param actionIn
     * @param actionNotIn
     * @param reasonContains
     * @param reasonDoesNotContain
     * @param reasonEquals
     * @param reasonNotEquals
     * @param reasonSpecified
     * @param reasonIn
     * @param reasonNotIn
     * @param actedAtGreaterThan
     * @param actedAtLessThan
     * @param actedAtGreaterThanOrEqual
     * @param actedAtLessThanOrEqual
     * @param actedAtEquals
     * @param actedAtNotEquals
     * @param actedAtSpecified
     * @param actedAtIn
     * @param actedAtNotIn
     * @param listingIdGreaterThan
     * @param listingIdLessThan
     * @param listingIdGreaterThanOrEqual
     * @param listingIdLessThanOrEqual
     * @param listingIdEquals
     * @param listingIdNotEquals
     * @param listingIdSpecified
     * @param listingIdIn
     * @param listingIdNotIn
     * @param moderatorIdGreaterThan
     * @param moderatorIdLessThan
     * @param moderatorIdGreaterThanOrEqual
     * @param moderatorIdLessThanOrEqual
     * @param moderatorIdEquals
     * @param moderatorIdNotEquals
     * @param moderatorIdSpecified
     * @param moderatorIdIn
     * @param moderatorIdNotIn
     * @param distinct
     * @returns number OK
     * @throws ApiError
     */
    public static countModerationActions(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        actionEquals?: 'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE',
        actionNotEquals?: 'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE',
        actionSpecified?: boolean,
        actionIn?: Array<'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE'>,
        actionNotIn?: Array<'SUBMIT_FOR_REVIEW' | 'APPROVE' | 'REJECT' | 'SUSPEND' | 'RESTORE' | 'MARK_SOLD' | 'ARCHIVE'>,
        reasonContains?: string,
        reasonDoesNotContain?: string,
        reasonEquals?: string,
        reasonNotEquals?: string,
        reasonSpecified?: boolean,
        reasonIn?: Array<string>,
        reasonNotIn?: Array<string>,
        actedAtGreaterThan?: string,
        actedAtLessThan?: string,
        actedAtGreaterThanOrEqual?: string,
        actedAtLessThanOrEqual?: string,
        actedAtEquals?: string,
        actedAtNotEquals?: string,
        actedAtSpecified?: boolean,
        actedAtIn?: Array<string>,
        actedAtNotIn?: Array<string>,
        listingIdGreaterThan?: number,
        listingIdLessThan?: number,
        listingIdGreaterThanOrEqual?: number,
        listingIdLessThanOrEqual?: number,
        listingIdEquals?: number,
        listingIdNotEquals?: number,
        listingIdSpecified?: boolean,
        listingIdIn?: Array<number>,
        listingIdNotIn?: Array<number>,
        moderatorIdGreaterThan?: number,
        moderatorIdLessThan?: number,
        moderatorIdGreaterThanOrEqual?: number,
        moderatorIdLessThanOrEqual?: number,
        moderatorIdEquals?: number,
        moderatorIdNotEquals?: number,
        moderatorIdSpecified?: boolean,
        moderatorIdIn?: Array<number>,
        moderatorIdNotIn?: Array<number>,
        distinct?: boolean,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/moderation-actions/count',
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
                'action.equals': actionEquals,
                'action.notEquals': actionNotEquals,
                'action.specified': actionSpecified,
                'action.in': actionIn,
                'action.notIn': actionNotIn,
                'reason.contains': reasonContains,
                'reason.doesNotContain': reasonDoesNotContain,
                'reason.equals': reasonEquals,
                'reason.notEquals': reasonNotEquals,
                'reason.specified': reasonSpecified,
                'reason.in': reasonIn,
                'reason.notIn': reasonNotIn,
                'actedAt.greaterThan': actedAtGreaterThan,
                'actedAt.lessThan': actedAtLessThan,
                'actedAt.greaterThanOrEqual': actedAtGreaterThanOrEqual,
                'actedAt.lessThanOrEqual': actedAtLessThanOrEqual,
                'actedAt.equals': actedAtEquals,
                'actedAt.notEquals': actedAtNotEquals,
                'actedAt.specified': actedAtSpecified,
                'actedAt.in': actedAtIn,
                'actedAt.notIn': actedAtNotIn,
                'listingId.greaterThan': listingIdGreaterThan,
                'listingId.lessThan': listingIdLessThan,
                'listingId.greaterThanOrEqual': listingIdGreaterThanOrEqual,
                'listingId.lessThanOrEqual': listingIdLessThanOrEqual,
                'listingId.equals': listingIdEquals,
                'listingId.notEquals': listingIdNotEquals,
                'listingId.specified': listingIdSpecified,
                'listingId.in': listingIdIn,
                'listingId.notIn': listingIdNotIn,
                'moderatorId.greaterThan': moderatorIdGreaterThan,
                'moderatorId.lessThan': moderatorIdLessThan,
                'moderatorId.greaterThanOrEqual': moderatorIdGreaterThanOrEqual,
                'moderatorId.lessThanOrEqual': moderatorIdLessThanOrEqual,
                'moderatorId.equals': moderatorIdEquals,
                'moderatorId.notEquals': moderatorIdNotEquals,
                'moderatorId.specified': moderatorIdSpecified,
                'moderatorId.in': moderatorIdIn,
                'moderatorId.notIn': moderatorIdNotIn,
                'distinct': distinct,
            },
        });
    }
}
