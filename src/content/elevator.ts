import { hasElevatorType } from "@/types/location";

export const elevatorOptions: hasElevatorType[] = [
  {
    name: "Kein Aufzug",
    hasElevator: null,
  },
  {
    name: "Mit Aufzug",
    hasElevator: true,
  },
];