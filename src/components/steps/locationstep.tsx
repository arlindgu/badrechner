import { hasElevatorType, locationType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useLocationStore } from "@/stores/useLocationStore";
import { useElevatorStore } from "@/stores/useElevatorStore";

const locationContent: locationType[] = [
    {
        needsElevator: true,
        name: "UG",
        priceFactor: 1,
    },
    {
        needsElevator: false,
        name: "EG",
        priceFactor: 1.0,
    },
    {
        needsElevator: true,
        name: "1. OG",
        priceFactor: 1.1,
    },
    {
        needsElevator: true,
        name: "2. OG",
        priceFactor: 1.2,
    },
    {
        needsElevator: true,
        name: "+3. OG",
        priceFactor: 1.3,
    },
    {
        needsElevator: true,
        name: "DG",
        priceFactor: 1.4,
    }
];

const hasElevatorContent: hasElevatorType[] = [
    {
        name: "Kein Aufzug",
        hasElevator: null,
    },
    {
        name: "Mit Aufzug",
        hasElevator: true
    },
];




export default function LocationStep() {
    const location = useLocationStore((state) => state.location);
    const setLocation = useLocationStore((state) => state.setLocation);

    const hasElevator = useElevatorStore((state) => state.hasElevator);
    const setHasElevator = useElevatorStore((state) => state.setHasElevator);
    const resetHasElevator = useElevatorStore(
      (state) => state.resetHasElevator
    );

  function handleClick(item: locationType) {
    if (item.needsElevator === false) {
        resetHasElevator();
    }
    setLocation(item);
  }

  function handleClickHasElevator(item: hasElevatorType) {
    setHasElevator(item);
  }

 return (
   <section className="my-12">
     <div className="px-4 container mx-auto">
       <h2 className="text-2xl col-span-full font-bold mb-6">
         Wo befindet sich das Bad?
       </h2>
       <div className="flex flex-wrap gap-6 justify-center">
         {locationContent.map((item) => (
           <Card
             key={item.name}
             onClick={() => handleClick(item)}
             className={clsx(
               "transition-all max-w-xs w-full",
               location?.item.name === item.name && "outline-blue-400 outline-3"
             )}
           >
             <CardHeader>
               <CardTitle>{item.name}</CardTitle>
             </CardHeader>
             <CardContent >
               <p>Bild</p>
             </CardContent>
           </Card>
         ))}
         <pre className="w-full border-2 p-4">
           {JSON.stringify({ location }, null, 2)}
         </pre>
       </div>
       <h2 className="text-2xl col-span-full font-bold mb-6">
          Gibt es einen Aufzug im Gebäude?
       </h2>
       {location?.item.needsElevator && (
         <div className="flex flex-wrap gap-6 justify-center">
           {hasElevatorContent.map((item) => (
             <Card
               key={String(item.hasElevator)}
               onClick={() => handleClickHasElevator(item)}
               className={clsx(
                 "transition-all max-w-xs w-full",
                 hasElevator?.hasElevator === item.hasElevator && "outline-blue-400 outline-3"
               )}
             >
               <CardHeader>
                 <CardTitle>{item.name}</CardTitle>
               </CardHeader>
               <CardContent >
                 <p>Bild</p>
               </CardContent>
             </Card>
           ))}
           <pre className="w-full border-2 p-4">
             {JSON.stringify({ hasElevator }, null, 2)}
           </pre>
         </div>
       )}
     </div>
   </section>
 );
 }