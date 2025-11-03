import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type QualityLevelStateType = {
    qualityLevel: { item: qualityType } | null;
    setQualityLevel: (item: qualityType) => void;
    qualityLevelCompleted: boolean;
    setQualityLevelCompleted: (completed: boolean) => void;
};

export const useQualityLevelStore = create<QualityLevelStateType>((set) => ({
    qualityLevel: null,
    setQualityLevel: (item: qualityType) => set({ qualityLevel: { item } }),
    qualityLevelCompleted: false,
    setQualityLevelCompleted: (completed) => set((state) => ({
        qualityLevelCompleted: completed && state.qualityLevel !== null,
    })),
}));