export interface UrnPosition {
    latitude: number;
    longitude: number;
    address: string;
}
export interface Urn {
    id: number;
    fill: number;
    battery: number;
    position: UrnPosition;
    priority: number;
}
