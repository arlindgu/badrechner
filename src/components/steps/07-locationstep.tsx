import { locationType } from "@/types/content";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { clsx } from "clsx";
import { useLocationStore } from "@/stores/useLocationStore";
import { useElevatorStore } from "@/stores/useElevatorStore";
import ButtonNavigator from "../navigator";
import { useEffect } from "react";
import { locationOptions } from "@/content/location";




export default function LocationStep() {
  const locationContent = locationOptions;
  const setHasElevatorCompleted = useElevatorStore(
    (state) => state.setHasElevatorCompleted
  );
    const location = useLocationStore((state) => state.location);
    const setLocation = useLocationStore((state) => state.setLocation);
    const setLocationCompleted = useLocationStore((state) => state.setLocationCompleted);
    const locationStepCompleted = useLocationStore(
      (state) => state.locationCompleted
    );

    const resetHasElevator = useElevatorStore(
      (state) => state.resetHasElevator
    );

  function handleClick(item: locationType) {
    setLocation(item);
  }

    useEffect(() => {
      if (location?.item.needsElevator === false) {
        setLocationCompleted(true);
        resetHasElevator();
        setHasElevatorCompleted(true);
      } else if (location?.item.needsElevator === true) {
        setLocationCompleted(true);
      }
    }, [location, setLocationCompleted]);

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
             <CardContent>
               <p>Bild</p>
             </CardContent>
           </Card>
         ))}
       </div>
       <ButtonNavigator isStepComplete={locationStepCompleted} />
     </div>
   </section>
 );
 }