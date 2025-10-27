import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type BathroomStandardProps = {
    name: string;
    price: string;
}[];

export default function BathroomStandards({
  standardsData,
}: {
  standardsData: BathroomStandardProps;
}) {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl mb-6">
          Welchen Ausbaustandard streben Sie an?
        </h2>
        <div className="flex flex-row gap-4">
          {standardsData.map((item) => (
            <Card key={item.name} className="flex-1">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.price}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}