import { locationType } from "@/types/content";
import { create } from "zustand";

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
    setLocationCompleted: (completed: boolean) => set({ locationCompleted: completed }),
}));