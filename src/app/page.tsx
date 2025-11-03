"use client";

import StyleStep from "@/components/steps/01-stylestep";
import EquipmentStep from "@/components/steps/02-equipmentstep";
import ProjectTypeStep from "@/components/steps/03-projecttypestep";
import BathroomAgeStep from "@/components/steps/04-bathroomagestep";
import DimensionsStep from "@/components/steps/05-dimensionsstep";
import QualityStep from "@/components/steps/06-qualitystep";
import LocationStep from "@/components/steps/07-locationstep";
import ElevatorStep from "@/components/steps/08-elevatorstep";
import FormStep from "@/components/steps/09-form";
import { useStepStore } from "@/stores/useStepStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useLocationStore } from "@/stores/useLocationStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const step = useStepStore((state) => state.step);
  const incrementStep = useStepStore((state) => state.incrementStep);
  const projectType = useProjectTypeStore((state) => state.projectType);
  const location = useLocationStore((state) => state.location);

  const progressiveValue = (step / 8) * 100;

  return (
    <section>
      <div className="container mx-auto">
        <Progress value={progressiveValue} />
        <div>
          {step === 0 && (
            <div className="h-full flex flex-col items-center justify-center gap-6">
              <h1>Willkommen beim Baderechner</h1>
              <p>Hier können Sie Ihr Traumbad planen und berechnen.</p>
              <Button onClick={incrementStep}>Starten</Button>
            </div>
          )}
          {step === 1 && <StyleStep />}
          {step === 2 && <EquipmentStep />}
          {step === 3 && <ProjectTypeStep />}
          {step === 4 &&
            (projectType?.newBuild === false ? (
              <BathroomAgeStep />
            ) : (
              <DimensionsStep />
            ))}
          {step === 5 && <QualityStep />}
          {step === 6 && <LocationStep />}
          {step === 7 &&
            (location?.item.needsElevator === true ? (
              <ElevatorStep />
            ) : (
              <FormStep />
            ))}
          {step === 8 && <FormStep />}
        </div>
      </div>
    </section>
  );
}
