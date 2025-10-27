"use client";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export type BathroomStylesProps = {
    name: string;
    description: string;
    picture: string;
    price: number;
}[];

export default function BathroomStyles({ styles }: { styles: BathroomStylesProps }) {
    return (
      <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Wählen Sie Ihr Badstil</h2>
          <div className="flex flex-row gap-4">
            {styles.map((style) => (
              <Card
                key={style.name}
                className="mb-4 flex justify-around"
              >
                <CardHeader>
                  <CardTitle>{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                  <CardAction>
                    <Check />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <Image
                    src={style.picture}
                    alt={`${style.name} Badezimmer`}
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
}