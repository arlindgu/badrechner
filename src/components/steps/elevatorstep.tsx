import { hasElevatorType, locationType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useElevatorStore } from "@/stores/useElevatorStore";

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

export default function LocationStep() {
  const hasElevator = useElevatorStore((state) => state.hasElevator);
  const setHasElevator = useElevatorStore((state) => state.setHasElevator);
  const setHasElevatorCompleted = useElevatorStore(
    (state) => state.setHasElevatorCompleted
  );

  function handleClickHasElevator(item: hasElevatorType) {
    setHasElevator(item);
    setHasElevatorCompleted(true);
  }

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
            <pre className="w-full border-2 p-4">
              {JSON.stringify({ hasElevator }, null, 2)}
            </pre>
          </div>
      </div>
    </section>
  );
}
