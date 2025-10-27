import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type BathroomConfigurationProps = {
    name: string;
    description: string;
    picture: string;
    price: number;
}[];


export default function BathroomConfiguration( { configuration }: { configuration: BathroomConfigurationProps }) {
    return (
      <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Wählen Sie ihre Austattung</h2>
          <div className="grid grid-cols-5 gap-4">
            {configuration.map((item) => (
              <Card key={item.name}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p> bild</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
}