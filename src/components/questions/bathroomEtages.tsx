import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export type BathroomEtageProps = {
    name: string;
    description: string;
}[];

export default function BathroomEtages({ etagesData }: { etagesData: BathroomEtageProps }) {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl mb-6">
          In welcher Etage befindet sich das Badezimmer?
        </h2>
        <div className="flex flex-row gap-4 mt-8">
          {etagesData.map((item) => (
            <Card key={item.name} className="flex-1">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl mb-6 mt-12">
          Ist in dem Gebäude ein Lift vorhanden?
        </h2>
        <div className="flex flex-row gap-4 mt-8">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Ja, es ist ein Lift vorhanden.</CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Nein, es ist kein Lift vorhanden.</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}