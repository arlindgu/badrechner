import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { Button } from "../ui/button";

export default function devAllStep() {

    const styles = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().style)
    );
    const equipment = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().equipment)
    );
    const projectType = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().projectType)
    );
    const dimensions = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().dimensions)
    );
    const qualityLevel = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().qualityLevel)
    );
    const location = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().location)
    );
    const hasElevator = JSON.parse(
      JSON.stringify(useBathroomPlannerStore.getState().hasElevator)
    );


    function safeSerialize(obj: any) {
      return JSON.parse(
        JSON.stringify(obj, (_, value) =>
          typeof value === "function" ? undefined : value
        )
      );
    }

    const cleanData = safeSerialize({
      styles,
      equipment,
      projectType,
      dimensions,
      qualityLevel,
      location,
      hasElevator
    });

    function copyToClipboard() {
        navigator.clipboard.writeText(JSON.stringify(cleanData, null, 2));
        }


    return (
      <section className="my-12">
        <div className="px-4 container mx-auto">
          <pre className="overflow-scroll h-32">
            {JSON.stringify(
              {
                styles,
                equipment,
                projectType,
                dimensions,
                qualityLevel,
                location,
                hasElevator,
              },
              null,
              2
            )}
          </pre>
        </div>
        <Button onClick={copyToClipboard}>Copy</Button>
      </section>
    );
}