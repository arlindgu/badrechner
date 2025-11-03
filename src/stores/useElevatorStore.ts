import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type ElevatorStateType = {
    hasElevator: hasElevatorType | null;
    setHasElevator: (hasElevator: hasElevatorType) => void;
    resetHasElevator: () => void;
    hasElevatorCompleted: boolean;
    setHasElevatorCompleted: (completed: boolean) => void;
};

export const useElevatorStore = create<ElevatorStateType>((set) => ({
    hasElevator: null,
    setHasElevator: (hasElevator: hasElevatorType) => set({ hasElevator }),
    resetHasElevator: () => set({ hasElevator: null }),
    hasElevatorCompleted: false,
    setHasElevatorCompleted: (completed: boolean) => set({ hasElevatorCompleted: completed }),
}));