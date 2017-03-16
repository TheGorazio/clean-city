export interface UrnPosition {
    latitude: number;
    longitude: number;
    address: string;
}
export interface Urn {
    fill: number;
    battery: number;
    position: UrnPosition;
}
