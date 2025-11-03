import { equipmentType } from "@/types/equipment";

export const equipmentOptions: equipmentType[] = [
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