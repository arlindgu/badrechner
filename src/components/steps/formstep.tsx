import { hasElevatorType, locationType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { SubmitForm } from "../submitform";

const locationContent: locationType[] = [
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
  },
];

const hasElevatorContent: hasElevatorType[] = [
  {
    name: "Kein Aufzug",
    hasElevator: null,
  },
  {
    name: "Mit Aufzug",
    hasElevator: true,
  },
];

export default function FormStep() {
  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Fast geschafft! Bitte füllen Sie das Formular aus.
        </h2>
            <SubmitForm />          
      </div>
    </section>
  );
}
