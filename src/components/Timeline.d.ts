/// <reference types="react" />
import * as React from 'react';
export interface TimeLineProps {
}
export interface TimeLineState {
    curDate: string;
    curTime: number;
}
export default class TimeLine extends React.Component<TimeLineProps, TimeLineState> {
    constructor();
    handleDateChange(event: any): void;
    handleTimeChange(event: any): void;
    getCurDate(): string;
    getCurTime(): number;
    render(): JSX.Element;
}
