/// <reference types="react" />
import * as React from 'react';
import { User } from '../types/User';
export interface AccountState {
    urns: any;
    user: User;
    redirect: boolean;
}
export interface AccountProps {
    user: User;
    selectUrn: Function;
}
export default class Account extends React.Component<AccountProps, AccountState> {
    constructor(props: any);
    selectUrn(id: any): void;
    render(): JSX.Element;
}
