import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { basicType } from "@/types/content";
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

const StyleStepContent: basicType[] = [
  {
    id: "1",
    name: "Modern",
    description: "Sleek lines and minimalist design for a contemporary look.",
    price: 500,
    image: "/modern.png",
    imageAlt: "Modern bathroom style",
  },
  {
    id: "2",
    name: "Klassisch",
    description: "Timeless elegance with traditional fixtures and finishes.",
    price: 600,
    image: "/classic.png",
    imageAlt: "Classic bathroom style",
  },
  {
    id: "3",
    name: "Skandinavisch",
    description: "Warm and cozy with natural materials and earthy tones.",
    price: 550,
    image: "/skandinavian.png",
    imageAlt: "Skandinavisch bathroom style",
  },
  {
    id: "4",
    name: "Industrial",
    description: "Raw and edgy with exposed pipes and concrete elements.",
    price: 650,
    image: "/industrial.png",
    imageAlt: "Industrial bathroom style",
  },
];

export default function StyleStep() {

    const style = useBathroomPlannerStore((state) => state.style);
    const setStyle = useBathroomPlannerStore((state) => state.setStyle);

    function handleClick(item: basicType) {
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
              className={`transition-all max-w-xs w-full ${
                style && style["id"] === item.id
                  ? "outline-blue-400 outline-3"
                  : "outline-none"
              }`}
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
          <p className="w-full border-2 p-4">{JSON.stringify(style)}</p>
        </div>
      </div>
    </section>
  );
}

