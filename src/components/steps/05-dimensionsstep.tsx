import { useDimensionsStore } from "@/stores/useDimensionsStore";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import ButtonNavigator from "../navigator";


export default function DimensionsStep() {

    const dimensions = useDimensionsStore((state) => state.dimensions);
    const setDimensions = useDimensionsStore((state) => state.setDimensions);
    const setDimensionsCompleted = useDimensionsStore(
      (state) => state.setDimensionsCompleted
    );
    const dimensionsCompleted = useDimensionsStore(
      (state) => state.dimensionsCompleted
    );


    useEffect(() => {
      const isComplete = dimensions?.width && dimensions?.length && dimensions?.height;
      setDimensionsCompleted(!!isComplete);
    }, [dimensions, setDimensionsCompleted]);



  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6 text-center">
          Was für ein Badprojekt planen Sie?
        </h2>
        <div className="flex gap-6 justify-center">
          <div>
            <Label>Breite in Meter</Label>
            <Input
              type="number"
              value={dimensions?.width || ""}
              placeholder="12.5"
              onChange={(e) =>
                setDimensions({
                  ...dimensions,
                  width: parseInt(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label>Länge in Meter</Label>
            <Input
              type="number"
              value={dimensions?.length || ""}
              placeholder="3.25"
              onChange={(e) =>
                setDimensions({
                  ...dimensions,
                  length: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div>
            <Label>Höhe in Meter</Label>
            <Input
              type="number"
              value={dimensions?.height || ""}
              placeholder="1.25"
              onChange={(e) =>
                setDimensions({
                  ...dimensions,
                  height: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <ButtonNavigator isStepComplete={dimensionsCompleted} />
      </div>
    </section>
  );
}
