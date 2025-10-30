export type styleType = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
}

export type stepType = {
    step: number;
    title: string;
    description: string;
}

export type equipmentType = {
    name: string;
    price: number;
    image: string;
    imageAlt: string;
    measureUnit?: string;
}

export type projectType = {
    name: string;
    newBuild: boolean;
}

export type ageType = {
    name: string;
    newerThan: boolean;
    pricefactor?: number;
}

export type dimensionsType = {
    width?: number;
    length?: number;
    height?: number;
}

export type qualityType = {
    level: string;
    minPriceFactor: number;
    maxPriceFactor: number;
    minRange: null | number;
    maxRange: null | number;
}

export type locationType = {
    needsElevator: boolean;
    name: "EG" | "UG" | "1. OG" | "2. OG" | "+3. OG" | "DG";
    priceFactor: number;
}

export type hasElevatorType = {
    name: string;
    hasElevator: true | false | null;
}

