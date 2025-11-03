import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type LocationStateType = {
    location: { item: locationType } | null;
    setLocation: (item: locationType) => void;
    locationCompleted: boolean;
    setLocationCompleted: (completed: boolean) => void;
};

export const useLocationStore = create<LocationStateType>((set) => ({
    location: null,
    setLocation: (item: locationType) => set({ location: { item } }),
    locationCompleted: false,
    setLocationCompleted: (completed) => set((state) => ({
        locationCompleted: completed && state.location !== null,
    })),
}));