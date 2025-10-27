import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export type BathroomConfigurationProps = {
    name: string;
    description: string;
    picture: string;
    price: number;
}[];


export default function BathroomConfiguration( { configuration }: { configuration: BathroomConfigurationProps }) {
 const [selectedConfigurations, setSelectedConfigurations] = useState<string[]>(
   []
 );

  const handleClick = (item: { name: string; price: number }) => {
    console.log(item.price);

    setSelectedConfigurations(
      (prev) =>
        prev.includes(item.name)
          ? prev.filter((name) => name !== item.name) // abwählen
          : [...prev, item.name] // hinzufügen
    );
  };

    return (
      <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Wählen Sie ihre Austattung</h2>
          <div className="grid grid-cols-5 gap-4">
            {configuration.map((item) => (
              <Card
                key={item.name}
                className={`mb-4 flex justify-around cursor-pointer transition-all ${
                  selectedConfigurations.includes(item.name)
                    ? "outline outline-4 outline-blue-400"
                    : ""
                }`}
                onClick={() => handleClick(item)}
              >
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