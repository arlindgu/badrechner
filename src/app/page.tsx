"use client";

import BathroomAttachements from "@/components/questions/bathroomAttachements";
import BathroomConfiguration, { BathroomConfigurationProps } from "@/components/questions/bathroomConfiguration";
import BathroomEtages, { BathroomEtageProps } from "@/components/questions/bathroomEtages";
import BathroomMeasures from "@/components/questions/bathroomMeasures";
import BathroomProjectType, { BathroomAgeProps, BathroomProjectTypeProps } from "@/components/questions/bathroomProjecttype";
import BathroomStandards, { BathroomStandardProps } from "@/components/questions/bathroomStandards";
import BathroomStyles, { BathroomStylesProps } from "@/components/questions/bathroomStyles";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bath, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedEtage, setSelectedEtage] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const [selectedConfiguration, setSelectedConfiguration] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [step, setStep] = useState(1);

  const bathroomEtage: BathroomEtageProps = [
    {
      name: "EG – Erdgeschoss"
    },
    {
      name: "1. OG – 1. Obergeschoss"
    },
    {
      name: "2. OG – 2. Obergeschoss"
    },
    {
      name: "+3. OG – 3. Obergeschoss oder höher"
    }
  ]

  const bathroomStandard: BathroomStandardProps = [
    {
      name: "Einfach",
      price: "45'000 – 60'000 CHF",
    },
    {
      name: "Mittel",
      price: "58'000 – 70'000 CHF",
    },
    {
      name: "Gehoben",
      price: "83'000 – 96'000+ CHF",
    }
  ]

  const bathroomAge: BathroomAgeProps = [
    {
      name: "1991 oder älter"
    },
    {
      name: "1992 oder neuer"
    }
  ]

  const bathroomProjectType: BathroomProjectTypeProps = [
    {
      name: "Neubau",
      description: "Planen Sie Ihr neues Badezimmer von Grund auf neu.",
    },
    {
      name: "Umbau",
      description: "Verwandeln Sie Ihr bestehendes Badezimmer in eine moderne Oase.",
    }
  ]

  const bathroomConfiguration: BathroomConfigurationProps = [
    {
      name: "Waschtisch mit Unterschrank Einzel",
      description: "Ein stilvoller Waschtisch mit einem Waschbecken und praktischem Unterschrank.",
      picture: "/waschtisch_einzel.png",
      price: 500,
    },
    {
      name: "Waschtisch mit Unterschrank Doppelt",
      description: "Ein geräumiger Waschtisch mit zwei Waschbecken und viel Stauraum.",
      picture: "/waschtisch_doppelt.png",
      price: 800,
    },
    {
      name: "Armaturen",
      description: "Moderne Armaturen für Waschtisch, Dusche und Badewanne.",
      picture: "/armaturen.png",
      price: 300,
    },
    {
      name: "Spiegel",
      description: "Verschiedene Spiegeloptionen, von schlicht bis beleuchtet.",
      picture: "/spiegel.png",
      price: 200,
    },
    {
      name: "Wandbelagung",
      description: "Hochwertige Fliesen und Wandverkleidungen für ein elegantes Badezimmer.",
      picture: "/wandbelagung.png",
      price: 400,
    },
    {
      name: "Heizkörper",
      description: "Effiziente und stilvolle Heizkörper für wohlige Wärme.",
      picture: "/heizkoerper.png",
      price: 600,
    },
    {
      name: "Badwanne eingebaut",
      description: "Komfortable Badewannen für entspannende Momente.",
      picture: "/badewanne_eingebaut.png",
      price: 1000,
    },
    {
      name: "Dusche freistehend",
      description: "Moderne Duschen mit verschiedenen Designs und Funktionen.",
      picture: "/dusche_freistehend.png",
      price: 1200,
    },
    {
      name: "Bodenbelag",
      description: "Robuste und stilvolle Bodenbeläge für Ihr Badezimmer.",
      picture: "/bodenbelag.png",
      price: 700,
    },
    {
      name: "Accessoires",
      description: "Praktische und dekorative Accessoires für das perfekte Badezimmer.",
      picture: "/accessoires.png",
      price: 150,
    },
    {
      name: "Dusche Normal",
      description: "Standardduschen mit verschiedenen Designs und Funktionen.",
      picture: "/dusche_normal.png",
      price: 800,
    },
    {
      name: "Dusche Bodengleich",
      description: "Bodengleiche Duschen für einen modernen Look und barrierefreien Zugang.",
      picture: "/dusche_bodengleich.png",
      price: 900,
    },
    {
      name: "Dusche Bodengleich mit Glasswand",
      description: "Bodengleiche Duschen mit eleganten Glaswänden für ein offenes Raumgefühl.",
      picture: "/dusche_bodengleich_glasswand.png",
      price: 1100,
    },
    {
      name: "Standard-WC",
      description: "Klassische WC-Modelle für jeden Bedarf.",
      picture: "/standard_wc.png",
      price: 400,
    }, 
    {
      name: "Dusch-WC",
      description: "Moderne Dusch-WCs mit integrierter Reinigungsfunktion.",
      picture: "/dusch_wc.png",
      price: 900,
    }
  ]

  const bathroomStyles: BathroomStylesProps = [
    {
      name: "Modern",
      description: "Schlichte Linien und minimalistische Designs.",
      picture: "/modern.png",
      price: 1000,
    },
    {
      name: "Klassisch",
      description: "Zeitlose Eleganz mit traditionellen Elementen.",
      picture: "/classic.png",
      price: 1200,
    },
    {
      name: "Industriell",
      description: "Natürliche Materialien und warme Farben.",
      picture: "/industrial.png",
      price: 1500,
    },
    {
      name: "Skandinavisch",
      description: "Hochwertige Materialien und opulente Details.",
      picture: "/skandinavian.png",
      price: 2000,
    },
  ];

  const handleNextStep = () => {
    setStep(step + 1);
  }

  return (
    <main>
      {step === 0 && (
        <Button onClick={() => handleNextStep()}>
          Start Bathroom Questionnaire
        </Button>
      )}

      {step === 1 && (
        <div>
          <BathroomStyles styles={bathroomStyles} />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <BathroomConfiguration configuration={bathroomConfiguration} />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <BathroomProjectType
            ageData={bathroomAge}
            ProjectTypeData={bathroomProjectType}
          />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 4 && (
        <div>
          <BathroomMeasures />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 5 && (
        <div>
          <BathroomStandards standardsData={bathroomStandard} />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 6 && (
        <div>
          <BathroomEtages etagesData={bathroomEtage} />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 7 && (
        <div>
          <BathroomAttachements />
          <Button onClick={() => handleNextStep()}>Next</Button>
        </div>
      )}

      {step === 8 && (
        <div>
          <h2 className="text-3xl mb-6">Vielen Dank für Ihre Angaben!</h2>
          <p>
            Wir werden uns in Kürze mit einer detaillierten Kostenschätzung bei
            Ihnen melden.
          </p>
          <Button onClick={() => setStep(0)}> Neustarten </Button>
        </div>
      )}
    </main>
  );
}
