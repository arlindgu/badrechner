import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { basicType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const EquipmentStepContent: basicType[] = [
  {
    id: "1",
    name: "Waschtisch mit Unterschrank Einfach",
    description:
      "Moderner Waschtisch mit praktischem Unterschrank für zusätzlichen Stauraum.",
    price: 500,
    image: "/styles/modern.jpg",
    imageAlt: "Modern bathroom style",
  },
  {
    id: "2",
    name: "Waschtisch mit Unterschrank Doppelt",
    description:
      "Moderner Waschtisch mit praktischem Unterschrank für zusätzlichen Stauraum.",
    price: 500,
    image: "/styles/modern.jpg",
    imageAlt: "Modern bathroom style",
  },
  {
    id: "3",
    name: "Armaturen",
    description:
      "Hochwertige Armaturen in verschiedenen Designs und Oberflächen.",
    price: 300,
    image: "/styles/classic.jpg",
    imageAlt: "Classic bathroom style",
  },
  {
    id: "4",
    name: "Spiegel / Spiegelschrank",
    description:
      "Funktionale Spiegel und Spiegelschränke mit integriertem Beleuchtungssystem.",
    price: 400,
    image: "/styles/rustic.jpg",
    imageAlt: "Rustic bathroom style",
  },
  {
    id: "5",
    name: "Wandbelag",
    description:
      "Verschiedene Wandbeläge wie Fliesen, Naturstein oder wasserfeste Farben.",
    price: 600,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "6",
    name: "Heizkörper",
    description:
      "Moderne Heizkörper und Handtuchwärmer für wohlige Wärme im Badezimmer.",
    price: 350,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "7",
    name: "Badewanne Eingebaut",
    description: "Elegante eingebaute Badewanne für entspannende Momente.",
    price: 800,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "8",
    name: "Dusche Freistehend",
    description:
      "Moderne freistehende Dusche mit Glasabtrennung und Regenduschkopf.",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "9",
    name: "Bodenbelag",
    description:
      "Verschiedene Bodenbeläge wie Fliesen, Vinyl oder Naturstein für Ihr Badezimmer.",
    price: 550,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "10",
    name: "Accessoires",
    description:
      "Stilvolle Accessoires wie Seifenspender, Handtuchhalter und mehr.",
    price: 150,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "11",
    name: "Dusche Normal",
    description:
      "Moderne freistehende Dusche mit Glasabtrennung und Regenduschkopf.",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "12",
    name: "Dusche Bodengleich",
    description:
      "Dusche ohne Duschwanne für einen nahtlosen Übergang zum Badezimmerboden.",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "13",
    name: "Dusche Bodengleich mit Glaswand",
    description:
      "Moderne freistehende Dusche mit Glasabtrennung und Regenduschkopf.",
    price: 700,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "14",
    name: "Standard-WC",
    description: "Klassisches WC mit Spülkasten und Sitz.",
    price: 400,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
  {
    id: "15",
    name: "Dusch-WC",
    description: "Modernes Dusch-WC für eine platzsparende Lösung.",
    price: 600,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  },
];



export default function StyleStep() {
    const equipment = useBathroomPlannerStore((state) => state.equipment);
    const addEqupipment = useBathroomPlannerStore((state) => state.addEquipment);
    const removeEquipment = useBathroomPlannerStore((state) => state.removeEquipment);

  function handleClick(item: basicType) {
    if (equipment && equipment[item.id]) {
        removeEquipment(item);
    } else {
        addEqupipment(item);
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
              className={`transition-all min-w-xs ${
                equipment && equipment[item.id]
                  ? "outline-blue-400 outline-3"
                  : "outline-none"
              }`}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="bg-amber-200">
                <p>Bild</p>
              </CardContent>
            </Card>
          ))}
          <p className="w-full border-2 p-4">{JSON.stringify(equipment)}</p>
        </div>
      </div>
    </section>
  );
}
