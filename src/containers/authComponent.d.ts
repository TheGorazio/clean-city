/// <reference types="react" />
import * as React from 'react';
export interface AuthProps {
}
export interface AuthState {
    type: string;
}
export default class AuthComponent extends React.Component<AuthProps, AuthState> {
    constructor();
    render(): JSX.Element;
    passwordInput(): JSX.Element;
}
