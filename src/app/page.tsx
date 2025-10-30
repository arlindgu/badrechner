"use client"

import StyleStep from "@/components/steps/01-style";
import EquipmentStep from "@/components/steps/02-equipment";
import ProjectTypeStep from "@/components/steps/03-projecttype";
import DimensionsStep from "@/components/steps/04-dimensions";
import QualityStep from "@/components/steps/05-quality";
import LocationStep from "@/components/steps/06-location";
import DevAllStep from "@/components/steps/08-dev-all";
import { SubmitForm } from "@/components/submitform";
import { Button } from "@/components/ui/button";
import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";

export default function Home() {
  const step = useBathroomPlannerStore((state) => state.step);
  const nextStep = useBathroomPlannerStore((state) => state.incrementStep);
  const prevStep = useBathroomPlannerStore((state) => state.decrementStep);

  return (
    <main>
      <section>
        <div className="container px-4 mx-auto">
          <div>
            {step === 1 && <StyleStep />}
            {step === 2 && <EquipmentStep />}
            {step === 3 && <ProjectTypeStep />}
            {step === 4 && <DimensionsStep />}
            {step === 5 && <QualityStep />}
            {step === 6 && <LocationStep />}
            {step === 7 && <DevAllStep />}
            {step === 8 && <SubmitForm />}
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
    </main>
  );
}
