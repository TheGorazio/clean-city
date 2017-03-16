/// <reference types="react" />
import * as React from 'react';
import '../styles/main.sass';
import { Urn } from '../types/Urn';
export interface MainState {
    map: HTMLElement;
    urns: Array<Urn>;
    selectedUrnId: number;
    selectedUrn: Urn;
    pushpin: Microsoft.Maps.Pushpin;
}
export interface MainProps {
    urns: Array<Object>;
}
export declare class Main extends React.Component<MainProps, MainState> {
    constructor();
    componentWillMount(): void;
    createRedArrow(heading: number): string;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Main;
