/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from './UserDTO';
export type UserProfileDTO = {
    id?: number;
    userType: UserProfileDTO.userType;
    displayName: string;
    firstName: string;
    lastName: string;
    phone: string;
    companyName?: string;
    taxId?: string;
    kycStatus: UserProfileDTO.kycStatus;
    createdAt: string;
    updatedAt?: string;
    deleted: boolean;
    deletedAt?: string;
    user?: UserDTO;
};
export namespace UserProfileDTO {
    export enum userType {
        BUYER = 'BUYER',
        SELLER = 'SELLER',
        AGENCY = 'AGENCY',
        MODERATOR = 'MODERATOR',
        MANAGER = 'MANAGER',
        ADMIN = 'ADMIN',
    }
    export enum kycStatus {
        NONE = 'NONE',
        PENDING = 'PENDING',
        VERIFIED = 'VERIFIED',
        REJECTED = 'REJECTED',
    }
}

