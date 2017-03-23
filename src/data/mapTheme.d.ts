declare const theme: ({
    featureType: string;
    elementType: string;
    stylers: ({
        saturation: number;
    } | {
        lightness: number;
    })[];
} | {
    featureType: string;
    elementType: string;
    stylers: ({
        visibility: string;
    } | {
        lightness: string;
    } | {
        gamma: string;
    } | {
        saturation: string;
    } | {
        weight: string;
    })[];
} | {
    featureType: string;
    elementType: string;
    stylers: ({
        color: string;
    } | {
        visibility: string;
    })[];
})[];
export default theme;
