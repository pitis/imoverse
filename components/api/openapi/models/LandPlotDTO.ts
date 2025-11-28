/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotLocationDTO } from './LandPlotLocationDTO';
import type { UserDTO } from './UserDTO';
export type LandPlotDTO = {
    id?: number;
    title: string;
    description?: string;
    price: number;
    currency: LandPlotDTO.currency;
    priceType: LandPlotDTO.priceType;
    status: LandPlotDTO.status;
    publishedAt?: string;
    expiresAt?: string;
    viewsCount: number;
    favoritesCount: number;
    createdAt: string;
    updatedAt?: string;
    deleted: boolean;
    deletedAt?: string;
    seller: UserDTO;
    location: LandPlotLocationDTO;
    areaSqm: number;
    openingWidth?: number;
    depth?: number;
    cut?: number;
    pot?: number;
    landType: LandPlotDTO.landType;
    zoning?: LandPlotDTO.zoning;
    cadastralNumber?: string;
    landRegistryId?: string;
    roadAccess?: boolean;
    roadType?: LandPlotDTO.roadType;
    water?: boolean;
    electricity?: boolean;
    gas?: boolean;
    sewage?: boolean;
    fencing?: boolean;
    urbanismCertificate?: boolean;
    constructionAllowed?: boolean;
    externalId?: string;
    inspireId: string;
};
export namespace LandPlotDTO {
    export enum currency {
        RON = 'RON',
        EUR = 'EUR',
    }
    export enum priceType {
        FIXED = 'FIXED',
        NEGOTIABLE = 'NEGOTIABLE',
        AUCTION = 'AUCTION',
    }
    export enum status {
        DRAFT = 'DRAFT',
        PENDING_REVIEW = 'PENDING_REVIEW',
        PUBLISHED = 'PUBLISHED',
        SUSPENDED = 'SUSPENDED',
        SOLD = 'SOLD',
        ARCHIVED = 'ARCHIVED',
    }
    export enum landType {
        INTRAVILAN = 'INTRAVILAN',
        EXTRAVILAN = 'EXTRAVILAN',
        AGRICULTURAL = 'AGRICULTURAL',
        FOREST = 'FOREST',
        INDUSTRIAL = 'INDUSTRIAL',
        OTHER = 'OTHER',
    }
    export enum zoning {
        RESIDENTIAL = 'RESIDENTIAL',
        COMMERCIAL = 'COMMERCIAL',
        MIXED_USE = 'MIXED_USE',
        INDUSTRIAL = 'INDUSTRIAL',
        GREENFIELD = 'GREENFIELD',
        UNKNOWN = 'UNKNOWN',
    }
    export enum roadType {
        NONE = 'NONE',
        EASEMENT = 'EASEMENT',
        PRIVATE_ROAD = 'PRIVATE_ROAD',
        DIRT_ROAD = 'DIRT_ROAD',
        GRAVEL_ROAD = 'GRAVEL_ROAD',
        PAVED_ROAD = 'PAVED_ROAD',
        ASPHALT_ROAD = 'ASPHALT_ROAD',
        CONCRETE_ROAD = 'CONCRETE_ROAD',
        HIGHWAY = 'HIGHWAY',
        UNDEFINED = 'UNDEFINED',
    }
}

