import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type DimensionsState = {
    dimensions: dimensionsType | null;
    setDimensions: (dimensions: Partial<dimensionsType>) => void;
    dimensionsCompleted: boolean;
    setDimensionsCompleted: (completed: boolean) => void;
};

export const useDimensionsStore = create<DimensionsState>((set) => ({
    dimensions: null,
    setDimensions: (dimensions) =>
        set((state) => ({
            dimensions: state.dimensions
                ? { ...state.dimensions, ...dimensions }
                : (dimensions as dimensionsType),
        })),
    dimensionsCompleted: false,
    setDimensionsCompleted: (completed) => set((state) => ({
        dimensionsCompleted: completed && state.dimensions !== null,
    })),
}));