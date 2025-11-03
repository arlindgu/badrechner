import { ageType, projectType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";

const bathroomAgeContent: ageType[] = [
  {
    newerThan: true,
    name: "1992 oder neuer",
  },
  {
    newerThan: false,
    name: "1991 oder älter",
  },
];

export default function BathroomAgeStep() {

  const bathroomAge = useBathroomAgeStore((state) => state.bathroomAge);
  const setBathroomAge = useBathroomAgeStore((state) => state.setBathroomAge);
  const resetBathroomAge = useBathroomAgeStore(
    (state) => state.resetBathroomAge
  );
  const setBathroomAgeCompleted = useBathroomAgeStore(
    (state) => state.setBathroomAgeCompleted
  );

  function handleClickAge(item: ageType) {
    setBathroomAge(item);
  }

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wie alt ist Ihr bestehendes Bad?
        </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {bathroomAgeContent.map((item) => (
              <Card
                key={item.name}
                onClick={() => handleClickAge(item)}
                className={clsx(
                  "transition-all max-w-xs w-full",
                  bathroomAge?.name === item.name &&
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
              {JSON.stringify({ bathroomAge }, null, 2)}
            </pre>
          </div>
      </div>
    </section>
  );
}
