export interface UrnPosition {
    latitude: number;
    longitude: number;
}
export interface HistoryItem {
    fill: number;
    battery: number;
    date: Date;
}
export interface Urn {
    id: string;
    fill: number;
    battery: number;
    position: UrnPosition;
    history: Array<HistoryItem>;
    priority: number;
}
