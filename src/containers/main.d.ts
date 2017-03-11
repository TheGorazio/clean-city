/// <reference types="react" />
import * as React from 'react';
import '../styles/main.sass';
export interface MainState {
    map: HTMLElement;
    urns: Array<Microsoft.Maps.Location>;
    selectedUrnId: number;
}
export declare class Main extends React.Component<void, MainState> {
    constructor();
    componentWillMount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Main;
