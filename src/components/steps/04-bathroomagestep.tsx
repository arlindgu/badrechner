import { ageType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";
import ButtonNavigator from "../navigator";
import { useEffect } from "react";
import { bathroomAgeOptions } from "@/content/bathroomAge";


export default function BathroomAgeStep() {
  const bathroomAgeContent = bathroomAgeOptions;
  const bathroomAgeCompleted = useBathroomAgeStore(
    (state) => state.bathroomAgeCompleted
  );
  const bathroomAge = useBathroomAgeStore((state) => state.bathroomAge);
  const setBathroomAge = useBathroomAgeStore((state) => state.setBathroomAge);
  const setBathroomAgeCompleted = useBathroomAgeStore(
    (state) => state.setBathroomAgeCompleted
  );

      useEffect(() => {
        if (bathroomAge) {
          setBathroomAgeCompleted(true);
        } else {
          setBathroomAgeCompleted(false);
        }
      }, [bathroomAge, setBathroomAgeCompleted]);

  function handleClickAge(item: ageType) {
    setBathroomAge(item);
  }

  

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6 text-center">
          Wie alt ist Ihr bestehendes Bad?
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {bathroomAgeContent.map((item) => (
            <Card
              key={item.name}
              onClick={() => handleClickAge(item)}
              className={clsx(
                "transition-all max-w-xs w-full",
                bathroomAge?.name === item.name && "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <ButtonNavigator isStepComplete={bathroomAgeCompleted} />
      </div>
    </section>
  );
}
