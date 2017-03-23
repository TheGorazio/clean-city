/// <reference types="react" />
import * as React from 'react';
import { Urn } from '../types/Urn';
export interface MapProps {
    urns: Array<Urn>;
    selectUrn: Function;
}
export interface MapState {
}
export default class MapComponent extends React.Component<MapProps, MapState> {
    render(): JSX.Element;
    componentDidMount(): void;
    markerClick(markerId: number): void;
}
