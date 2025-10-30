import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { ageType, projectType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";

const bathroomAgeContent: ageType[] = [
    {
        newerThan: true,
        name: "1992 oder neuer",
    },
    {
        newerThan: false,
        name: "1991 oder älter",
    }
];

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

    const projectType = useBathroomPlannerStore((state) => state.projectType);
    const setProjectType = useBathroomPlannerStore((state) => state.setProjectType);

    const bathroomAge = useBathroomPlannerStore((state) => state.bathroomAge);
    const setBathroomAge = useBathroomPlannerStore((state) => state.setBathroomAge);
    const resetBathroomAge = useBathroomPlannerStore((state) => state.resetBathroomAge);


    function handleClickProjectType(item: projectType) {
        if (projectType?.newBuild === true) {
            resetBathroomAge();
        }
        setProjectType(item);
    }

    function handleClickAge(item: ageType) {
        setBathroomAge(item);
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
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wie alt ist Ihr bestehendes Bad?
        </h2>
        {!projectType?.newBuild && projectType?.newBuild != null && (
          <div className="flex flex-wrap gap-6 justify-center">
            {bathroomAgeContent.map((item) => (
              <Card
                key={item.name}
                onClick={() => handleClickAge(item)}
                className={clsx(
                  "transition-all max-w-xs w-full",
                  bathroomAge?.name === item.name &&
                    "outline-blue-400 outline-3"
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
              {JSON.stringify({ bathroomAge }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
