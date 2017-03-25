/// <reference types="react" />
import * as React from 'react';
export interface AuthProps {
    authUser: Function;
}
export interface AuthState {
    login: string | null;
    password: string | null;
    submitDisabled: boolean;
    redirect: boolean;
    error: boolean;
    loading: boolean;
}
export default class AuthComponent extends React.Component<AuthProps, AuthState> {
    constructor();
    render(): JSX.Element;
    valueChange(e: any): void;
    submitForm(e: any): void;
}
