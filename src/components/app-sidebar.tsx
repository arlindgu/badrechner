"use client";

import { Calendar, Check, Home, Inbox, Search, Settings } from "lucide-react";
import { GFLogo } from "./svg/gflogo";
import { useBathroomAgeStore } from "@/stores/useBathroomAgeStore";
import { useEquipmentStore } from "@/stores/useEquipmentStore";
import { useStyleStore } from "@/stores/useStyleStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useElevatorStore } from "@/stores/useElevatorStore";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useStepStore } from "@/stores/useStepStore";
import { useDimensionsStore } from "@/stores/useDimensionsStore";
import { useQualityLevelStore } from "@/stores/useQualityLevelStore";
import { useLocationStore } from "@/stores/useLocationStore";

export function AppSidebar() {
  const styleCompleted = useStyleStore((state) => state.styleCompleted);
  const equipmentCompleted = useEquipmentStore(
    (state) => state.equipmentCompleted
  );
  const projectTypeCompleted = useProjectTypeStore(
    (state) => state.projectTypeCompleted
  );
  const dimensionsCompleted = useDimensionsStore(
    (state) => state.dimensionsCompleted
  );
  const qualityLevelCompleted = useQualityLevelStore(
    (state) => state.qualityLevelCompleted
  );
  const locationCompleted = useLocationStore(
    (state) => state.locationCompleted
  );
  const bathroomAgeCompleted = useBathroomAgeStore(
    (state) => state.bathroomAgeCompleted
  );
  const hasElevatorCompleted = useElevatorStore(
    (state) => state.hasElevatorCompleted
  );

  const step = useStepStore((state) => state.step);
  const setStep = useStepStore((state) => state.setStep);
  const projectType = useProjectTypeStore((state) => state.projectType);

  const items = [
    {
      title: "Stil",
      step: 1,
      icon: Home,
      completed: styleCompleted,
    },
    {
      title: "Ausstattung",
      step: 2,
      icon: Inbox,
      completed: equipmentCompleted,
    },
    {
      title: "Projekt Typ",
      step: 3,
      icon: Calendar,
      completed: projectTypeCompleted,
    },
    {
      title: "Badezimmer Maße",
      step: 4,
      icon: Settings,
      completed: dimensionsCompleted,
    },
    {
      title: "Qualität",
      step: 5,
      icon: Search,
      completed: qualityLevelCompleted,
    },
    {
      title: "Standort",
      step: 6,
      icon: Home,
      completed: locationCompleted && hasElevatorCompleted,
    },
    {
      title: "Kontaktdaten",
      step: 7,
      icon: Settings,
      completed: false,
    },
    {
      title: "Dev - Alle Daten",
      step: 9,
      icon: Inbox,
      completed: false,
    },
  ];



function handleClick(step: number) {
  setStep(step);
}

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <GFLogo className="w-24" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Baderechner</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => handleClick(item.step)}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.completed && <Check />}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
