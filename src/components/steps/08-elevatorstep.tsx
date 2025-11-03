import { hasElevatorType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useElevatorStore } from "@/stores/useElevatorStore";
import { useEffect } from "react";
import ButtonNavigator from "../navigator";

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

export default function ElevatorStep() {
  const hasElevator = useElevatorStore((state) => state.hasElevator);
  const setHasElevator = useElevatorStore((state) => state.setHasElevator);
  const setHasElevatorCompleted = useElevatorStore(
    (state) => state.setHasElevatorCompleted
  );

  function handleClickHasElevator(item: hasElevatorType) {
    setHasElevator(item);
  }

  useEffect(() => {
    if (hasElevator?.hasElevator !== undefined) {
      setHasElevatorCompleted(true);
    }
  }, [hasElevator, setHasElevatorCompleted]);

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Gibt es einen Aufzug im Gebäude?
        </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {hasElevatorContent.map((item) => (
              <Card
                key={String(item.hasElevator)}
                onClick={() => handleClickHasElevator(item)}
                className={clsx(
                  "transition-all max-w-xs w-full",
                  hasElevator?.hasElevator === item.hasElevator &&
                    "outline-blue-400 outline-3"
                )}
              >
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Bild</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ButtonNavigator isStepComplete={hasElevator?.hasElevator !== undefined} />
      </div>
    </section>
  );
}
