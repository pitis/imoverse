/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportDTO } from '../models/ReportDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReportControllerService {
    /**
     * @param id
     * @returns ReportDTO OK
     * @throws ApiError
     */
    public static getReport(
        id: number,
    ): CancelablePromise<ReportDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ReportDTO OK
     * @throws ApiError
     */
    public static updateReport(
        id: number,
        requestBody: ReportDTO,
    ): CancelablePromise<ReportDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/reports/{id}',
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
    public static deleteReport(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/reports/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ReportDTO OK
     * @throws ApiError
     */
    public static partialUpdateReport(
        id: number,
        requestBody: ReportDTO,
    ): CancelablePromise<ReportDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/reports/{id}',
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
     * @param reasonContains
     * @param reasonDoesNotContain
     * @param reasonEquals
     * @param reasonNotEquals
     * @param reasonSpecified
     * @param reasonIn
     * @param reasonNotIn
     * @param createdAtGreaterThan
     * @param createdAtLessThan
     * @param createdAtGreaterThanOrEqual
     * @param createdAtLessThanOrEqual
     * @param createdAtEquals
     * @param createdAtNotEquals
     * @param createdAtSpecified
     * @param createdAtIn
     * @param createdAtNotIn
     * @param statusEquals
     * @param statusNotEquals
     * @param statusSpecified
     * @param statusIn
     * @param statusNotIn
     * @param listingIdGreaterThan
     * @param listingIdLessThan
     * @param listingIdGreaterThanOrEqual
     * @param listingIdLessThanOrEqual
     * @param listingIdEquals
     * @param listingIdNotEquals
     * @param listingIdSpecified
     * @param listingIdIn
     * @param listingIdNotIn
     * @param reporterIdGreaterThan
     * @param reporterIdLessThan
     * @param reporterIdGreaterThanOrEqual
     * @param reporterIdLessThanOrEqual
     * @param reporterIdEquals
     * @param reporterIdNotEquals
     * @param reporterIdSpecified
     * @param reporterIdIn
     * @param reporterIdNotIn
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
     * @returns ReportDTO OK
     * @throws ApiError
     */
    public static getAllReports(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        reasonContains?: string,
        reasonDoesNotContain?: string,
        reasonEquals?: string,
        reasonNotEquals?: string,
        reasonSpecified?: boolean,
        reasonIn?: Array<string>,
        reasonNotIn?: Array<string>,
        createdAtGreaterThan?: string,
        createdAtLessThan?: string,
        createdAtGreaterThanOrEqual?: string,
        createdAtLessThanOrEqual?: string,
        createdAtEquals?: string,
        createdAtNotEquals?: string,
        createdAtSpecified?: boolean,
        createdAtIn?: Array<string>,
        createdAtNotIn?: Array<string>,
        statusEquals?: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED',
        statusNotEquals?: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED',
        statusSpecified?: boolean,
        statusIn?: Array<'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED'>,
        statusNotIn?: Array<'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED'>,
        listingIdGreaterThan?: number,
        listingIdLessThan?: number,
        listingIdGreaterThanOrEqual?: number,
        listingIdLessThanOrEqual?: number,
        listingIdEquals?: number,
        listingIdNotEquals?: number,
        listingIdSpecified?: boolean,
        listingIdIn?: Array<number>,
        listingIdNotIn?: Array<number>,
        reporterIdGreaterThan?: number,
        reporterIdLessThan?: number,
        reporterIdGreaterThanOrEqual?: number,
        reporterIdLessThanOrEqual?: number,
        reporterIdEquals?: number,
        reporterIdNotEquals?: number,
        reporterIdSpecified?: boolean,
        reporterIdIn?: Array<number>,
        reporterIdNotIn?: Array<number>,
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
    ): CancelablePromise<Array<ReportDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports',
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
                'reason.contains': reasonContains,
                'reason.doesNotContain': reasonDoesNotContain,
                'reason.equals': reasonEquals,
                'reason.notEquals': reasonNotEquals,
                'reason.specified': reasonSpecified,
                'reason.in': reasonIn,
                'reason.notIn': reasonNotIn,
                'createdAt.greaterThan': createdAtGreaterThan,
                'createdAt.lessThan': createdAtLessThan,
                'createdAt.greaterThanOrEqual': createdAtGreaterThanOrEqual,
                'createdAt.lessThanOrEqual': createdAtLessThanOrEqual,
                'createdAt.equals': createdAtEquals,
                'createdAt.notEquals': createdAtNotEquals,
                'createdAt.specified': createdAtSpecified,
                'createdAt.in': createdAtIn,
                'createdAt.notIn': createdAtNotIn,
                'status.equals': statusEquals,
                'status.notEquals': statusNotEquals,
                'status.specified': statusSpecified,
                'status.in': statusIn,
                'status.notIn': statusNotIn,
                'listingId.greaterThan': listingIdGreaterThan,
                'listingId.lessThan': listingIdLessThan,
                'listingId.greaterThanOrEqual': listingIdGreaterThanOrEqual,
                'listingId.lessThanOrEqual': listingIdLessThanOrEqual,
                'listingId.equals': listingIdEquals,
                'listingId.notEquals': listingIdNotEquals,
                'listingId.specified': listingIdSpecified,
                'listingId.in': listingIdIn,
                'listingId.notIn': listingIdNotIn,
                'reporterId.greaterThan': reporterIdGreaterThan,
                'reporterId.lessThan': reporterIdLessThan,
                'reporterId.greaterThanOrEqual': reporterIdGreaterThanOrEqual,
                'reporterId.lessThanOrEqual': reporterIdLessThanOrEqual,
                'reporterId.equals': reporterIdEquals,
                'reporterId.notEquals': reporterIdNotEquals,
                'reporterId.specified': reporterIdSpecified,
                'reporterId.in': reporterIdIn,
                'reporterId.notIn': reporterIdNotIn,
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
     * @returns ReportDTO OK
     * @throws ApiError
     */
    public static createReport(
        requestBody: ReportDTO,
    ): CancelablePromise<ReportDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reports',
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
     * @param reasonContains
     * @param reasonDoesNotContain
     * @param reasonEquals
     * @param reasonNotEquals
     * @param reasonSpecified
     * @param reasonIn
     * @param reasonNotIn
     * @param createdAtGreaterThan
     * @param createdAtLessThan
     * @param createdAtGreaterThanOrEqual
     * @param createdAtLessThanOrEqual
     * @param createdAtEquals
     * @param createdAtNotEquals
     * @param createdAtSpecified
     * @param createdAtIn
     * @param createdAtNotIn
     * @param statusEquals
     * @param statusNotEquals
     * @param statusSpecified
     * @param statusIn
     * @param statusNotIn
     * @param listingIdGreaterThan
     * @param listingIdLessThan
     * @param listingIdGreaterThanOrEqual
     * @param listingIdLessThanOrEqual
     * @param listingIdEquals
     * @param listingIdNotEquals
     * @param listingIdSpecified
     * @param listingIdIn
     * @param listingIdNotIn
     * @param reporterIdGreaterThan
     * @param reporterIdLessThan
     * @param reporterIdGreaterThanOrEqual
     * @param reporterIdLessThanOrEqual
     * @param reporterIdEquals
     * @param reporterIdNotEquals
     * @param reporterIdSpecified
     * @param reporterIdIn
     * @param reporterIdNotIn
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
    public static countReports(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        reasonContains?: string,
        reasonDoesNotContain?: string,
        reasonEquals?: string,
        reasonNotEquals?: string,
        reasonSpecified?: boolean,
        reasonIn?: Array<string>,
        reasonNotIn?: Array<string>,
        createdAtGreaterThan?: string,
        createdAtLessThan?: string,
        createdAtGreaterThanOrEqual?: string,
        createdAtLessThanOrEqual?: string,
        createdAtEquals?: string,
        createdAtNotEquals?: string,
        createdAtSpecified?: boolean,
        createdAtIn?: Array<string>,
        createdAtNotIn?: Array<string>,
        statusEquals?: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED',
        statusNotEquals?: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED',
        statusSpecified?: boolean,
        statusIn?: Array<'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED'>,
        statusNotIn?: Array<'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'REJECTED'>,
        listingIdGreaterThan?: number,
        listingIdLessThan?: number,
        listingIdGreaterThanOrEqual?: number,
        listingIdLessThanOrEqual?: number,
        listingIdEquals?: number,
        listingIdNotEquals?: number,
        listingIdSpecified?: boolean,
        listingIdIn?: Array<number>,
        listingIdNotIn?: Array<number>,
        reporterIdGreaterThan?: number,
        reporterIdLessThan?: number,
        reporterIdGreaterThanOrEqual?: number,
        reporterIdLessThanOrEqual?: number,
        reporterIdEquals?: number,
        reporterIdNotEquals?: number,
        reporterIdSpecified?: boolean,
        reporterIdIn?: Array<number>,
        reporterIdNotIn?: Array<number>,
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
            url: '/api/reports/count',
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
                'reason.contains': reasonContains,
                'reason.doesNotContain': reasonDoesNotContain,
                'reason.equals': reasonEquals,
                'reason.notEquals': reasonNotEquals,
                'reason.specified': reasonSpecified,
                'reason.in': reasonIn,
                'reason.notIn': reasonNotIn,
                'createdAt.greaterThan': createdAtGreaterThan,
                'createdAt.lessThan': createdAtLessThan,
                'createdAt.greaterThanOrEqual': createdAtGreaterThanOrEqual,
                'createdAt.lessThanOrEqual': createdAtLessThanOrEqual,
                'createdAt.equals': createdAtEquals,
                'createdAt.notEquals': createdAtNotEquals,
                'createdAt.specified': createdAtSpecified,
                'createdAt.in': createdAtIn,
                'createdAt.notIn': createdAtNotIn,
                'status.equals': statusEquals,
                'status.notEquals': statusNotEquals,
                'status.specified': statusSpecified,
                'status.in': statusIn,
                'status.notIn': statusNotIn,
                'listingId.greaterThan': listingIdGreaterThan,
                'listingId.lessThan': listingIdLessThan,
                'listingId.greaterThanOrEqual': listingIdGreaterThanOrEqual,
                'listingId.lessThanOrEqual': listingIdLessThanOrEqual,
                'listingId.equals': listingIdEquals,
                'listingId.notEquals': listingIdNotEquals,
                'listingId.specified': listingIdSpecified,
                'listingId.in': listingIdIn,
                'listingId.notIn': listingIdNotIn,
                'reporterId.greaterThan': reporterIdGreaterThan,
                'reporterId.lessThan': reporterIdLessThan,
                'reporterId.greaterThanOrEqual': reporterIdGreaterThanOrEqual,
                'reporterId.lessThanOrEqual': reporterIdLessThanOrEqual,
                'reporterId.equals': reporterIdEquals,
                'reporterId.notEquals': reporterIdNotEquals,
                'reporterId.specified': reporterIdSpecified,
                'reporterId.in': reporterIdIn,
                'reporterId.notIn': reporterIdNotIn,
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
