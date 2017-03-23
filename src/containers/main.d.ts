/// <reference types="react" />
import * as React from 'react';
import '../styles/main.sass';
import { Urn } from '../types/Urn';
export interface MainState {
    urns: Array<Urn>;
    selectedUrnId: number;
    selectedUrn: Urn;
    menuShow: boolean;
    msgBoxShow: boolean;
    showUser: boolean;
}
export interface MainProps {
    urns: Array<Object>;
}
export declare class Main extends React.Component<MainProps, MainState> {
    constructor();
    toggleMenu(): void;
    selectUrn(urnId: any): void;
    showUser(): void;
    render(): JSX.Element;
}
export default Main;
