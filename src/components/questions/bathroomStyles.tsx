"use client";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export type BathroomStylesProps = {
    name: string;
    description: string;
    picture: string;
    price: number;
}[];

export default function BathroomStyles({ styles }: { styles: BathroomStylesProps }) {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  

  const handleClick = (style: { name: string; price: number }) => {
    console.log(style.price);
    setSelectedStyle(style.name);
  };


    return (
      <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Wählen Sie Ihr Badstil</h2>
          <div className="flex flex-row gap-4">
            {styles.map((style) => (
              <Card
                key={style.name}
                className={`mb-4 flex-1 justify-around cursor-pointer ${
                  selectedStyle === style.name
                    ? "outline-4 outline-blue-400 transition-all"
                    : ""
                }`}
                onClick={() => handleClick(style)}
              >
                <CardHeader>
                  <CardTitle>{style.name}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
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