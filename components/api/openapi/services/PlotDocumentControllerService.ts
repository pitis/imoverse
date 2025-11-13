/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlotDocumentDTO } from '../models/PlotDocumentDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlotDocumentControllerService {
    /**
     * @param id
     * @returns PlotDocumentDTO OK
     * @throws ApiError
     */
    public static getPlotDocument(
        id: number,
    ): CancelablePromise<PlotDocumentDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plot-documents/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns PlotDocumentDTO OK
     * @throws ApiError
     */
    public static updatePlotDocument(
        id: number,
        requestBody: PlotDocumentDTO,
    ): CancelablePromise<PlotDocumentDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/plot-documents/{id}',
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
    public static deletePlotDocument(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/plot-documents/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns PlotDocumentDTO OK
     * @throws ApiError
     */
    public static partialUpdatePlotDocument(
        id: number,
        requestBody: PlotDocumentDTO,
    ): CancelablePromise<PlotDocumentDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/plot-documents/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param eagerload
     * @returns PlotDocumentDTO OK
     * @throws ApiError
     */
    public static getAllPlotDocuments(
        eagerload: boolean = true,
    ): CancelablePromise<Array<PlotDocumentDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plot-documents',
            query: {
                'eagerload': eagerload,
            },
        });
    }
    /**
     * @param requestBody
     * @returns PlotDocumentDTO OK
     * @throws ApiError
     */
    public static createPlotDocument(
        requestBody: PlotDocumentDTO,
    ): CancelablePromise<PlotDocumentDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/plot-documents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
