/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LandPlotDTO } from './LandPlotDTO';
import type { UserDTO } from './UserDTO';
export type ModerationActionDTO = {
    id?: number;
    action: ModerationActionDTO.action;
    reason?: string;
    actedAt: string;
    listing: LandPlotDTO;
    moderator?: UserDTO;
};
export namespace ModerationActionDTO {
    export enum action {
        SUBMIT_FOR_REVIEW = 'SUBMIT_FOR_REVIEW',
        APPROVE = 'APPROVE',
        REJECT = 'REJECT',
        SUSPEND = 'SUSPEND',
        RESTORE = 'RESTORE',
        MARK_SOLD = 'MARK_SOLD',
        ARCHIVE = 'ARCHIVE',
    }
}

