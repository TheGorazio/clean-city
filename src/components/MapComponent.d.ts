/// <reference types="googlemaps" />
/// <reference types="react" />
import * as React from 'react';
import { Urn } from '../types/Urn';
export interface MapDirection {
    from: google.maps.LatLng;
    to: google.maps.LatLng;
}
export interface MapProps {
    urns: Array<Urn>;
    selectUrn: Function;
    createPath: Function;
    pathToUrn?: number;
}
export interface MapState {
    map: google.maps.Map | null;
    direction: MapDirection | null;
}
export default class MapComponent extends React.Component<MapProps, MapState> {
    constructor();
    render(): JSX.Element;
    componentDidMount(): void;
    createPath(to: google.maps.LatLng): void;
    markerClick(markerId: number): void;
}
