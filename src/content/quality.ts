import { qualityType } from "@/types/quality";

export const qualityOptions: qualityType[] = [
  {
    level: "Einfach",
    minPriceFactor: 1.0,
    maxPriceFactor: 1.2,
    minRange: null,
    maxRange: null,
  },
  {
    level: "Mittel",
    minPriceFactor: 1.3,
    maxPriceFactor: 1.5,
    minRange: null,
    maxRange: null,
  },
  {
    level: "Gehoben",
    minPriceFactor: 1.6,
    maxPriceFactor: 1.8,
    minRange: null,
    maxRange: null,
  }
];