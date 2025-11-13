/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotDTO } from './LandPlotDTO';
import type { UserProfileDTO } from './UserProfileDTO';
export type MessageThreadDTO = {
    id?: number;
    subject: string;
    createdAt: string;
    listing: LandPlotDTO;
    seller: UserProfileDTO;
    buyer: UserProfileDTO;
};

