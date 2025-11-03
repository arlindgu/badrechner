"use client";

import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { styleType } from "@/types/content";
import { clsx } from "clsx";
import { useEffect } from "react";
import { useStyleStore } from "@/stores/useStyleStore";

const StyleStepContent: styleType[] = [
  {
    name: "Modern",
    description: "Sleek lines and minimalist design for a contemporary look.",
    image: "/styles/modern.png",
    imageAlt: "Modern bathroom style",
  },
  {
    name: "Klassisch",
    description: "Timeless elegance with traditional fixtures and finishes.",
    image: "/styles/classic.png",
    imageAlt: "Classic bathroom style",
  },
  {
    name: "Skandinavisch",
    description: "Warm and cozy with natural materials and earthy tones.",
    image: "/styles/skandinavian.png",
    imageAlt: "Skandinavisch bathroom style",
  },
  {
    name: "Industrial",
    description: "Raw and edgy with exposed pipes and concrete elements.",
    image: "/styles/industrial.png",
    imageAlt: "Industrial bathroom style",
  },
];

export default function StyleStep() {
  const style = useStyleStore((state) => state.style);
  const setStyle = useStyleStore((state) => state.setStyle);
  const styleCompleted = useStyleStore((state) => state.styleCompleted);
  const setStyleCompleted = useStyleStore((state) => state.setStyleCompleted);

  function handleClick(item: styleType) {
    setStyle(item);
  }

  useEffect(() => {
    if (style) {
      setStyleCompleted(true);
    }
  }, [style, setStyleCompleted]);

  return (
    <section className="my-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wählen Sie ihren bevorzugten Stil
        </h2>
        <div className="flex flex-wrap gap-6 mx-auto justify-center">
          {StyleStepContent.map((item) => (
            <Card
              key={item.name}
              onClick={() => handleClick(item)}
              className={clsx(
                "transition-all max-w-xs w-full",
                style?.name === item.name && "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={400}
                  height={192}
                  className="h-48 object-cover mb-4 rounded"
                />
              </CardContent>
            </Card>
          ))}
          <pre className="w-full border-2 p-4">
            {JSON.stringify({ style }, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
}
