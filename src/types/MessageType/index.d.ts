import { Urn } from '../Urn';
export interface MessageContent {
    urn?: Urn;
    info?: string;
    from?: string;
    to?: string;
}
export interface MessageType {
    id: number;
    date: Date;
    type: string;
    content: MessageContent;
}
