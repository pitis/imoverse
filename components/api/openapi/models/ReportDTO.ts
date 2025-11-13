/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotDTO } from './LandPlotDTO';
import type { UserDTO } from './UserDTO';
import type { UserProfileDTO } from './UserProfileDTO';
export type ReportDTO = {
    id?: number;
    reason: string;
    details?: string;
    createdAt: string;
    status: ReportDTO.status;
    listing: LandPlotDTO;
    reporter: UserProfileDTO;
    moderator?: UserDTO;
};
export namespace ReportDTO {
    export enum status {
        OPEN = 'OPEN',
        UNDER_REVIEW = 'UNDER_REVIEW',
        RESOLVED = 'RESOLVED',
        REJECTED = 'REJECTED',
    }
}

