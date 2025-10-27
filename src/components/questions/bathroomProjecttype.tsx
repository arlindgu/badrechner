import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl mb-6">Was für ein Badprojekt planen Sie? </h2>
        <div className="grid grid-cols-5 gap-4">
          {ProjectTypeData.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          <div className="grid grid-cols-5 gap-4 mt-4">
            {ageData.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}