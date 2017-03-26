/// <reference types="react" />
import * as React from 'react';
import '../styles/main.sass';
import { Urn } from '../types/Urn';
import { User } from '../types/User';
import { MessageType } from '../types/MessageType';
export interface MainState {
    urns: Array<Urn>;
    selectedUrnId: number;
    selectedUrn?: Urn;
    menuShow: boolean;
    msgBoxShow: boolean;
    messages: Array<MessageType>;
    showUser: boolean;
    currentUser: User;
    redirect: boolean;
}
export interface MainProps {
    urns: Array<Urn>;
    user: User;
    pathToUrn?: number;
}
export declare class Main extends React.Component<MainProps, MainState> {
    constructor(props: any);
    componentWillReceiveProps(): void;
    toggleMenu(): void;
    selectUrn(urnId: any): void;
    showUser(): void;
    createPath(): void;
    componentWillMount(): void;
    logout(): void;
    showMessages(): void;
    render(): JSX.Element;
}
export default Main;
