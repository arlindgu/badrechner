import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type StepStateType = {
    step: number;
    incrementStep: () => void;
    decrementStep: () => void;
    setStep: (step: number) => void;
};

export const useStepStore = create<StepStateType>((set) => ({
    step: 0,
    incrementStep: () => set((state) => ({ step: state.step + 1 })),
    decrementStep: () => set((state) => ({ step: state.step - 1 })),
    setStep: (step) => set({ step }),
}));