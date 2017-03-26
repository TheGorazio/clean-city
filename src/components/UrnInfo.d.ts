/// <reference types="react" />
import * as React from 'react';
import { Urn } from '../types/Urn';
export interface UrnInfoState {
    extended: boolean;
}
export interface UrnInfoProps {
    urn?: Urn;
}
export default class UrnInfo extends React.Component<UrnInfoProps, UrnInfoState> {
    state: {
        extended: boolean;
    };
    render(): JSX.Element;
    extend(): void;
}
