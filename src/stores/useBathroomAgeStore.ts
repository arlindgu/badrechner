import { ageType } from "@/types/content";
import { create } from "zustand";

type bathroomAgeState = {
    bathroomAge: ageType | null;
    setBathroomAge: (item: ageType) => void;
    resetBathroomAge: () => void;
    bathroomAgeCompleted: boolean;
    setBathroomAgeCompleted: (completed: boolean) => void;
};

export const useBathroomAgeStore = create<bathroomAgeState>((set) => ({
    bathroomAge: null,
    setBathroomAge: (item) => set({ bathroomAge: item }),
    resetBathroomAge: () => set({ bathroomAge: null }),
    bathroomAgeCompleted: false,
    setBathroomAgeCompleted: (completed) => set({ bathroomAgeCompleted: completed }),
}));