import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
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

const StyleStepContent: styleType[] = [
  {
    name: "Modern",
    description: "Sleek lines and minimalist design for a contemporary look.",
    image: "/modern.png",
    imageAlt: "Modern bathroom style",
  },
  {
    name: "Klassisch",
    description: "Timeless elegance with traditional fixtures and finishes.",
    image: "/classic.png",
    imageAlt: "Classic bathroom style",
  },
  {
    name: "Skandinavisch",
    description: "Warm and cozy with natural materials and earthy tones.",
    image: "/skandinavian.png",
    imageAlt: "Skandinavisch bathroom style",
  },
  {
    name: "Industrial",
    description: "Raw and edgy with exposed pipes and concrete elements.",
    image: "/industrial.png",
    imageAlt: "Industrial bathroom style",
  },
];

export default function StyleStep() {
  const style = useBathroomPlannerStore((state) => state.style);
  const setStyle = useBathroomPlannerStore((state) => state.setStyle);

  function handleClick(item: styleType) {
    setStyle(item);
  }

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
