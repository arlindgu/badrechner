
export type locationType = {
    needsElevator: boolean;
    name: "EG" | "UG" | "1. OG" | "2. OG" | "+3. OG" | "DG";
    priceFactor: number;
    description: string;
}

export type hasElevatorType = {
    name: string;
    hasElevator: true | false | null;
}

