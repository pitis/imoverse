/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotDTO } from '../models/LandPlotDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LandPlotListingControllerService {
    /**
     * @param id
     * @returns LandPlotDTO OK
     * @throws ApiError
     */
    public static getLandPlot(
        id: number,
    ): CancelablePromise<LandPlotDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/land-plots/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns LandPlotDTO OK
     * @throws ApiError
     */
    public static updateLandPlot(
        id: number,
        requestBody: LandPlotDTO,
    ): CancelablePromise<LandPlotDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/land-plots/{id}',
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
    public static deleteLandPlot(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/land-plots/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns LandPlotDTO OK
     * @throws ApiError
     */
    public static partialUpdateLandPlot(
        id: number,
        requestBody: LandPlotDTO,
    ): CancelablePromise<LandPlotDTO> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/land-plots/{id}',
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
     * @param titleContains
     * @param titleDoesNotContain
     * @param titleEquals
     * @param titleNotEquals
     * @param titleSpecified
     * @param titleIn
     * @param titleNotIn
     * @param countyContains
     * @param countyDoesNotContain
     * @param countyEquals
     * @param countyNotEquals
     * @param countySpecified
     * @param countyIn
     * @param countyNotIn
     * @param localityContains
     * @param localityDoesNotContain
     * @param localityEquals
     * @param localityNotEquals
     * @param localitySpecified
     * @param localityIn
     * @param localityNotIn
     * @param addressContains
     * @param addressDoesNotContain
     * @param addressEquals
     * @param addressNotEquals
     * @param addressSpecified
     * @param addressIn
     * @param addressNotIn
     * @param postalCodeContains
     * @param postalCodeDoesNotContain
     * @param postalCodeEquals
     * @param postalCodeNotEquals
     * @param postalCodeSpecified
     * @param postalCodeIn
     * @param postalCodeNotIn
     * @param sirutaCodeGreaterThan
     * @param sirutaCodeLessThan
     * @param sirutaCodeGreaterThanOrEqual
     * @param sirutaCodeLessThanOrEqual
     * @param sirutaCodeEquals
     * @param sirutaCodeNotEquals
     * @param sirutaCodeSpecified
     * @param sirutaCodeIn
     * @param sirutaCodeNotIn
     * @param countryCodeContains
     * @param countryCodeDoesNotContain
     * @param countryCodeEquals
     * @param countryCodeNotEquals
     * @param countryCodeSpecified
     * @param countryCodeIn
     * @param countryCodeNotIn
     * @param latitudeGreaterThan
     * @param latitudeLessThan
     * @param latitudeGreaterThanOrEqual
     * @param latitudeLessThanOrEqual
     * @param latitudeEquals
     * @param latitudeNotEquals
     * @param latitudeSpecified
     * @param latitudeIn
     * @param latitudeNotIn
     * @param longitudeGreaterThan
     * @param longitudeLessThan
     * @param longitudeGreaterThanOrEqual
     * @param longitudeLessThanOrEqual
     * @param longitudeEquals
     * @param longitudeNotEquals
     * @param longitudeSpecified
     * @param longitudeIn
     * @param longitudeNotIn
     * @param geomContains
     * @param geomDoesNotContain
     * @param geomEquals
     * @param geomNotEquals
     * @param geomSpecified
     * @param geomIn
     * @param geomNotIn
     * @param centroidContains
     * @param centroidDoesNotContain
     * @param centroidEquals
     * @param centroidNotEquals
     * @param centroidSpecified
     * @param centroidIn
     * @param centroidNotIn
     * @param areaSqmGreaterThan
     * @param areaSqmLessThan
     * @param areaSqmGreaterThanOrEqual
     * @param areaSqmLessThanOrEqual
     * @param areaSqmEquals
     * @param areaSqmNotEquals
     * @param areaSqmSpecified
     * @param areaSqmIn
     * @param areaSqmNotIn
     * @param openingWidthGreaterThan
     * @param openingWidthLessThan
     * @param openingWidthGreaterThanOrEqual
     * @param openingWidthLessThanOrEqual
     * @param openingWidthEquals
     * @param openingWidthNotEquals
     * @param openingWidthSpecified
     * @param openingWidthIn
     * @param openingWidthNotIn
     * @param depthGreaterThan
     * @param depthLessThan
     * @param depthGreaterThanOrEqual
     * @param depthLessThanOrEqual
     * @param depthEquals
     * @param depthNotEquals
     * @param depthSpecified
     * @param depthIn
     * @param depthNotIn
     * @param cutGreaterThan
     * @param cutLessThan
     * @param cutGreaterThanOrEqual
     * @param cutLessThanOrEqual
     * @param cutEquals
     * @param cutNotEquals
     * @param cutSpecified
     * @param cutIn
     * @param cutNotIn
     * @param potGreaterThan
     * @param potLessThan
     * @param potGreaterThanOrEqual
     * @param potLessThanOrEqual
     * @param potEquals
     * @param potNotEquals
     * @param potSpecified
     * @param potIn
     * @param potNotIn
     * @param landTypeEquals
     * @param landTypeNotEquals
     * @param landTypeSpecified
     * @param landTypeIn
     * @param landTypeNotIn
     * @param zoningEquals
     * @param zoningNotEquals
     * @param zoningSpecified
     * @param zoningIn
     * @param zoningNotIn
     * @param cadastralNumberContains
     * @param cadastralNumberDoesNotContain
     * @param cadastralNumberEquals
     * @param cadastralNumberNotEquals
     * @param cadastralNumberSpecified
     * @param cadastralNumberIn
     * @param cadastralNumberNotIn
     * @param landRegistryIdContains
     * @param landRegistryIdDoesNotContain
     * @param landRegistryIdEquals
     * @param landRegistryIdNotEquals
     * @param landRegistryIdSpecified
     * @param landRegistryIdIn
     * @param landRegistryIdNotIn
     * @param priceGreaterThan
     * @param priceLessThan
     * @param priceGreaterThanOrEqual
     * @param priceLessThanOrEqual
     * @param priceEquals
     * @param priceNotEquals
     * @param priceSpecified
     * @param priceIn
     * @param priceNotIn
     * @param currencyEquals
     * @param currencyNotEquals
     * @param currencySpecified
     * @param currencyIn
     * @param currencyNotIn
     * @param priceTypeEquals
     * @param priceTypeNotEquals
     * @param priceTypeSpecified
     * @param priceTypeIn
     * @param priceTypeNotIn
     * @param roadAccessEquals
     * @param roadAccessNotEquals
     * @param roadAccessSpecified
     * @param roadAccessIn
     * @param roadAccessNotIn
     * @param roadTypeEquals
     * @param roadTypeNotEquals
     * @param roadTypeSpecified
     * @param roadTypeIn
     * @param roadTypeNotIn
     * @param waterEquals
     * @param waterNotEquals
     * @param waterSpecified
     * @param waterIn
     * @param waterNotIn
     * @param electricityEquals
     * @param electricityNotEquals
     * @param electricitySpecified
     * @param electricityIn
     * @param electricityNotIn
     * @param gasEquals
     * @param gasNotEquals
     * @param gasSpecified
     * @param gasIn
     * @param gasNotIn
     * @param sewageEquals
     * @param sewageNotEquals
     * @param sewageSpecified
     * @param sewageIn
     * @param sewageNotIn
     * @param fencingEquals
     * @param fencingNotEquals
     * @param fencingSpecified
     * @param fencingIn
     * @param fencingNotIn
     * @param urbanismCertificateEquals
     * @param urbanismCertificateNotEquals
     * @param urbanismCertificateSpecified
     * @param urbanismCertificateIn
     * @param urbanismCertificateNotIn
     * @param constructionAllowedEquals
     * @param constructionAllowedNotEquals
     * @param constructionAllowedSpecified
     * @param constructionAllowedIn
     * @param constructionAllowedNotIn
     * @param statusEquals
     * @param statusNotEquals
     * @param statusSpecified
     * @param statusIn
     * @param statusNotIn
     * @param publishedAtGreaterThan
     * @param publishedAtLessThan
     * @param publishedAtGreaterThanOrEqual
     * @param publishedAtLessThanOrEqual
     * @param publishedAtEquals
     * @param publishedAtNotEquals
     * @param publishedAtSpecified
     * @param publishedAtIn
     * @param publishedAtNotIn
     * @param expiresAtGreaterThan
     * @param expiresAtLessThan
     * @param expiresAtGreaterThanOrEqual
     * @param expiresAtLessThanOrEqual
     * @param expiresAtEquals
     * @param expiresAtNotEquals
     * @param expiresAtSpecified
     * @param expiresAtIn
     * @param expiresAtNotIn
     * @param viewsCountGreaterThan
     * @param viewsCountLessThan
     * @param viewsCountGreaterThanOrEqual
     * @param viewsCountLessThanOrEqual
     * @param viewsCountEquals
     * @param viewsCountNotEquals
     * @param viewsCountSpecified
     * @param viewsCountIn
     * @param viewsCountNotIn
     * @param favoritesCountGreaterThan
     * @param favoritesCountLessThan
     * @param favoritesCountGreaterThanOrEqual
     * @param favoritesCountLessThanOrEqual
     * @param favoritesCountEquals
     * @param favoritesCountNotEquals
     * @param favoritesCountSpecified
     * @param favoritesCountIn
     * @param favoritesCountNotIn
     * @param externalIdContains
     * @param externalIdDoesNotContain
     * @param externalIdEquals
     * @param externalIdNotEquals
     * @param externalIdSpecified
     * @param externalIdIn
     * @param externalIdNotIn
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
     * @param sellerIdGreaterThan
     * @param sellerIdLessThan
     * @param sellerIdGreaterThanOrEqual
     * @param sellerIdLessThanOrEqual
     * @param sellerIdEquals
     * @param sellerIdNotEquals
     * @param sellerIdSpecified
     * @param sellerIdIn
     * @param sellerIdNotIn
     * @param distinct
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @returns LandPlotDTO OK
     * @throws ApiError
     */
    public static getAllLandPlots(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        titleContains?: string,
        titleDoesNotContain?: string,
        titleEquals?: string,
        titleNotEquals?: string,
        titleSpecified?: boolean,
        titleIn?: Array<string>,
        titleNotIn?: Array<string>,
        countyContains?: string,
        countyDoesNotContain?: string,
        countyEquals?: string,
        countyNotEquals?: string,
        countySpecified?: boolean,
        countyIn?: Array<string>,
        countyNotIn?: Array<string>,
        localityContains?: string,
        localityDoesNotContain?: string,
        localityEquals?: string,
        localityNotEquals?: string,
        localitySpecified?: boolean,
        localityIn?: Array<string>,
        localityNotIn?: Array<string>,
        addressContains?: string,
        addressDoesNotContain?: string,
        addressEquals?: string,
        addressNotEquals?: string,
        addressSpecified?: boolean,
        addressIn?: Array<string>,
        addressNotIn?: Array<string>,
        postalCodeContains?: string,
        postalCodeDoesNotContain?: string,
        postalCodeEquals?: string,
        postalCodeNotEquals?: string,
        postalCodeSpecified?: boolean,
        postalCodeIn?: Array<string>,
        postalCodeNotIn?: Array<string>,
        sirutaCodeGreaterThan?: number,
        sirutaCodeLessThan?: number,
        sirutaCodeGreaterThanOrEqual?: number,
        sirutaCodeLessThanOrEqual?: number,
        sirutaCodeEquals?: number,
        sirutaCodeNotEquals?: number,
        sirutaCodeSpecified?: boolean,
        sirutaCodeIn?: Array<number>,
        sirutaCodeNotIn?: Array<number>,
        countryCodeContains?: string,
        countryCodeDoesNotContain?: string,
        countryCodeEquals?: string,
        countryCodeNotEquals?: string,
        countryCodeSpecified?: boolean,
        countryCodeIn?: Array<string>,
        countryCodeNotIn?: Array<string>,
        latitudeGreaterThan?: number,
        latitudeLessThan?: number,
        latitudeGreaterThanOrEqual?: number,
        latitudeLessThanOrEqual?: number,
        latitudeEquals?: number,
        latitudeNotEquals?: number,
        latitudeSpecified?: boolean,
        latitudeIn?: Array<number>,
        latitudeNotIn?: Array<number>,
        longitudeGreaterThan?: number,
        longitudeLessThan?: number,
        longitudeGreaterThanOrEqual?: number,
        longitudeLessThanOrEqual?: number,
        longitudeEquals?: number,
        longitudeNotEquals?: number,
        longitudeSpecified?: boolean,
        longitudeIn?: Array<number>,
        longitudeNotIn?: Array<number>,
        geomContains?: string,
        geomDoesNotContain?: string,
        geomEquals?: string,
        geomNotEquals?: string,
        geomSpecified?: boolean,
        geomIn?: Array<string>,
        geomNotIn?: Array<string>,
        centroidContains?: string,
        centroidDoesNotContain?: string,
        centroidEquals?: string,
        centroidNotEquals?: string,
        centroidSpecified?: boolean,
        centroidIn?: Array<string>,
        centroidNotIn?: Array<string>,
        areaSqmGreaterThan?: number,
        areaSqmLessThan?: number,
        areaSqmGreaterThanOrEqual?: number,
        areaSqmLessThanOrEqual?: number,
        areaSqmEquals?: number,
        areaSqmNotEquals?: number,
        areaSqmSpecified?: boolean,
        areaSqmIn?: Array<number>,
        areaSqmNotIn?: Array<number>,
        openingWidthGreaterThan?: number,
        openingWidthLessThan?: number,
        openingWidthGreaterThanOrEqual?: number,
        openingWidthLessThanOrEqual?: number,
        openingWidthEquals?: number,
        openingWidthNotEquals?: number,
        openingWidthSpecified?: boolean,
        openingWidthIn?: Array<number>,
        openingWidthNotIn?: Array<number>,
        depthGreaterThan?: number,
        depthLessThan?: number,
        depthGreaterThanOrEqual?: number,
        depthLessThanOrEqual?: number,
        depthEquals?: number,
        depthNotEquals?: number,
        depthSpecified?: boolean,
        depthIn?: Array<number>,
        depthNotIn?: Array<number>,
        cutGreaterThan?: number,
        cutLessThan?: number,
        cutGreaterThanOrEqual?: number,
        cutLessThanOrEqual?: number,
        cutEquals?: number,
        cutNotEquals?: number,
        cutSpecified?: boolean,
        cutIn?: Array<number>,
        cutNotIn?: Array<number>,
        potGreaterThan?: number,
        potLessThan?: number,
        potGreaterThanOrEqual?: number,
        potLessThanOrEqual?: number,
        potEquals?: number,
        potNotEquals?: number,
        potSpecified?: boolean,
        potIn?: Array<number>,
        potNotIn?: Array<number>,
        landTypeEquals?: 'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER',
        landTypeNotEquals?: 'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER',
        landTypeSpecified?: boolean,
        landTypeIn?: Array<'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER'>,
        landTypeNotIn?: Array<'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER'>,
        zoningEquals?: 'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN',
        zoningNotEquals?: 'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN',
        zoningSpecified?: boolean,
        zoningIn?: Array<'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN'>,
        zoningNotIn?: Array<'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN'>,
        cadastralNumberContains?: string,
        cadastralNumberDoesNotContain?: string,
        cadastralNumberEquals?: string,
        cadastralNumberNotEquals?: string,
        cadastralNumberSpecified?: boolean,
        cadastralNumberIn?: Array<string>,
        cadastralNumberNotIn?: Array<string>,
        landRegistryIdContains?: string,
        landRegistryIdDoesNotContain?: string,
        landRegistryIdEquals?: string,
        landRegistryIdNotEquals?: string,
        landRegistryIdSpecified?: boolean,
        landRegistryIdIn?: Array<string>,
        landRegistryIdNotIn?: Array<string>,
        priceGreaterThan?: number,
        priceLessThan?: number,
        priceGreaterThanOrEqual?: number,
        priceLessThanOrEqual?: number,
        priceEquals?: number,
        priceNotEquals?: number,
        priceSpecified?: boolean,
        priceIn?: Array<number>,
        priceNotIn?: Array<number>,
        currencyEquals?: 'RON' | 'EUR',
        currencyNotEquals?: 'RON' | 'EUR',
        currencySpecified?: boolean,
        currencyIn?: Array<'RON' | 'EUR'>,
        currencyNotIn?: Array<'RON' | 'EUR'>,
        priceTypeEquals?: 'FIXED' | 'NEGOTIABLE' | 'AUCTION',
        priceTypeNotEquals?: 'FIXED' | 'NEGOTIABLE' | 'AUCTION',
        priceTypeSpecified?: boolean,
        priceTypeIn?: Array<'FIXED' | 'NEGOTIABLE' | 'AUCTION'>,
        priceTypeNotIn?: Array<'FIXED' | 'NEGOTIABLE' | 'AUCTION'>,
        roadAccessEquals?: boolean,
        roadAccessNotEquals?: boolean,
        roadAccessSpecified?: boolean,
        roadAccessIn?: Array<boolean>,
        roadAccessNotIn?: Array<boolean>,
        roadTypeEquals?: 'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED',
        roadTypeNotEquals?: 'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED',
        roadTypeSpecified?: boolean,
        roadTypeIn?: Array<'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED'>,
        roadTypeNotIn?: Array<'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED'>,
        waterEquals?: boolean,
        waterNotEquals?: boolean,
        waterSpecified?: boolean,
        waterIn?: Array<boolean>,
        waterNotIn?: Array<boolean>,
        electricityEquals?: boolean,
        electricityNotEquals?: boolean,
        electricitySpecified?: boolean,
        electricityIn?: Array<boolean>,
        electricityNotIn?: Array<boolean>,
        gasEquals?: boolean,
        gasNotEquals?: boolean,
        gasSpecified?: boolean,
        gasIn?: Array<boolean>,
        gasNotIn?: Array<boolean>,
        sewageEquals?: boolean,
        sewageNotEquals?: boolean,
        sewageSpecified?: boolean,
        sewageIn?: Array<boolean>,
        sewageNotIn?: Array<boolean>,
        fencingEquals?: boolean,
        fencingNotEquals?: boolean,
        fencingSpecified?: boolean,
        fencingIn?: Array<boolean>,
        fencingNotIn?: Array<boolean>,
        urbanismCertificateEquals?: boolean,
        urbanismCertificateNotEquals?: boolean,
        urbanismCertificateSpecified?: boolean,
        urbanismCertificateIn?: Array<boolean>,
        urbanismCertificateNotIn?: Array<boolean>,
        constructionAllowedEquals?: boolean,
        constructionAllowedNotEquals?: boolean,
        constructionAllowedSpecified?: boolean,
        constructionAllowedIn?: Array<boolean>,
        constructionAllowedNotIn?: Array<boolean>,
        statusEquals?: 'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED',
        statusNotEquals?: 'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED',
        statusSpecified?: boolean,
        statusIn?: Array<'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED'>,
        statusNotIn?: Array<'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED'>,
        publishedAtGreaterThan?: string,
        publishedAtLessThan?: string,
        publishedAtGreaterThanOrEqual?: string,
        publishedAtLessThanOrEqual?: string,
        publishedAtEquals?: string,
        publishedAtNotEquals?: string,
        publishedAtSpecified?: boolean,
        publishedAtIn?: Array<string>,
        publishedAtNotIn?: Array<string>,
        expiresAtGreaterThan?: string,
        expiresAtLessThan?: string,
        expiresAtGreaterThanOrEqual?: string,
        expiresAtLessThanOrEqual?: string,
        expiresAtEquals?: string,
        expiresAtNotEquals?: string,
        expiresAtSpecified?: boolean,
        expiresAtIn?: Array<string>,
        expiresAtNotIn?: Array<string>,
        viewsCountGreaterThan?: number,
        viewsCountLessThan?: number,
        viewsCountGreaterThanOrEqual?: number,
        viewsCountLessThanOrEqual?: number,
        viewsCountEquals?: number,
        viewsCountNotEquals?: number,
        viewsCountSpecified?: boolean,
        viewsCountIn?: Array<number>,
        viewsCountNotIn?: Array<number>,
        favoritesCountGreaterThan?: number,
        favoritesCountLessThan?: number,
        favoritesCountGreaterThanOrEqual?: number,
        favoritesCountLessThanOrEqual?: number,
        favoritesCountEquals?: number,
        favoritesCountNotEquals?: number,
        favoritesCountSpecified?: boolean,
        favoritesCountIn?: Array<number>,
        favoritesCountNotIn?: Array<number>,
        externalIdContains?: string,
        externalIdDoesNotContain?: string,
        externalIdEquals?: string,
        externalIdNotEquals?: string,
        externalIdSpecified?: boolean,
        externalIdIn?: Array<string>,
        externalIdNotIn?: Array<string>,
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
        sellerIdGreaterThan?: number,
        sellerIdLessThan?: number,
        sellerIdGreaterThanOrEqual?: number,
        sellerIdLessThanOrEqual?: number,
        sellerIdEquals?: number,
        sellerIdNotEquals?: number,
        sellerIdSpecified?: boolean,
        sellerIdIn?: Array<number>,
        sellerIdNotIn?: Array<number>,
        distinct?: boolean,
        page?: number,
        size: number = 20,
        sort?: Array<string>,
    ): CancelablePromise<Array<LandPlotDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/land-plots',
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
                'title.contains': titleContains,
                'title.doesNotContain': titleDoesNotContain,
                'title.equals': titleEquals,
                'title.notEquals': titleNotEquals,
                'title.specified': titleSpecified,
                'title.in': titleIn,
                'title.notIn': titleNotIn,
                'county.contains': countyContains,
                'county.doesNotContain': countyDoesNotContain,
                'county.equals': countyEquals,
                'county.notEquals': countyNotEquals,
                'county.specified': countySpecified,
                'county.in': countyIn,
                'county.notIn': countyNotIn,
                'locality.contains': localityContains,
                'locality.doesNotContain': localityDoesNotContain,
                'locality.equals': localityEquals,
                'locality.notEquals': localityNotEquals,
                'locality.specified': localitySpecified,
                'locality.in': localityIn,
                'locality.notIn': localityNotIn,
                'address.contains': addressContains,
                'address.doesNotContain': addressDoesNotContain,
                'address.equals': addressEquals,
                'address.notEquals': addressNotEquals,
                'address.specified': addressSpecified,
                'address.in': addressIn,
                'address.notIn': addressNotIn,
                'postalCode.contains': postalCodeContains,
                'postalCode.doesNotContain': postalCodeDoesNotContain,
                'postalCode.equals': postalCodeEquals,
                'postalCode.notEquals': postalCodeNotEquals,
                'postalCode.specified': postalCodeSpecified,
                'postalCode.in': postalCodeIn,
                'postalCode.notIn': postalCodeNotIn,
                'sirutaCode.greaterThan': sirutaCodeGreaterThan,
                'sirutaCode.lessThan': sirutaCodeLessThan,
                'sirutaCode.greaterThanOrEqual': sirutaCodeGreaterThanOrEqual,
                'sirutaCode.lessThanOrEqual': sirutaCodeLessThanOrEqual,
                'sirutaCode.equals': sirutaCodeEquals,
                'sirutaCode.notEquals': sirutaCodeNotEquals,
                'sirutaCode.specified': sirutaCodeSpecified,
                'sirutaCode.in': sirutaCodeIn,
                'sirutaCode.notIn': sirutaCodeNotIn,
                'countryCode.contains': countryCodeContains,
                'countryCode.doesNotContain': countryCodeDoesNotContain,
                'countryCode.equals': countryCodeEquals,
                'countryCode.notEquals': countryCodeNotEquals,
                'countryCode.specified': countryCodeSpecified,
                'countryCode.in': countryCodeIn,
                'countryCode.notIn': countryCodeNotIn,
                'latitude.greaterThan': latitudeGreaterThan,
                'latitude.lessThan': latitudeLessThan,
                'latitude.greaterThanOrEqual': latitudeGreaterThanOrEqual,
                'latitude.lessThanOrEqual': latitudeLessThanOrEqual,
                'latitude.equals': latitudeEquals,
                'latitude.notEquals': latitudeNotEquals,
                'latitude.specified': latitudeSpecified,
                'latitude.in': latitudeIn,
                'latitude.notIn': latitudeNotIn,
                'longitude.greaterThan': longitudeGreaterThan,
                'longitude.lessThan': longitudeLessThan,
                'longitude.greaterThanOrEqual': longitudeGreaterThanOrEqual,
                'longitude.lessThanOrEqual': longitudeLessThanOrEqual,
                'longitude.equals': longitudeEquals,
                'longitude.notEquals': longitudeNotEquals,
                'longitude.specified': longitudeSpecified,
                'longitude.in': longitudeIn,
                'longitude.notIn': longitudeNotIn,
                'geom.contains': geomContains,
                'geom.doesNotContain': geomDoesNotContain,
                'geom.equals': geomEquals,
                'geom.notEquals': geomNotEquals,
                'geom.specified': geomSpecified,
                'geom.in': geomIn,
                'geom.notIn': geomNotIn,
                'centroid.contains': centroidContains,
                'centroid.doesNotContain': centroidDoesNotContain,
                'centroid.equals': centroidEquals,
                'centroid.notEquals': centroidNotEquals,
                'centroid.specified': centroidSpecified,
                'centroid.in': centroidIn,
                'centroid.notIn': centroidNotIn,
                'areaSqm.greaterThan': areaSqmGreaterThan,
                'areaSqm.lessThan': areaSqmLessThan,
                'areaSqm.greaterThanOrEqual': areaSqmGreaterThanOrEqual,
                'areaSqm.lessThanOrEqual': areaSqmLessThanOrEqual,
                'areaSqm.equals': areaSqmEquals,
                'areaSqm.notEquals': areaSqmNotEquals,
                'areaSqm.specified': areaSqmSpecified,
                'areaSqm.in': areaSqmIn,
                'areaSqm.notIn': areaSqmNotIn,
                'openingWidth.greaterThan': openingWidthGreaterThan,
                'openingWidth.lessThan': openingWidthLessThan,
                'openingWidth.greaterThanOrEqual': openingWidthGreaterThanOrEqual,
                'openingWidth.lessThanOrEqual': openingWidthLessThanOrEqual,
                'openingWidth.equals': openingWidthEquals,
                'openingWidth.notEquals': openingWidthNotEquals,
                'openingWidth.specified': openingWidthSpecified,
                'openingWidth.in': openingWidthIn,
                'openingWidth.notIn': openingWidthNotIn,
                'depth.greaterThan': depthGreaterThan,
                'depth.lessThan': depthLessThan,
                'depth.greaterThanOrEqual': depthGreaterThanOrEqual,
                'depth.lessThanOrEqual': depthLessThanOrEqual,
                'depth.equals': depthEquals,
                'depth.notEquals': depthNotEquals,
                'depth.specified': depthSpecified,
                'depth.in': depthIn,
                'depth.notIn': depthNotIn,
                'cut.greaterThan': cutGreaterThan,
                'cut.lessThan': cutLessThan,
                'cut.greaterThanOrEqual': cutGreaterThanOrEqual,
                'cut.lessThanOrEqual': cutLessThanOrEqual,
                'cut.equals': cutEquals,
                'cut.notEquals': cutNotEquals,
                'cut.specified': cutSpecified,
                'cut.in': cutIn,
                'cut.notIn': cutNotIn,
                'pot.greaterThan': potGreaterThan,
                'pot.lessThan': potLessThan,
                'pot.greaterThanOrEqual': potGreaterThanOrEqual,
                'pot.lessThanOrEqual': potLessThanOrEqual,
                'pot.equals': potEquals,
                'pot.notEquals': potNotEquals,
                'pot.specified': potSpecified,
                'pot.in': potIn,
                'pot.notIn': potNotIn,
                'landType.equals': landTypeEquals,
                'landType.notEquals': landTypeNotEquals,
                'landType.specified': landTypeSpecified,
                'landType.in': landTypeIn,
                'landType.notIn': landTypeNotIn,
                'zoning.equals': zoningEquals,
                'zoning.notEquals': zoningNotEquals,
                'zoning.specified': zoningSpecified,
                'zoning.in': zoningIn,
                'zoning.notIn': zoningNotIn,
                'cadastralNumber.contains': cadastralNumberContains,
                'cadastralNumber.doesNotContain': cadastralNumberDoesNotContain,
                'cadastralNumber.equals': cadastralNumberEquals,
                'cadastralNumber.notEquals': cadastralNumberNotEquals,
                'cadastralNumber.specified': cadastralNumberSpecified,
                'cadastralNumber.in': cadastralNumberIn,
                'cadastralNumber.notIn': cadastralNumberNotIn,
                'landRegistryId.contains': landRegistryIdContains,
                'landRegistryId.doesNotContain': landRegistryIdDoesNotContain,
                'landRegistryId.equals': landRegistryIdEquals,
                'landRegistryId.notEquals': landRegistryIdNotEquals,
                'landRegistryId.specified': landRegistryIdSpecified,
                'landRegistryId.in': landRegistryIdIn,
                'landRegistryId.notIn': landRegistryIdNotIn,
                'price.greaterThan': priceGreaterThan,
                'price.lessThan': priceLessThan,
                'price.greaterThanOrEqual': priceGreaterThanOrEqual,
                'price.lessThanOrEqual': priceLessThanOrEqual,
                'price.equals': priceEquals,
                'price.notEquals': priceNotEquals,
                'price.specified': priceSpecified,
                'price.in': priceIn,
                'price.notIn': priceNotIn,
                'currency.equals': currencyEquals,
                'currency.notEquals': currencyNotEquals,
                'currency.specified': currencySpecified,
                'currency.in': currencyIn,
                'currency.notIn': currencyNotIn,
                'priceType.equals': priceTypeEquals,
                'priceType.notEquals': priceTypeNotEquals,
                'priceType.specified': priceTypeSpecified,
                'priceType.in': priceTypeIn,
                'priceType.notIn': priceTypeNotIn,
                'roadAccess.equals': roadAccessEquals,
                'roadAccess.notEquals': roadAccessNotEquals,
                'roadAccess.specified': roadAccessSpecified,
                'roadAccess.in': roadAccessIn,
                'roadAccess.notIn': roadAccessNotIn,
                'roadType.equals': roadTypeEquals,
                'roadType.notEquals': roadTypeNotEquals,
                'roadType.specified': roadTypeSpecified,
                'roadType.in': roadTypeIn,
                'roadType.notIn': roadTypeNotIn,
                'water.equals': waterEquals,
                'water.notEquals': waterNotEquals,
                'water.specified': waterSpecified,
                'water.in': waterIn,
                'water.notIn': waterNotIn,
                'electricity.equals': electricityEquals,
                'electricity.notEquals': electricityNotEquals,
                'electricity.specified': electricitySpecified,
                'electricity.in': electricityIn,
                'electricity.notIn': electricityNotIn,
                'gas.equals': gasEquals,
                'gas.notEquals': gasNotEquals,
                'gas.specified': gasSpecified,
                'gas.in': gasIn,
                'gas.notIn': gasNotIn,
                'sewage.equals': sewageEquals,
                'sewage.notEquals': sewageNotEquals,
                'sewage.specified': sewageSpecified,
                'sewage.in': sewageIn,
                'sewage.notIn': sewageNotIn,
                'fencing.equals': fencingEquals,
                'fencing.notEquals': fencingNotEquals,
                'fencing.specified': fencingSpecified,
                'fencing.in': fencingIn,
                'fencing.notIn': fencingNotIn,
                'urbanismCertificate.equals': urbanismCertificateEquals,
                'urbanismCertificate.notEquals': urbanismCertificateNotEquals,
                'urbanismCertificate.specified': urbanismCertificateSpecified,
                'urbanismCertificate.in': urbanismCertificateIn,
                'urbanismCertificate.notIn': urbanismCertificateNotIn,
                'constructionAllowed.equals': constructionAllowedEquals,
                'constructionAllowed.notEquals': constructionAllowedNotEquals,
                'constructionAllowed.specified': constructionAllowedSpecified,
                'constructionAllowed.in': constructionAllowedIn,
                'constructionAllowed.notIn': constructionAllowedNotIn,
                'status.equals': statusEquals,
                'status.notEquals': statusNotEquals,
                'status.specified': statusSpecified,
                'status.in': statusIn,
                'status.notIn': statusNotIn,
                'publishedAt.greaterThan': publishedAtGreaterThan,
                'publishedAt.lessThan': publishedAtLessThan,
                'publishedAt.greaterThanOrEqual': publishedAtGreaterThanOrEqual,
                'publishedAt.lessThanOrEqual': publishedAtLessThanOrEqual,
                'publishedAt.equals': publishedAtEquals,
                'publishedAt.notEquals': publishedAtNotEquals,
                'publishedAt.specified': publishedAtSpecified,
                'publishedAt.in': publishedAtIn,
                'publishedAt.notIn': publishedAtNotIn,
                'expiresAt.greaterThan': expiresAtGreaterThan,
                'expiresAt.lessThan': expiresAtLessThan,
                'expiresAt.greaterThanOrEqual': expiresAtGreaterThanOrEqual,
                'expiresAt.lessThanOrEqual': expiresAtLessThanOrEqual,
                'expiresAt.equals': expiresAtEquals,
                'expiresAt.notEquals': expiresAtNotEquals,
                'expiresAt.specified': expiresAtSpecified,
                'expiresAt.in': expiresAtIn,
                'expiresAt.notIn': expiresAtNotIn,
                'viewsCount.greaterThan': viewsCountGreaterThan,
                'viewsCount.lessThan': viewsCountLessThan,
                'viewsCount.greaterThanOrEqual': viewsCountGreaterThanOrEqual,
                'viewsCount.lessThanOrEqual': viewsCountLessThanOrEqual,
                'viewsCount.equals': viewsCountEquals,
                'viewsCount.notEquals': viewsCountNotEquals,
                'viewsCount.specified': viewsCountSpecified,
                'viewsCount.in': viewsCountIn,
                'viewsCount.notIn': viewsCountNotIn,
                'favoritesCount.greaterThan': favoritesCountGreaterThan,
                'favoritesCount.lessThan': favoritesCountLessThan,
                'favoritesCount.greaterThanOrEqual': favoritesCountGreaterThanOrEqual,
                'favoritesCount.lessThanOrEqual': favoritesCountLessThanOrEqual,
                'favoritesCount.equals': favoritesCountEquals,
                'favoritesCount.notEquals': favoritesCountNotEquals,
                'favoritesCount.specified': favoritesCountSpecified,
                'favoritesCount.in': favoritesCountIn,
                'favoritesCount.notIn': favoritesCountNotIn,
                'externalId.contains': externalIdContains,
                'externalId.doesNotContain': externalIdDoesNotContain,
                'externalId.equals': externalIdEquals,
                'externalId.notEquals': externalIdNotEquals,
                'externalId.specified': externalIdSpecified,
                'externalId.in': externalIdIn,
                'externalId.notIn': externalIdNotIn,
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
                'sellerId.greaterThan': sellerIdGreaterThan,
                'sellerId.lessThan': sellerIdLessThan,
                'sellerId.greaterThanOrEqual': sellerIdGreaterThanOrEqual,
                'sellerId.lessThanOrEqual': sellerIdLessThanOrEqual,
                'sellerId.equals': sellerIdEquals,
                'sellerId.notEquals': sellerIdNotEquals,
                'sellerId.specified': sellerIdSpecified,
                'sellerId.in': sellerIdIn,
                'sellerId.notIn': sellerIdNotIn,
                'distinct': distinct,
                'page': page,
                'size': size,
                'sort': sort,
            },
        });
    }
    /**
     * @param requestBody
     * @returns LandPlotDTO OK
     * @throws ApiError
     */
    public static createLandPlot(
        requestBody: LandPlotDTO,
    ): CancelablePromise<LandPlotDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/land-plots',
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
     * @param titleContains
     * @param titleDoesNotContain
     * @param titleEquals
     * @param titleNotEquals
     * @param titleSpecified
     * @param titleIn
     * @param titleNotIn
     * @param countyContains
     * @param countyDoesNotContain
     * @param countyEquals
     * @param countyNotEquals
     * @param countySpecified
     * @param countyIn
     * @param countyNotIn
     * @param localityContains
     * @param localityDoesNotContain
     * @param localityEquals
     * @param localityNotEquals
     * @param localitySpecified
     * @param localityIn
     * @param localityNotIn
     * @param addressContains
     * @param addressDoesNotContain
     * @param addressEquals
     * @param addressNotEquals
     * @param addressSpecified
     * @param addressIn
     * @param addressNotIn
     * @param postalCodeContains
     * @param postalCodeDoesNotContain
     * @param postalCodeEquals
     * @param postalCodeNotEquals
     * @param postalCodeSpecified
     * @param postalCodeIn
     * @param postalCodeNotIn
     * @param sirutaCodeGreaterThan
     * @param sirutaCodeLessThan
     * @param sirutaCodeGreaterThanOrEqual
     * @param sirutaCodeLessThanOrEqual
     * @param sirutaCodeEquals
     * @param sirutaCodeNotEquals
     * @param sirutaCodeSpecified
     * @param sirutaCodeIn
     * @param sirutaCodeNotIn
     * @param countryCodeContains
     * @param countryCodeDoesNotContain
     * @param countryCodeEquals
     * @param countryCodeNotEquals
     * @param countryCodeSpecified
     * @param countryCodeIn
     * @param countryCodeNotIn
     * @param latitudeGreaterThan
     * @param latitudeLessThan
     * @param latitudeGreaterThanOrEqual
     * @param latitudeLessThanOrEqual
     * @param latitudeEquals
     * @param latitudeNotEquals
     * @param latitudeSpecified
     * @param latitudeIn
     * @param latitudeNotIn
     * @param longitudeGreaterThan
     * @param longitudeLessThan
     * @param longitudeGreaterThanOrEqual
     * @param longitudeLessThanOrEqual
     * @param longitudeEquals
     * @param longitudeNotEquals
     * @param longitudeSpecified
     * @param longitudeIn
     * @param longitudeNotIn
     * @param geomContains
     * @param geomDoesNotContain
     * @param geomEquals
     * @param geomNotEquals
     * @param geomSpecified
     * @param geomIn
     * @param geomNotIn
     * @param centroidContains
     * @param centroidDoesNotContain
     * @param centroidEquals
     * @param centroidNotEquals
     * @param centroidSpecified
     * @param centroidIn
     * @param centroidNotIn
     * @param areaSqmGreaterThan
     * @param areaSqmLessThan
     * @param areaSqmGreaterThanOrEqual
     * @param areaSqmLessThanOrEqual
     * @param areaSqmEquals
     * @param areaSqmNotEquals
     * @param areaSqmSpecified
     * @param areaSqmIn
     * @param areaSqmNotIn
     * @param openingWidthGreaterThan
     * @param openingWidthLessThan
     * @param openingWidthGreaterThanOrEqual
     * @param openingWidthLessThanOrEqual
     * @param openingWidthEquals
     * @param openingWidthNotEquals
     * @param openingWidthSpecified
     * @param openingWidthIn
     * @param openingWidthNotIn
     * @param depthGreaterThan
     * @param depthLessThan
     * @param depthGreaterThanOrEqual
     * @param depthLessThanOrEqual
     * @param depthEquals
     * @param depthNotEquals
     * @param depthSpecified
     * @param depthIn
     * @param depthNotIn
     * @param cutGreaterThan
     * @param cutLessThan
     * @param cutGreaterThanOrEqual
     * @param cutLessThanOrEqual
     * @param cutEquals
     * @param cutNotEquals
     * @param cutSpecified
     * @param cutIn
     * @param cutNotIn
     * @param potGreaterThan
     * @param potLessThan
     * @param potGreaterThanOrEqual
     * @param potLessThanOrEqual
     * @param potEquals
     * @param potNotEquals
     * @param potSpecified
     * @param potIn
     * @param potNotIn
     * @param landTypeEquals
     * @param landTypeNotEquals
     * @param landTypeSpecified
     * @param landTypeIn
     * @param landTypeNotIn
     * @param zoningEquals
     * @param zoningNotEquals
     * @param zoningSpecified
     * @param zoningIn
     * @param zoningNotIn
     * @param cadastralNumberContains
     * @param cadastralNumberDoesNotContain
     * @param cadastralNumberEquals
     * @param cadastralNumberNotEquals
     * @param cadastralNumberSpecified
     * @param cadastralNumberIn
     * @param cadastralNumberNotIn
     * @param landRegistryIdContains
     * @param landRegistryIdDoesNotContain
     * @param landRegistryIdEquals
     * @param landRegistryIdNotEquals
     * @param landRegistryIdSpecified
     * @param landRegistryIdIn
     * @param landRegistryIdNotIn
     * @param priceGreaterThan
     * @param priceLessThan
     * @param priceGreaterThanOrEqual
     * @param priceLessThanOrEqual
     * @param priceEquals
     * @param priceNotEquals
     * @param priceSpecified
     * @param priceIn
     * @param priceNotIn
     * @param currencyEquals
     * @param currencyNotEquals
     * @param currencySpecified
     * @param currencyIn
     * @param currencyNotIn
     * @param priceTypeEquals
     * @param priceTypeNotEquals
     * @param priceTypeSpecified
     * @param priceTypeIn
     * @param priceTypeNotIn
     * @param roadAccessEquals
     * @param roadAccessNotEquals
     * @param roadAccessSpecified
     * @param roadAccessIn
     * @param roadAccessNotIn
     * @param roadTypeEquals
     * @param roadTypeNotEquals
     * @param roadTypeSpecified
     * @param roadTypeIn
     * @param roadTypeNotIn
     * @param waterEquals
     * @param waterNotEquals
     * @param waterSpecified
     * @param waterIn
     * @param waterNotIn
     * @param electricityEquals
     * @param electricityNotEquals
     * @param electricitySpecified
     * @param electricityIn
     * @param electricityNotIn
     * @param gasEquals
     * @param gasNotEquals
     * @param gasSpecified
     * @param gasIn
     * @param gasNotIn
     * @param sewageEquals
     * @param sewageNotEquals
     * @param sewageSpecified
     * @param sewageIn
     * @param sewageNotIn
     * @param fencingEquals
     * @param fencingNotEquals
     * @param fencingSpecified
     * @param fencingIn
     * @param fencingNotIn
     * @param urbanismCertificateEquals
     * @param urbanismCertificateNotEquals
     * @param urbanismCertificateSpecified
     * @param urbanismCertificateIn
     * @param urbanismCertificateNotIn
     * @param constructionAllowedEquals
     * @param constructionAllowedNotEquals
     * @param constructionAllowedSpecified
     * @param constructionAllowedIn
     * @param constructionAllowedNotIn
     * @param statusEquals
     * @param statusNotEquals
     * @param statusSpecified
     * @param statusIn
     * @param statusNotIn
     * @param publishedAtGreaterThan
     * @param publishedAtLessThan
     * @param publishedAtGreaterThanOrEqual
     * @param publishedAtLessThanOrEqual
     * @param publishedAtEquals
     * @param publishedAtNotEquals
     * @param publishedAtSpecified
     * @param publishedAtIn
     * @param publishedAtNotIn
     * @param expiresAtGreaterThan
     * @param expiresAtLessThan
     * @param expiresAtGreaterThanOrEqual
     * @param expiresAtLessThanOrEqual
     * @param expiresAtEquals
     * @param expiresAtNotEquals
     * @param expiresAtSpecified
     * @param expiresAtIn
     * @param expiresAtNotIn
     * @param viewsCountGreaterThan
     * @param viewsCountLessThan
     * @param viewsCountGreaterThanOrEqual
     * @param viewsCountLessThanOrEqual
     * @param viewsCountEquals
     * @param viewsCountNotEquals
     * @param viewsCountSpecified
     * @param viewsCountIn
     * @param viewsCountNotIn
     * @param favoritesCountGreaterThan
     * @param favoritesCountLessThan
     * @param favoritesCountGreaterThanOrEqual
     * @param favoritesCountLessThanOrEqual
     * @param favoritesCountEquals
     * @param favoritesCountNotEquals
     * @param favoritesCountSpecified
     * @param favoritesCountIn
     * @param favoritesCountNotIn
     * @param externalIdContains
     * @param externalIdDoesNotContain
     * @param externalIdEquals
     * @param externalIdNotEquals
     * @param externalIdSpecified
     * @param externalIdIn
     * @param externalIdNotIn
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
     * @param sellerIdGreaterThan
     * @param sellerIdLessThan
     * @param sellerIdGreaterThanOrEqual
     * @param sellerIdLessThanOrEqual
     * @param sellerIdEquals
     * @param sellerIdNotEquals
     * @param sellerIdSpecified
     * @param sellerIdIn
     * @param sellerIdNotIn
     * @param distinct
     * @returns number OK
     * @throws ApiError
     */
    public static countLandPlots(
        idGreaterThan?: number,
        idLessThan?: number,
        idGreaterThanOrEqual?: number,
        idLessThanOrEqual?: number,
        idEquals?: number,
        idNotEquals?: number,
        idSpecified?: boolean,
        idIn?: Array<number>,
        idNotIn?: Array<number>,
        titleContains?: string,
        titleDoesNotContain?: string,
        titleEquals?: string,
        titleNotEquals?: string,
        titleSpecified?: boolean,
        titleIn?: Array<string>,
        titleNotIn?: Array<string>,
        countyContains?: string,
        countyDoesNotContain?: string,
        countyEquals?: string,
        countyNotEquals?: string,
        countySpecified?: boolean,
        countyIn?: Array<string>,
        countyNotIn?: Array<string>,
        localityContains?: string,
        localityDoesNotContain?: string,
        localityEquals?: string,
        localityNotEquals?: string,
        localitySpecified?: boolean,
        localityIn?: Array<string>,
        localityNotIn?: Array<string>,
        addressContains?: string,
        addressDoesNotContain?: string,
        addressEquals?: string,
        addressNotEquals?: string,
        addressSpecified?: boolean,
        addressIn?: Array<string>,
        addressNotIn?: Array<string>,
        postalCodeContains?: string,
        postalCodeDoesNotContain?: string,
        postalCodeEquals?: string,
        postalCodeNotEquals?: string,
        postalCodeSpecified?: boolean,
        postalCodeIn?: Array<string>,
        postalCodeNotIn?: Array<string>,
        sirutaCodeGreaterThan?: number,
        sirutaCodeLessThan?: number,
        sirutaCodeGreaterThanOrEqual?: number,
        sirutaCodeLessThanOrEqual?: number,
        sirutaCodeEquals?: number,
        sirutaCodeNotEquals?: number,
        sirutaCodeSpecified?: boolean,
        sirutaCodeIn?: Array<number>,
        sirutaCodeNotIn?: Array<number>,
        countryCodeContains?: string,
        countryCodeDoesNotContain?: string,
        countryCodeEquals?: string,
        countryCodeNotEquals?: string,
        countryCodeSpecified?: boolean,
        countryCodeIn?: Array<string>,
        countryCodeNotIn?: Array<string>,
        latitudeGreaterThan?: number,
        latitudeLessThan?: number,
        latitudeGreaterThanOrEqual?: number,
        latitudeLessThanOrEqual?: number,
        latitudeEquals?: number,
        latitudeNotEquals?: number,
        latitudeSpecified?: boolean,
        latitudeIn?: Array<number>,
        latitudeNotIn?: Array<number>,
        longitudeGreaterThan?: number,
        longitudeLessThan?: number,
        longitudeGreaterThanOrEqual?: number,
        longitudeLessThanOrEqual?: number,
        longitudeEquals?: number,
        longitudeNotEquals?: number,
        longitudeSpecified?: boolean,
        longitudeIn?: Array<number>,
        longitudeNotIn?: Array<number>,
        geomContains?: string,
        geomDoesNotContain?: string,
        geomEquals?: string,
        geomNotEquals?: string,
        geomSpecified?: boolean,
        geomIn?: Array<string>,
        geomNotIn?: Array<string>,
        centroidContains?: string,
        centroidDoesNotContain?: string,
        centroidEquals?: string,
        centroidNotEquals?: string,
        centroidSpecified?: boolean,
        centroidIn?: Array<string>,
        centroidNotIn?: Array<string>,
        areaSqmGreaterThan?: number,
        areaSqmLessThan?: number,
        areaSqmGreaterThanOrEqual?: number,
        areaSqmLessThanOrEqual?: number,
        areaSqmEquals?: number,
        areaSqmNotEquals?: number,
        areaSqmSpecified?: boolean,
        areaSqmIn?: Array<number>,
        areaSqmNotIn?: Array<number>,
        openingWidthGreaterThan?: number,
        openingWidthLessThan?: number,
        openingWidthGreaterThanOrEqual?: number,
        openingWidthLessThanOrEqual?: number,
        openingWidthEquals?: number,
        openingWidthNotEquals?: number,
        openingWidthSpecified?: boolean,
        openingWidthIn?: Array<number>,
        openingWidthNotIn?: Array<number>,
        depthGreaterThan?: number,
        depthLessThan?: number,
        depthGreaterThanOrEqual?: number,
        depthLessThanOrEqual?: number,
        depthEquals?: number,
        depthNotEquals?: number,
        depthSpecified?: boolean,
        depthIn?: Array<number>,
        depthNotIn?: Array<number>,
        cutGreaterThan?: number,
        cutLessThan?: number,
        cutGreaterThanOrEqual?: number,
        cutLessThanOrEqual?: number,
        cutEquals?: number,
        cutNotEquals?: number,
        cutSpecified?: boolean,
        cutIn?: Array<number>,
        cutNotIn?: Array<number>,
        potGreaterThan?: number,
        potLessThan?: number,
        potGreaterThanOrEqual?: number,
        potLessThanOrEqual?: number,
        potEquals?: number,
        potNotEquals?: number,
        potSpecified?: boolean,
        potIn?: Array<number>,
        potNotIn?: Array<number>,
        landTypeEquals?: 'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER',
        landTypeNotEquals?: 'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER',
        landTypeSpecified?: boolean,
        landTypeIn?: Array<'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER'>,
        landTypeNotIn?: Array<'INTRAVILAN' | 'EXTRAVILAN' | 'AGRICULTURAL' | 'FOREST' | 'INDUSTRIAL' | 'OTHER'>,
        zoningEquals?: 'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN',
        zoningNotEquals?: 'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN',
        zoningSpecified?: boolean,
        zoningIn?: Array<'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN'>,
        zoningNotIn?: Array<'RESIDENTIAL' | 'COMMERCIAL' | 'MIXED_USE' | 'INDUSTRIAL' | 'GREENFIELD' | 'UNKNOWN'>,
        cadastralNumberContains?: string,
        cadastralNumberDoesNotContain?: string,
        cadastralNumberEquals?: string,
        cadastralNumberNotEquals?: string,
        cadastralNumberSpecified?: boolean,
        cadastralNumberIn?: Array<string>,
        cadastralNumberNotIn?: Array<string>,
        landRegistryIdContains?: string,
        landRegistryIdDoesNotContain?: string,
        landRegistryIdEquals?: string,
        landRegistryIdNotEquals?: string,
        landRegistryIdSpecified?: boolean,
        landRegistryIdIn?: Array<string>,
        landRegistryIdNotIn?: Array<string>,
        priceGreaterThan?: number,
        priceLessThan?: number,
        priceGreaterThanOrEqual?: number,
        priceLessThanOrEqual?: number,
        priceEquals?: number,
        priceNotEquals?: number,
        priceSpecified?: boolean,
        priceIn?: Array<number>,
        priceNotIn?: Array<number>,
        currencyEquals?: 'RON' | 'EUR',
        currencyNotEquals?: 'RON' | 'EUR',
        currencySpecified?: boolean,
        currencyIn?: Array<'RON' | 'EUR'>,
        currencyNotIn?: Array<'RON' | 'EUR'>,
        priceTypeEquals?: 'FIXED' | 'NEGOTIABLE' | 'AUCTION',
        priceTypeNotEquals?: 'FIXED' | 'NEGOTIABLE' | 'AUCTION',
        priceTypeSpecified?: boolean,
        priceTypeIn?: Array<'FIXED' | 'NEGOTIABLE' | 'AUCTION'>,
        priceTypeNotIn?: Array<'FIXED' | 'NEGOTIABLE' | 'AUCTION'>,
        roadAccessEquals?: boolean,
        roadAccessNotEquals?: boolean,
        roadAccessSpecified?: boolean,
        roadAccessIn?: Array<boolean>,
        roadAccessNotIn?: Array<boolean>,
        roadTypeEquals?: 'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED',
        roadTypeNotEquals?: 'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED',
        roadTypeSpecified?: boolean,
        roadTypeIn?: Array<'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED'>,
        roadTypeNotIn?: Array<'NONE' | 'EASEMENT' | 'PRIVATE_ROAD' | 'DIRT_ROAD' | 'GRAVEL_ROAD' | 'PAVED_ROAD' | 'ASPHALT_ROAD' | 'CONCRETE_ROAD' | 'HIGHWAY' | 'UNDEFINED'>,
        waterEquals?: boolean,
        waterNotEquals?: boolean,
        waterSpecified?: boolean,
        waterIn?: Array<boolean>,
        waterNotIn?: Array<boolean>,
        electricityEquals?: boolean,
        electricityNotEquals?: boolean,
        electricitySpecified?: boolean,
        electricityIn?: Array<boolean>,
        electricityNotIn?: Array<boolean>,
        gasEquals?: boolean,
        gasNotEquals?: boolean,
        gasSpecified?: boolean,
        gasIn?: Array<boolean>,
        gasNotIn?: Array<boolean>,
        sewageEquals?: boolean,
        sewageNotEquals?: boolean,
        sewageSpecified?: boolean,
        sewageIn?: Array<boolean>,
        sewageNotIn?: Array<boolean>,
        fencingEquals?: boolean,
        fencingNotEquals?: boolean,
        fencingSpecified?: boolean,
        fencingIn?: Array<boolean>,
        fencingNotIn?: Array<boolean>,
        urbanismCertificateEquals?: boolean,
        urbanismCertificateNotEquals?: boolean,
        urbanismCertificateSpecified?: boolean,
        urbanismCertificateIn?: Array<boolean>,
        urbanismCertificateNotIn?: Array<boolean>,
        constructionAllowedEquals?: boolean,
        constructionAllowedNotEquals?: boolean,
        constructionAllowedSpecified?: boolean,
        constructionAllowedIn?: Array<boolean>,
        constructionAllowedNotIn?: Array<boolean>,
        statusEquals?: 'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED',
        statusNotEquals?: 'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED',
        statusSpecified?: boolean,
        statusIn?: Array<'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED'>,
        statusNotIn?: Array<'DRAFT' | 'PENDING_REVIEW' | 'PUBLISHED' | 'SUSPENDED' | 'SOLD' | 'ARCHIVED'>,
        publishedAtGreaterThan?: string,
        publishedAtLessThan?: string,
        publishedAtGreaterThanOrEqual?: string,
        publishedAtLessThanOrEqual?: string,
        publishedAtEquals?: string,
        publishedAtNotEquals?: string,
        publishedAtSpecified?: boolean,
        publishedAtIn?: Array<string>,
        publishedAtNotIn?: Array<string>,
        expiresAtGreaterThan?: string,
        expiresAtLessThan?: string,
        expiresAtGreaterThanOrEqual?: string,
        expiresAtLessThanOrEqual?: string,
        expiresAtEquals?: string,
        expiresAtNotEquals?: string,
        expiresAtSpecified?: boolean,
        expiresAtIn?: Array<string>,
        expiresAtNotIn?: Array<string>,
        viewsCountGreaterThan?: number,
        viewsCountLessThan?: number,
        viewsCountGreaterThanOrEqual?: number,
        viewsCountLessThanOrEqual?: number,
        viewsCountEquals?: number,
        viewsCountNotEquals?: number,
        viewsCountSpecified?: boolean,
        viewsCountIn?: Array<number>,
        viewsCountNotIn?: Array<number>,
        favoritesCountGreaterThan?: number,
        favoritesCountLessThan?: number,
        favoritesCountGreaterThanOrEqual?: number,
        favoritesCountLessThanOrEqual?: number,
        favoritesCountEquals?: number,
        favoritesCountNotEquals?: number,
        favoritesCountSpecified?: boolean,
        favoritesCountIn?: Array<number>,
        favoritesCountNotIn?: Array<number>,
        externalIdContains?: string,
        externalIdDoesNotContain?: string,
        externalIdEquals?: string,
        externalIdNotEquals?: string,
        externalIdSpecified?: boolean,
        externalIdIn?: Array<string>,
        externalIdNotIn?: Array<string>,
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
        sellerIdGreaterThan?: number,
        sellerIdLessThan?: number,
        sellerIdGreaterThanOrEqual?: number,
        sellerIdLessThanOrEqual?: number,
        sellerIdEquals?: number,
        sellerIdNotEquals?: number,
        sellerIdSpecified?: boolean,
        sellerIdIn?: Array<number>,
        sellerIdNotIn?: Array<number>,
        distinct?: boolean,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/land-plots/count',
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
                'title.contains': titleContains,
                'title.doesNotContain': titleDoesNotContain,
                'title.equals': titleEquals,
                'title.notEquals': titleNotEquals,
                'title.specified': titleSpecified,
                'title.in': titleIn,
                'title.notIn': titleNotIn,
                'county.contains': countyContains,
                'county.doesNotContain': countyDoesNotContain,
                'county.equals': countyEquals,
                'county.notEquals': countyNotEquals,
                'county.specified': countySpecified,
                'county.in': countyIn,
                'county.notIn': countyNotIn,
                'locality.contains': localityContains,
                'locality.doesNotContain': localityDoesNotContain,
                'locality.equals': localityEquals,
                'locality.notEquals': localityNotEquals,
                'locality.specified': localitySpecified,
                'locality.in': localityIn,
                'locality.notIn': localityNotIn,
                'address.contains': addressContains,
                'address.doesNotContain': addressDoesNotContain,
                'address.equals': addressEquals,
                'address.notEquals': addressNotEquals,
                'address.specified': addressSpecified,
                'address.in': addressIn,
                'address.notIn': addressNotIn,
                'postalCode.contains': postalCodeContains,
                'postalCode.doesNotContain': postalCodeDoesNotContain,
                'postalCode.equals': postalCodeEquals,
                'postalCode.notEquals': postalCodeNotEquals,
                'postalCode.specified': postalCodeSpecified,
                'postalCode.in': postalCodeIn,
                'postalCode.notIn': postalCodeNotIn,
                'sirutaCode.greaterThan': sirutaCodeGreaterThan,
                'sirutaCode.lessThan': sirutaCodeLessThan,
                'sirutaCode.greaterThanOrEqual': sirutaCodeGreaterThanOrEqual,
                'sirutaCode.lessThanOrEqual': sirutaCodeLessThanOrEqual,
                'sirutaCode.equals': sirutaCodeEquals,
                'sirutaCode.notEquals': sirutaCodeNotEquals,
                'sirutaCode.specified': sirutaCodeSpecified,
                'sirutaCode.in': sirutaCodeIn,
                'sirutaCode.notIn': sirutaCodeNotIn,
                'countryCode.contains': countryCodeContains,
                'countryCode.doesNotContain': countryCodeDoesNotContain,
                'countryCode.equals': countryCodeEquals,
                'countryCode.notEquals': countryCodeNotEquals,
                'countryCode.specified': countryCodeSpecified,
                'countryCode.in': countryCodeIn,
                'countryCode.notIn': countryCodeNotIn,
                'latitude.greaterThan': latitudeGreaterThan,
                'latitude.lessThan': latitudeLessThan,
                'latitude.greaterThanOrEqual': latitudeGreaterThanOrEqual,
                'latitude.lessThanOrEqual': latitudeLessThanOrEqual,
                'latitude.equals': latitudeEquals,
                'latitude.notEquals': latitudeNotEquals,
                'latitude.specified': latitudeSpecified,
                'latitude.in': latitudeIn,
                'latitude.notIn': latitudeNotIn,
                'longitude.greaterThan': longitudeGreaterThan,
                'longitude.lessThan': longitudeLessThan,
                'longitude.greaterThanOrEqual': longitudeGreaterThanOrEqual,
                'longitude.lessThanOrEqual': longitudeLessThanOrEqual,
                'longitude.equals': longitudeEquals,
                'longitude.notEquals': longitudeNotEquals,
                'longitude.specified': longitudeSpecified,
                'longitude.in': longitudeIn,
                'longitude.notIn': longitudeNotIn,
                'geom.contains': geomContains,
                'geom.doesNotContain': geomDoesNotContain,
                'geom.equals': geomEquals,
                'geom.notEquals': geomNotEquals,
                'geom.specified': geomSpecified,
                'geom.in': geomIn,
                'geom.notIn': geomNotIn,
                'centroid.contains': centroidContains,
                'centroid.doesNotContain': centroidDoesNotContain,
                'centroid.equals': centroidEquals,
                'centroid.notEquals': centroidNotEquals,
                'centroid.specified': centroidSpecified,
                'centroid.in': centroidIn,
                'centroid.notIn': centroidNotIn,
                'areaSqm.greaterThan': areaSqmGreaterThan,
                'areaSqm.lessThan': areaSqmLessThan,
                'areaSqm.greaterThanOrEqual': areaSqmGreaterThanOrEqual,
                'areaSqm.lessThanOrEqual': areaSqmLessThanOrEqual,
                'areaSqm.equals': areaSqmEquals,
                'areaSqm.notEquals': areaSqmNotEquals,
                'areaSqm.specified': areaSqmSpecified,
                'areaSqm.in': areaSqmIn,
                'areaSqm.notIn': areaSqmNotIn,
                'openingWidth.greaterThan': openingWidthGreaterThan,
                'openingWidth.lessThan': openingWidthLessThan,
                'openingWidth.greaterThanOrEqual': openingWidthGreaterThanOrEqual,
                'openingWidth.lessThanOrEqual': openingWidthLessThanOrEqual,
                'openingWidth.equals': openingWidthEquals,
                'openingWidth.notEquals': openingWidthNotEquals,
                'openingWidth.specified': openingWidthSpecified,
                'openingWidth.in': openingWidthIn,
                'openingWidth.notIn': openingWidthNotIn,
                'depth.greaterThan': depthGreaterThan,
                'depth.lessThan': depthLessThan,
                'depth.greaterThanOrEqual': depthGreaterThanOrEqual,
                'depth.lessThanOrEqual': depthLessThanOrEqual,
                'depth.equals': depthEquals,
                'depth.notEquals': depthNotEquals,
                'depth.specified': depthSpecified,
                'depth.in': depthIn,
                'depth.notIn': depthNotIn,
                'cut.greaterThan': cutGreaterThan,
                'cut.lessThan': cutLessThan,
                'cut.greaterThanOrEqual': cutGreaterThanOrEqual,
                'cut.lessThanOrEqual': cutLessThanOrEqual,
                'cut.equals': cutEquals,
                'cut.notEquals': cutNotEquals,
                'cut.specified': cutSpecified,
                'cut.in': cutIn,
                'cut.notIn': cutNotIn,
                'pot.greaterThan': potGreaterThan,
                'pot.lessThan': potLessThan,
                'pot.greaterThanOrEqual': potGreaterThanOrEqual,
                'pot.lessThanOrEqual': potLessThanOrEqual,
                'pot.equals': potEquals,
                'pot.notEquals': potNotEquals,
                'pot.specified': potSpecified,
                'pot.in': potIn,
                'pot.notIn': potNotIn,
                'landType.equals': landTypeEquals,
                'landType.notEquals': landTypeNotEquals,
                'landType.specified': landTypeSpecified,
                'landType.in': landTypeIn,
                'landType.notIn': landTypeNotIn,
                'zoning.equals': zoningEquals,
                'zoning.notEquals': zoningNotEquals,
                'zoning.specified': zoningSpecified,
                'zoning.in': zoningIn,
                'zoning.notIn': zoningNotIn,
                'cadastralNumber.contains': cadastralNumberContains,
                'cadastralNumber.doesNotContain': cadastralNumberDoesNotContain,
                'cadastralNumber.equals': cadastralNumberEquals,
                'cadastralNumber.notEquals': cadastralNumberNotEquals,
                'cadastralNumber.specified': cadastralNumberSpecified,
                'cadastralNumber.in': cadastralNumberIn,
                'cadastralNumber.notIn': cadastralNumberNotIn,
                'landRegistryId.contains': landRegistryIdContains,
                'landRegistryId.doesNotContain': landRegistryIdDoesNotContain,
                'landRegistryId.equals': landRegistryIdEquals,
                'landRegistryId.notEquals': landRegistryIdNotEquals,
                'landRegistryId.specified': landRegistryIdSpecified,
                'landRegistryId.in': landRegistryIdIn,
                'landRegistryId.notIn': landRegistryIdNotIn,
                'price.greaterThan': priceGreaterThan,
                'price.lessThan': priceLessThan,
                'price.greaterThanOrEqual': priceGreaterThanOrEqual,
                'price.lessThanOrEqual': priceLessThanOrEqual,
                'price.equals': priceEquals,
                'price.notEquals': priceNotEquals,
                'price.specified': priceSpecified,
                'price.in': priceIn,
                'price.notIn': priceNotIn,
                'currency.equals': currencyEquals,
                'currency.notEquals': currencyNotEquals,
                'currency.specified': currencySpecified,
                'currency.in': currencyIn,
                'currency.notIn': currencyNotIn,
                'priceType.equals': priceTypeEquals,
                'priceType.notEquals': priceTypeNotEquals,
                'priceType.specified': priceTypeSpecified,
                'priceType.in': priceTypeIn,
                'priceType.notIn': priceTypeNotIn,
                'roadAccess.equals': roadAccessEquals,
                'roadAccess.notEquals': roadAccessNotEquals,
                'roadAccess.specified': roadAccessSpecified,
                'roadAccess.in': roadAccessIn,
                'roadAccess.notIn': roadAccessNotIn,
                'roadType.equals': roadTypeEquals,
                'roadType.notEquals': roadTypeNotEquals,
                'roadType.specified': roadTypeSpecified,
                'roadType.in': roadTypeIn,
                'roadType.notIn': roadTypeNotIn,
                'water.equals': waterEquals,
                'water.notEquals': waterNotEquals,
                'water.specified': waterSpecified,
                'water.in': waterIn,
                'water.notIn': waterNotIn,
                'electricity.equals': electricityEquals,
                'electricity.notEquals': electricityNotEquals,
                'electricity.specified': electricitySpecified,
                'electricity.in': electricityIn,
                'electricity.notIn': electricityNotIn,
                'gas.equals': gasEquals,
                'gas.notEquals': gasNotEquals,
                'gas.specified': gasSpecified,
                'gas.in': gasIn,
                'gas.notIn': gasNotIn,
                'sewage.equals': sewageEquals,
                'sewage.notEquals': sewageNotEquals,
                'sewage.specified': sewageSpecified,
                'sewage.in': sewageIn,
                'sewage.notIn': sewageNotIn,
                'fencing.equals': fencingEquals,
                'fencing.notEquals': fencingNotEquals,
                'fencing.specified': fencingSpecified,
                'fencing.in': fencingIn,
                'fencing.notIn': fencingNotIn,
                'urbanismCertificate.equals': urbanismCertificateEquals,
                'urbanismCertificate.notEquals': urbanismCertificateNotEquals,
                'urbanismCertificate.specified': urbanismCertificateSpecified,
                'urbanismCertificate.in': urbanismCertificateIn,
                'urbanismCertificate.notIn': urbanismCertificateNotIn,
                'constructionAllowed.equals': constructionAllowedEquals,
                'constructionAllowed.notEquals': constructionAllowedNotEquals,
                'constructionAllowed.specified': constructionAllowedSpecified,
                'constructionAllowed.in': constructionAllowedIn,
                'constructionAllowed.notIn': constructionAllowedNotIn,
                'status.equals': statusEquals,
                'status.notEquals': statusNotEquals,
                'status.specified': statusSpecified,
                'status.in': statusIn,
                'status.notIn': statusNotIn,
                'publishedAt.greaterThan': publishedAtGreaterThan,
                'publishedAt.lessThan': publishedAtLessThan,
                'publishedAt.greaterThanOrEqual': publishedAtGreaterThanOrEqual,
                'publishedAt.lessThanOrEqual': publishedAtLessThanOrEqual,
                'publishedAt.equals': publishedAtEquals,
                'publishedAt.notEquals': publishedAtNotEquals,
                'publishedAt.specified': publishedAtSpecified,
                'publishedAt.in': publishedAtIn,
                'publishedAt.notIn': publishedAtNotIn,
                'expiresAt.greaterThan': expiresAtGreaterThan,
                'expiresAt.lessThan': expiresAtLessThan,
                'expiresAt.greaterThanOrEqual': expiresAtGreaterThanOrEqual,
                'expiresAt.lessThanOrEqual': expiresAtLessThanOrEqual,
                'expiresAt.equals': expiresAtEquals,
                'expiresAt.notEquals': expiresAtNotEquals,
                'expiresAt.specified': expiresAtSpecified,
                'expiresAt.in': expiresAtIn,
                'expiresAt.notIn': expiresAtNotIn,
                'viewsCount.greaterThan': viewsCountGreaterThan,
                'viewsCount.lessThan': viewsCountLessThan,
                'viewsCount.greaterThanOrEqual': viewsCountGreaterThanOrEqual,
                'viewsCount.lessThanOrEqual': viewsCountLessThanOrEqual,
                'viewsCount.equals': viewsCountEquals,
                'viewsCount.notEquals': viewsCountNotEquals,
                'viewsCount.specified': viewsCountSpecified,
                'viewsCount.in': viewsCountIn,
                'viewsCount.notIn': viewsCountNotIn,
                'favoritesCount.greaterThan': favoritesCountGreaterThan,
                'favoritesCount.lessThan': favoritesCountLessThan,
                'favoritesCount.greaterThanOrEqual': favoritesCountGreaterThanOrEqual,
                'favoritesCount.lessThanOrEqual': favoritesCountLessThanOrEqual,
                'favoritesCount.equals': favoritesCountEquals,
                'favoritesCount.notEquals': favoritesCountNotEquals,
                'favoritesCount.specified': favoritesCountSpecified,
                'favoritesCount.in': favoritesCountIn,
                'favoritesCount.notIn': favoritesCountNotIn,
                'externalId.contains': externalIdContains,
                'externalId.doesNotContain': externalIdDoesNotContain,
                'externalId.equals': externalIdEquals,
                'externalId.notEquals': externalIdNotEquals,
                'externalId.specified': externalIdSpecified,
                'externalId.in': externalIdIn,
                'externalId.notIn': externalIdNotIn,
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
                'sellerId.greaterThan': sellerIdGreaterThan,
                'sellerId.lessThan': sellerIdLessThan,
                'sellerId.greaterThanOrEqual': sellerIdGreaterThanOrEqual,
                'sellerId.lessThanOrEqual': sellerIdLessThanOrEqual,
                'sellerId.equals': sellerIdEquals,
                'sellerId.notEquals': sellerIdNotEquals,
                'sellerId.specified': sellerIdSpecified,
                'sellerId.in': sellerIdIn,
                'sellerId.notIn': sellerIdNotIn,
                'distinct': distinct,
            },
        });
    }
}
