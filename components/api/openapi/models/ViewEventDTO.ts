/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotDTO } from './LandPlotDTO';
import type { UserProfileDTO } from './UserProfileDTO';
export type ViewEventDTO = {
    id?: number;
    viewedAt: string;
    ipAddress?: string;
    userAgent?: string;
    listing: LandPlotDTO;
    viewer?: UserProfileDTO;
};

