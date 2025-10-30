import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { clsx } from "clsx";
import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { equipmentType } from "@/types/content";
import { Button } from "../ui/button";
import Image from "next/image";

const EquipmentStepContent: equipmentType[] = [
  {
    name: "Waschtisch mit Unterschrank",
    price: 500,
    image: "/equipment/waschtisch.png",
    imageAlt: "Waschtisch mit Unterschrank",
    variant: [{ variant: "Einfach", priceFactor: 1 }, { variant: "Doppelt", priceFactor: 1.2 }],
  },
  {
    name: "Armaturen",
    price: 300,
    image: "/equipment/armaturen.png",
    imageAlt: "Armaturen",
  },
  {
    name: "Spiegel / Spiegelschrank",
    price: 400,
    image: "/equipment/spiegel.png",
    imageAlt: "Spiegel / Spiegelschrank",
  },
  {
    name: "Wandbelag",
    price: 600,
    image: "/equipment/wandbelag.png",
    imageAlt: "Wandbelag",
  },
  {
    name: "Heizkörper",
    price: 350,
    image: "/equipment/heizkoerper.png",
    imageAlt: "Heizkörper",
  },
  {
    name: "Badewanne",
    price: 800,
    image: "/equipment/badewanne.png",
    imageAlt: "Badewanne",
    variant: [{ variant: "Eingebaut", priceFactor: 1 }, { variant: "Freistehend", priceFactor: 1.2 }],
  },
  {
    name: "Bodenbelag",
    price: 550,
    image: "/equipment/bodenbelag.png",
    imageAlt: "Bodenbelag",
  },
  {
    name: "Accessoires",
    price: 150,
    image: "/equipment/accessoires.png",
    imageAlt: "Accessoires",
  },
  {
    name: "Dusche",
    price: 700,
    image: "/equipment/dusche.png",
    imageAlt: "Dusche",
    variant: [
      { variant: "Normal", priceFactor: 1 },
      { variant: "Bodengleich", priceFactor: 1.2 },
      { variant: "Bodengleich mit Glasswand", priceFactor: 1.5 },
    ],
  },
  {
    name: "WC",
    price: 400,
    image: "/equipment/wc.png",
    imageAlt: "WC",
    variant: [{ variant: "Dusch-WC", priceFactor: 1.2 }, { variant: "Standard-WC", priceFactor: 1 }],
  },
];

export default function EquipmentStep() {
  const equipment = useBathroomPlannerStore((state) => state.equipment);
  const addEquipment = useBathroomPlannerStore((state) => state.addEquipment);
  const removeEquipment = useBathroomPlannerStore(
    (state) => state.removeEquipment
  );
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: string;
  }>({});

  function handleSelectVariant(name: string, variantName: string) {
    setSelectedVariants((prev) => ({ ...prev, [name]: variantName }));

    const item = EquipmentStepContent.find((eq) => eq.name === name);
    if (!item || !item.variant) return;

    // Gewählte Variante inklusive priceFactor holen
    const selected = item.variant.find((v) => v.variant === variantName);
    if (!selected) return;

    // Im Store speichern, mit kompletter Variante
    addEquipment({ ...item, selectedVariant: selected });
  }

  function handleClick(item: equipmentType) {
    if (equipment.some((eq) => eq.name === item.name)) {
      removeEquipment(item);
    } else {
      const selected =
        item.variant?.find((v) => v.variant === selectedVariants[item.name]) ||
        null;

      addEquipment({
        ...item,
        selectedVariant: selected,
      });
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
              className={clsx(
                "transition-all max-w-xs w-full cursor-pointer",
                equipment.some((eq) => eq.name === item.name) &&
                  "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={400}
                  height={192}
                  className="h-48 object-cover mb-4 rounded"
                />
                {item.variant &&
                  equipment.some((eq) => eq.name === item.name) && (
                    <div onClick={(e) => e.stopPropagation()}>
                      <Label className="mb-2 block">Variante wählen:</Label>
                      <RadioGroup
                        value={
                          selectedVariants[item.name] ||
                          equipment.find((eq) => eq.name === item.name)
                            ?.selectedVariant?.variant ||
                          ""
                        }
                        onValueChange={(value) =>
                          handleSelectVariant(item.name, value)
                        }
                        className="grid grid-cols-1 gap-2"
                      >
                        {item.variant.map((v) => (
                          <div
                            key={v.variant}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={v.variant}
                              id={`${item.name}-${v.variant}`}
                            />
                            <Label htmlFor={`${item.name}-${v.variant}`}>
                              {v.variant}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleClick(item)}>{equipment.some((eq) => eq.name === item.name) ? "Entfernen" : "Hinzufügen"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <pre className="w-full border-2 p-4 mt-6">
          {JSON.stringify({ equipment }, null, 2)}
        </pre>
      </div>
    </section>
  );
}
