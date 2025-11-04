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
import ButtonNavigator from "../navigator";
import { styleOptions } from "@/content/style";


export default function StyleStep() {
  const StyleStepContent = styleOptions;
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
        <h2 className="text-2xl col-span-full font-bold mb-6 text-center">
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
          <ButtonNavigator isStepComplete={styleCompleted} />
        </div>
      </div>
    </section>
  );
}
