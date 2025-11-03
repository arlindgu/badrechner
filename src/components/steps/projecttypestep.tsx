import { projectType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";

const projectTypeContent: projectType[] = [
  {
    name: "Neubau",
    newBuild: true,
  },
  {
    name: "Umbau",
    newBuild: false,
  },
];

export default function ProjectTypeStep() {

    const projectType = useProjectTypeStore((state) => state.projectType);
    const setProjectType = useProjectTypeStore((state) => state.setProjectType);
    const setProjectTypeCompleted = useProjectTypeStore((state) => state.setProjectTypeCompleted);
    const setBathroomAgeCompleted = useBathroomAgeStore(
      (state) => state.setBathroomAgeCompleted
    );
    const resetBathroomAge = useBathroomAgeStore(
      (state) => state.resetBathroomAge
    );


    function handleClickProjectType(item: projectType) {
      setProjectType(item);
      if (projectType?.newBuild === true) {
        resetBathroomAge();
        setProjectTypeCompleted(true);
        setBathroomAgeCompleted(true);
      } else if (projectType?.newBuild === false) {
        setProjectTypeCompleted(true);
        setBathroomAgeCompleted(false);
      }

    }

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Was für ein Badprojekt planen Sie?
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projectTypeContent.map((item) => (
            <Card
              key={item.name}
              onClick={() => handleClickProjectType(item)}
              className={clsx(
                "transition-all max-w-xs w-full",
                projectType?.name === item.name && "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent >
                <p>Bild</p>
              </CardContent>
            </Card>
          ))}
          <pre className="w-full border-2 p-4">
            {JSON.stringify({ projectType }, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
}
