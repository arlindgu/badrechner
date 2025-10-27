import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export type BathroomEtageProps = {
    name: string;
}[];

export default function BathroomEtages({ etagesData }: { etagesData: BathroomEtageProps }) {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl mb-6">
          Welchen Ausbaustandard streben Sie an?
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {etagesData.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}

          <div className=" row-start-2 gap-4 flex flex-row">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Nein, es ist kein Lift vorhanden.</CardTitle>
              </CardHeader>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Ja, es ist ein Lift vorhanden.</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}