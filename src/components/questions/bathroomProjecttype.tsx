import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export type BathroomProjectTypeProps = {
    name: string;
    description: string;
}[];

export type BathroomAgeProps = {
    name: string;
}[];

export default function BathroomProjectType({
  ageData,
  ProjectTypeData,
}: {
  ageData: BathroomAgeProps;
  ProjectTypeData: BathroomProjectTypeProps;
}) {

  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleClickAge = (item: { name: string }) => {
    setSelectedAge(item.name);
  }

  const handleClickType = (item: { name: string; description: string }) => {
    setSelectedType(item.name);
  }






  
  return (
    <section>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl mb-6">Was für ein Badprojekt planen Sie? </h2>
        <div className="flex flex-row gap-4">
          {ProjectTypeData.map((item) => (
            <Card
              key={item.name}
              className={`mb-4 flex-1 justify-around cursor-pointer transition-all ${
                selectedType === item.name
                  ? "outline-4 outline-blue-400"
                  : ""
              }`}
              onClick={() => handleClickType(item)}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <h2 className="text-3xl mb-6 mt-12">
          Wie alt ist Ihr bestehendes Bad?
        </h2>
        <div className="flex flex-row gap-4 mt-8">
          {ageData.map((item) => (
            <Card
              key={item.name}
              className={`mb-4 flex-1 justify-around cursor-pointer transition-all ${
                selectedAge === item.name
                  ? "outline outline-4 outline-blue-400"
                  : ""
              }`}
              onClick={() => handleClickAge(item)}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}