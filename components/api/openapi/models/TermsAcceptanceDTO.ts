/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from './UserDTO';
export type TermsAcceptanceDTO = {
    id?: number;
    termsVersion: string;
    termsAccepted: boolean;
    gdprConsentAt: string;
    user?: UserDTO;
};

