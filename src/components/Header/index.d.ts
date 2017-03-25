/// <reference types="react" />
import * as React from 'react';
import { User } from '../../types/User';
export interface HeaderProps {
    toggleMenu: Function;
    showUser: Function;
    user: User;
    haveMessages: boolean;
    showMessages: Function;
}
export interface HeaderState {
    notifications: Array<string>;
    redirect: boolean;
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor();
    render(): JSX.Element;
}
