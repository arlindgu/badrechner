"use client"

import StyleStep from "@/components/steps/stylestep";
import EquipmentStep from "@/components/steps/equipmentstep";
import ProjectTypeStep from "@/components/steps/projecttypestep";
import DimensionsStep from "@/components/steps/dimensionsstep";
import QualityStep from "@/components/steps/qualitystep";
import LocationStep from "@/components/steps/locationstep";
import DevAllStep from "@/components/steps/08-dev-all";
import FormStep from "@/components/steps/formstep";
import { Button } from "@/components/ui/button";
import { useStepStore } from "@/stores/useStepStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";
import BathroomAgeStep from "@/components/steps/bathroomagestep";

export default function Home() {
  const step = useStepStore((state) => state.step);
  const nextStep = useStepStore((state) => state.incrementStep);
  const prevStep = useStepStore((state) => state.decrementStep);
  const projectType = useProjectTypeStore((state) => state.projectType);
  const setBathroomAgeCompleted = useBathroomAgeStore((state) => state.setBathroomAgeCompleted);


  

  return (
      <section>
        <div className="container px-4 mx-auto">
          <div>
            {step === 1 && <StyleStep />}
            {step === 2 && <EquipmentStep />}
            {step === 3 && <ProjectTypeStep />}
            {step === 4 && projectType?.newBuild === false && <BathroomAgeStep />}
            {step === 4 && projectType?.newBuild === true && <DimensionsStep />}
            {step === 5 && <QualityStep />}
            {step === 6 && <LocationStep />}
            {step === 7 && <DevAllStep />}
            {step === 8 && <FormStep />}
          </div>
          <div className="flex flex-row gap-4 mt-4">
            {step > 0 && (
              <Button onClick={prevStep} variant="secondary">
                Back
              </Button>
            )}
            {step < 7 && (
              <Button onClick={nextStep} variant="default">
                Next
              </Button>
            )}
          </div>
        </div>
      </section>
  );
}
