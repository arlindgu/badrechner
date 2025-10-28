import { useBathroomPlannerStore } from "@/store/useBathroomPlannerStore";
import { basicType } from "@/types/content";
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card";

const StyleStepContent: basicType[] = [
  {
    name: "Modern",
    description: "Sleek lines and minimalist design for a contemporary look.",
    price: 500,
    image: "/styles/modern.jpg",
    imageAlt: "Modern bathroom style",
  },
  {
    name: "Klassisch",
    description: "Timeless elegance with traditional fixtures and finishes.",
    price: 600,
    image: "/styles/classic.jpg",
    imageAlt: "Classic bathroom style",
  },
  {
    name: "Skandinavisch",
    description: "Warm and cozy with natural materials and earthy tones.",
    price: 550,
    image: "/styles/rustic.jpg",
    imageAlt: "Rustic bathroom style",
  },
  {
    name: "Industrial",
    description: "Raw and edgy with exposed pipes and concrete elements.",
    price: 650,
    image: "/styles/industrial.jpg",
    imageAlt: "Industrial bathroom style",
  }
];

export default function StyleStep() {

    const style = useBathroomPlannerStore((state) => state.style);
    const setStyle = useBathroomPlannerStore((state) => state.setStyle);

    function handleClick(item: basicType) {
        setStyle(item);
    }

  return (
    <section>
        <div>
            <h2 className="text-2xl font-bold mb-6">Wählen Sie Ihren bevorzugten Stil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {StyleStepContent.map((item) => (
                    <Card 
                      key={item.name} 
                      onClick={() => handleClick(item)}
                    >
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={item.image} alt={item.imageAlt} className="w-full h-48 object-cover mb-4 rounded" />
                            <CardDescription>{item.description}</CardDescription>
                            <p className="mt-2 font-semibold">Ab {item.price} €</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <p>{JSON.stringify(style)}</p>
            
        </div>
    </section>
  );
}

