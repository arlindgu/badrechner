import { qualityType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useQualityLevelStore } from "@/stores/useQualityLevelStore";
import { useEquipmentStore } from "@/stores/useEquipmentStore";
import { set } from "zod";
import { useEffect } from "react";
import ButtonNavigator from "../navigator";

const QualityStepContent: qualityType[] = [
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

export default function QualityStep() {
    const quality = useQualityLevelStore((state) => state.qualityLevel);
    const setQuality = useQualityLevelStore((state) => state.setQualityLevel);
    const equipment = useEquipmentStore((state) => state.equipment);
    const setQualityCompleted = useQualityLevelStore((state) => state.setQualityLevelCompleted);
    const qualityStepCompleted = useQualityLevelStore(
      (state) => state.qualityLevelCompleted
    );

    const baseSum = equipment.reduce((sum, eq) => sum + (eq.price ?? 0), 0);

    QualityStepContent[0].minRange = baseSum * QualityStepContent[0].minPriceFactor;
    QualityStepContent[0].maxRange = baseSum * QualityStepContent[0].maxPriceFactor;

    QualityStepContent[1].minRange = baseSum * QualityStepContent[1].minPriceFactor;
    QualityStepContent[1].maxRange = baseSum * QualityStepContent[1].maxPriceFactor;

    QualityStepContent[2].minRange = baseSum * QualityStepContent[2].minPriceFactor;
    QualityStepContent[2].maxRange = baseSum * QualityStepContent[2].maxPriceFactor;

    useEffect(() => {
      if (quality) {
        setQualityCompleted(true);
      } else {
        setQualityCompleted(false);
      }
    }, [quality, setQualityCompleted]);


  function handleClick(item: qualityType) {
    setQuality(item);
    
  }

  return (
    <section className="my-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wählen Sie ihren bevorzugten Stil
        </h2>
        <div className="flex flex-wrap gap-6 mx-auto justify-center">
          {QualityStepContent.map((item) => (
            <Card
              key={item.level}
              onClick={() => handleClick(item)}
              className={clsx(
                "transition-all max-w-xs w-full",
                quality?.item.level === item.level &&
                  "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.level}</CardTitle>
                <CardDescription>
                  {item.minRange} - {item.maxRange}
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
        <ButtonNavigator isStepComplete={qualityStepCompleted} />
      </div>
    </section>
  );
}
