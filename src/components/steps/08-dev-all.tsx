
import { useStyleStore } from "@/stores/useStyleStore";
import { Button } from "../ui/button";
import { useEquipmentStore } from "@/stores/useEquipmentStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useDimensionsStore } from "@/stores/useDimensionsStore";
import { useQualityLevelStore } from "@/stores/useQualityLevelStore";
import { useLocationStore } from "@/stores/useLocationStore";
import { useElevatorStore } from "@/stores/useElevatorStore";

export default function devAllStep() {

    const styles = JSON.parse(
      JSON.stringify(useStyleStore.getState().style)
    );
    const equipment = JSON.parse(
      JSON.stringify(useEquipmentStore.getState().equipment)
    );
    const projectType = JSON.parse(
      JSON.stringify(useProjectTypeStore.getState().projectType)
    );
    const dimensions = JSON.parse(
      JSON.stringify(useDimensionsStore.getState().dimensions)
    );
    const qualityLevel = JSON.parse(
      JSON.stringify(useQualityLevelStore.getState().qualityLevel)
    );
    const location = JSON.parse(
      JSON.stringify(useLocationStore.getState().location)
    );
    const hasElevator = JSON.parse(
      JSON.stringify(useElevatorStore.getState().hasElevator)
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