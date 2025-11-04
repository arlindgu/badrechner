import { locationType } from "@/types/location";

export const locationOptions: locationType[] = [
    {
        needsElevator: true,
        name: "UG",
        priceFactor: 1,
        description: "Untergeschoss (UG) - Benötigt einen Aufzug",
    },
    {
        needsElevator: false,
        name: "EG",
        priceFactor: 1.0,
        description: "Erdgeschoss (EG) - Kein Aufzug benötigt",
    },
    {
        needsElevator: true,
        name: "1. OG",
        priceFactor: 1.1,
        description: "1. Obergeschoss (1. OG) - Benötigt einen Aufzug",
    },
    {
        needsElevator: true,
        name: "2. OG",
        priceFactor: 1.2,
        description: "2. Obergeschoss (2. OG) - Benötigt einen Aufzug",
    },
    {
        needsElevator: true,
        name: "+3. OG",
        priceFactor: 1.3,
        description: "+3. Obergeschoss (3. OG) - Benötigt einen Aufzug",
    },
    {
        needsElevator: true,
        name: "DG",
        priceFactor: 1.4,
        description: "Dachgeschoss (DG) - Benötigt einen Aufzug",
    }
];