/// <reference types="react" />
import * as React from 'react';
export interface MessageType {
    id: number;
    date: Date;
    type: string;
}
export interface MessageBoxProps {
    show: boolean;
}
export interface MessageBoxState {
    messages: Array<MessageType>;
}
export default class MessageBox extends React.Component<MessageBoxProps, MessageBoxState> {
    state: {
        messages: {
            id: number;
            date: Date;
            type: string;
        }[];
    };
    render(): JSX.Element;
}
