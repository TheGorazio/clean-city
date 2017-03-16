/// <reference types="react" />
import * as React from 'react';
import { Urn } from '../types/Urn';
export interface UrnInfoState {
    address: string;
    fill: number;
    battery: number;
}
export interface UrnInfoProps {
    urn: Urn;
}
export default class UrnInfo extends React.Component<UrnInfoProps, UrnInfoState> {
    render(): JSX.Element;
    checkState(val: any): string;
}
