/// <reference types="react" />
import * as React from 'react';
import { Urn } from '../types/Urn';
import { User } from '../types/User';
export interface AccountState {
    urns: Array<Urn>;
    redirect: boolean;
}
export interface AccountProps {
    user: User;
    selectUrn: Function;
}
export default class Account extends React.Component<AccountProps, AccountState> {
    constructor();
    sortThese(a: any, b: any): 1 | -1;
    selectUrn(id: any): void;
    render(): JSX.Element;
}
