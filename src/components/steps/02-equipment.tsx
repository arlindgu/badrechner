import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { equipmentType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";

const EquipmentStepContent: equipmentType[] = [
  {
    name: "Waschtisch mit Unterschrank Einfach",
    price: 500,
    image: "/styles/modern.jpg",
    imageAlt: "Modern bathroom style",
  },
  {
    name: "Waschtisch mit Unterschrank Doppelt",
    price: 500,
    image: "/styles/modern.jpg",
    imageAlt: "Modern bathroom style",
  },
  {
    name: "Armaturen",
    price: 300,
    image: "/styles/classic.jpg",
    imageAlt: "Classic bathroom style",
  },
  {
    name: "Spiegel / Spiegelschrank",
    price: 400,
    image: "/styles/rustic.jpg",
    imageAlt: "Rustic bathroom style",
  },
  {
    name: "Wandbelag",
    price: 600,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Heizkörper",
    price: 350,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Badewanne Eingebaut",
    price: 800,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Dusche Freistehend",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Bodenbelag",
    price: 550,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Accessoires",
    price: 150,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Dusche Normal",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Dusche Bodengleich",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Dusche Bodengleich mit Glaswand",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Standard-WC",
    price: 400,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    name: "Dusch-WC",
    price: 600,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
];

export default function EquipmentStep() {
  const equipment = useBathroomPlannerStore((state) => state.equipment);
  const addEquipment = useBathroomPlannerStore((state) => state.addEquipment);
  const removeEquipment = useBathroomPlannerStore(
    (state) => state.removeEquipment
  );

  function handleClick(item: equipmentType) {
    if (equipment.some((eq) => eq.name === item.name)) {
      removeEquipment(item);
    } else {
      addEquipment(item);
    }
  }

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wählen Sie ihre Austattung
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {EquipmentStepContent.map((item) => (
            <Card
              key={item.name}
              onClick={() => handleClick(item)}
              className={clsx(
                "transition-all max-w-xs w-full",
                equipment.some((eq) => eq.name === item.name) &&
                  "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="bg-amber-200">
                <p>Bild</p>
              </CardContent>
            </Card>
          ))}
          <pre className="w-full border-2 p-4">
            {JSON.stringify({ equipment }, null, 2)}
          </pre>
        </div>
      </div>
    </section>
  );
}
