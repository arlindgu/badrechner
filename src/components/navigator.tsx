import { useStepStore } from "@/stores/useStepStore";
import { Button } from "@/components/ui/button";


export default function ButtonNavigator( { isStepComplete }: { isStepComplete: boolean }) {

    const currentStep = useStepStore((state) => state.step);
    const incrementStep = useStepStore((state) => state.incrementStep);
    const decrementStep = useStepStore((state) => state.decrementStep);



    return (
      <div className="flex flex-row gap-4 mt-8 justify-center">
        {currentStep > 0 && (
          <Button onClick={decrementStep} variant="secondary">
            Back
          </Button>
        )}
        {currentStep < 10 && (
          <Button
            onClick={incrementStep}
            disabled={!isStepComplete}
          >
            Weiter
          </Button>
        )}
      </div>
    );
}