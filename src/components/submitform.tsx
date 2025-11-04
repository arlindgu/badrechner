"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStepStore } from "@/stores/useStepStore";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStyleStore } from "@/stores/useStyleStore";
import { useEquipmentStore } from "@/stores/useEquipmentStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";
import DimensionsStep from "./steps/05-dimensionsstep";
import { useDimensionsStore } from "@/stores/useDimensionsStore";
import { useQualityLevelStore } from "@/stores/useQualityLevelStore";
import { useLocationStore } from "@/stores/useLocationStore";
import { useElevatorStore } from "@/stores/useElevatorStore";


const formSchema = z.object({
    firstName: z.string().nonempty("Vorname darf nicht leer sein"),
    lastName: z.string().nonempty("Nachname darf nicht leer sein"),
    mail: z.email("Ungültige E-Mail Adresse"),
    phone: z.string().nonempty("Telefonnummer darf nicht leer sein"),
    address: z.string().nonempty("Adresse darf nicht leer sein"),
    zip: z.string().nonempty("PLZ darf nicht leer sein"),
    city: z.string().nonempty("Stadt darf nicht leer sein"),
    country: z.string().nonempty("Land darf nicht leer sein"),
    comment: z.string(),
});

export function SubmitForm() {

  const styleCompleted = useStyleStore((state) => state.styleCompleted);
  const equipmentCompleted = useEquipmentStore((state) => state.equipmentCompleted);
  const projectTypeCompleted = useProjectTypeStore((state) => state.projectTypeCompleted);
  const bathroomAgeCompleted = useBathroomAgeStore((state) => state.bathroomAgeCompleted);
  const dimensionsCompleted = useDimensionsStore((state) => state.dimensionsCompleted);
  const qualityLevelCompleted = useQualityLevelStore((state) => state.qualityLevelCompleted);
  const locationCompleted = useLocationStore((state) => state.locationCompleted);
  const elevatorCompleted = useElevatorStore((state) => state.hasElevatorCompleted);

  function activateButton() {
    return styleCompleted && equipmentCompleted && projectTypeCompleted && bathroomAgeCompleted && dimensionsCompleted && qualityLevelCompleted && locationCompleted && elevatorCompleted;
  }
  
  function handleTestClick() {
    console.log("Style Completed:", styleCompleted);
    console.log("Equipment Completed:", equipmentCompleted);
    console.log("Project Type Completed:", projectTypeCompleted);
    console.log("Bathroom Age Completed:", bathroomAgeCompleted);
    console.log("Dimensions Completed:", dimensionsCompleted);
    console.log("Quality Level Completed:", qualityLevelCompleted);
    console.log("Location Completed:", locationCompleted);
    console.log("Elevator Completed:", elevatorCompleted);
  }


  const decrementStep = useStepStore((state) => state.decrementStep);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mail: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      comment: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-3xl mx-auto bg-card border rounded-lg p-6"
      >
        <div className="flex flex-row gap-4 justify-around">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Vorname</FormLabel>
                <FormControl>
                  <Input placeholder="Vorname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nachname</FormLabel>
                <FormControl>
                  <Input placeholder="Nachname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="E-Mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonnummer</FormLabel>
              <FormControl>
                <Input placeholder="Telefonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Adresse" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-4 justify-around">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>PLZ</FormLabel>
                <FormControl>
                  <Input placeholder="PLZ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Stadt</FormLabel>
                <FormControl>
                  <Input placeholder="Stadt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Land</FormLabel>
              <FormControl>
                <Input placeholder="Land" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bemerkungen</FormLabel>
              <FormControl>
                <Textarea placeholder="Bemerkungen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4">
          <Button variant="secondary" onClick={decrementStep}>Zurück</Button>
          <Button disabled={!activateButton()} type="submit">Submit</Button>
          
        </div>
      </form>
    </Form>
  );
}
