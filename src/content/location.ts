import { locationType } from "@/types/location";

export const locationOptions: locationType[] = [
    {
        needsElevator: true,
        name: "UG",
        priceFactor: 1,
    },
    {
        needsElevator: false,
        name: "EG",
        priceFactor: 1.0,
    },
    {
        needsElevator: true,
        name: "1. OG",
        priceFactor: 1.1,
    },
    {
        needsElevator: true,
        name: "2. OG",
        priceFactor: 1.2,
    },
    {
        needsElevator: true,
        name: "+3. OG",
        priceFactor: 1.3,
    },
    {
        needsElevator: true,
        name: "DG",
        priceFactor: 1.4,
    }
];