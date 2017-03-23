/// <reference types="react" />
import * as React from 'react';
export interface HeaderProps {
    toggleMenu: Function;
    showUser: Function;
}
export interface HeaderState {
    notifications: Array<string>;
    redirect: boolean;
}
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor();
    render(): JSX.Element;
    logout(): void;
}
