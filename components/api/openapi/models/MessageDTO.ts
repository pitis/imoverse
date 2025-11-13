/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageThreadDTO } from './MessageThreadDTO';
export type MessageDTO = {
    id?: number;
    body?: string;
    sentAt: string;
    senderType: MessageDTO.senderType;
    thread: MessageThreadDTO;
};
export namespace MessageDTO {
    export enum senderType {
        BUYER = 'BUYER',
        SELLER = 'SELLER',
    }
}

