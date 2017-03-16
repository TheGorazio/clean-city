/// <reference types="react" />
import * as React from 'react';
export interface HeaderState {
    notifications: Array<string>;
}
export default class Header extends React.Component<void, HeaderState> {
    constructor();
    render(): JSX.Element;
}
