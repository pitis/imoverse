/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRecordsDTOSirutaDTO } from '../models/PaginatedRecordsDTOSirutaDTO';
import type { SirutaCountyDTO } from '../models/SirutaCountyDTO';
import type { SirutaDTO } from '../models/SirutaDTO';
import type { SirutaLocalityDTO } from '../models/SirutaLocalityDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SirutaControllerService {
    /**
     * @param countryCode
     * @returns SirutaDTO OK
     * @throws ApiError
     */
    public static getAllSiruta(
        countryCode?: string,
    ): CancelablePromise<Array<SirutaDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta',
            query: {
                'countryCode': countryCode,
            },
        });
    }
    /**
     * @param countryCode
     * @returns SirutaDTO OK
     * @throws ApiError
     */
    public static getSirutaRegions(
        countryCode: string,
    ): CancelablePromise<Array<SirutaDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta/regions',
            query: {
                'countryCode': countryCode,
            },
        });
    }
    /**
     * @param searchText
     * @param rows
     * @param page
     * @param countryCode
     * @returns PaginatedRecordsDTOSirutaDTO OK
     * @throws ApiError
     */
    public static querySirutaLocality(
        searchText: string,
        rows: number,
        page: number,
        countryCode: string = '',
    ): CancelablePromise<PaginatedRecordsDTOSirutaDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta/query-siruta-locality',
            query: {
                'countryCode': countryCode,
                'searchText': searchText,
                'rows': rows,
                'page': page,
            },
        });
    }
    /**
     * @param rows
     * @param page
     * @param parentCode
     * @param countryCode
     * @param searchText
     * @returns PaginatedRecordsDTOSirutaDTO OK
     * @throws ApiError
     */
    public static querySirutaByParent(
        rows: number,
        page: number,
        parentCode?: number,
        countryCode: string = '',
        searchText?: string,
    ): CancelablePromise<PaginatedRecordsDTOSirutaDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta/query-siruta-by-parent',
            query: {
                'parentCode': parentCode,
                'countryCode': countryCode,
                'searchText': searchText,
                'rows': rows,
                'page': page,
            },
        });
    }
    /**
     * @param countyCode
     * @param countryCode
     * @returns SirutaLocalityDTO OK
     * @throws ApiError
     */
    public static getSirutaLocalities(
        countyCode: string,
        countryCode: string = 'ROU',
    ): CancelablePromise<Array<SirutaLocalityDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta/localities',
            query: {
                'countyCode': countyCode,
                'countryCode': countryCode,
            },
        });
    }
    /**
     * @param countryCode
     * @returns SirutaCountyDTO OK
     * @throws ApiError
     */
    public static getSirutaCounties(
        countryCode: string = 'ROU',
    ): CancelablePromise<Array<SirutaCountyDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/siruta/counties',
            query: {
                'countryCode': countryCode,
            },
        });
    }
}
