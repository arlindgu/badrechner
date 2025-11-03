import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Card, CardTitle, CardHeader, CardContent, CardFooter, CardAction } from "@/components/ui/card";
import { clsx } from "clsx";
import { equipmentType } from "@/types/content";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEquipmentStore } from "@/stores/useEquipmentStore";
import ButtonNavigator from "../navigator";
import { Minus, Plus } from "lucide-react";

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
  const equipment = useEquipmentStore((state) => state.equipment);
  const addEquipment = useEquipmentStore((state) => state.addEquipment);
  const removeEquipment = useEquipmentStore((state) => state.removeEquipment);
  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: string;
  }>({});
  const setEquipmentCompleted = useEquipmentStore(
    (state) => state.setEquipmentCompleted
  );
  const equipmentCompleted = useEquipmentStore(
    (state) => state.equipmentCompleted
  );

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
      if (item.variant) {
        const selected =
          item.variant?.find(
            (v) => v.variant === selectedVariants[item.name]
          ) || item.variant[0];

        addEquipment({
          ...item,
          selectedVariant: selected,
        });
      } else {
        addEquipment(item);
      }
    }
  }

  useEffect(() => {
    if (
      equipment.length > 0 &&
      equipment.every((eq) => eq.selectedVariant !== null)
    ) {
      setEquipmentCompleted(true);
    } else if (equipment.length === 0 || equipment === null) {
      setEquipmentCompleted(false);
    }
  }, [equipment, setEquipmentCompleted]); // ✅ ADD dependencies

  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Wählen Sie ihre Austattung
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 justify-center">
          {EquipmentStepContent.map((item) => (
            <Card
              key={item.name}
              className={clsx(
          "transition-all",
          equipment.some((eq) => eq.name === item.name) &&
            "outline-blue-400 outline-3"
              )}
            >
              <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardAction>
            <Button size="icon" variant="ghost" onClick={() => handleClick(item)}>
            {equipment.some((eq) => eq.name === item.name)
              ? <Minus />
              : <Plus />}
          </Button>
          </CardAction>
              </CardHeader>
              <CardContent>
          <div className="w-full h-24 relative">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover mb-4 rounded"
            />
          </div>
          {item.variant &&
            equipment.some((eq) => eq.name === item.name) && (
              <div onClick={(e) => e.stopPropagation()}>
                <Label className="mt-6 mb-4 block">Variante wählen:</Label>
                <RadioGroup
            defaultValue={item.variant[0].variant}
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
              </CardFooter>
            </Card>
          ))}
        </div>
        <ButtonNavigator isStepComplete={equipmentCompleted} />
      </div>
    </section>
  );
}
