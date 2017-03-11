/// <reference types="react" />
import * as React from 'react';
export interface TimeLineProps {
}
export interface TimeLineState {
    date: string;
    time: string;
    timePadding: number;
}
export default class TimeLine extends React.Component<TimeLineProps, TimeLineState> {
    constructor();
    pickerChange(e: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
