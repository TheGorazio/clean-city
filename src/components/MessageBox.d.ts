/// <reference types="react" />
import * as React from 'react';
import { MessageType } from '../types/MessageType';
export interface MessageBoxProps {
    show: boolean;
    messages: Array<MessageType>;
}
export interface MessageBoxState {
    messages: Array<MessageType>;
}
export default class MessageBox extends React.Component<MessageBoxProps, MessageBoxState> {
    state: {
        messages: MessageType[];
    };
    render(): JSX.Element;
}
