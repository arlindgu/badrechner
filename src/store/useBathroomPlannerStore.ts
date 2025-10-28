import { basicType } from "@/types/content";
import { create } from "zustand";

type BathroomPlannerState = {
    step: number;
    incrementStep: () => void;
    decrementStep: () => void;

    style: basicType | null;
    setStyle: (item: basicType) => void;

    equipment: {} | null;
    setEquipment: () => void;

    projectType: {} | null;
    setProjectType: () => void;

    bathroomAge: {} | null;
    setBathroomAge: () => void;

    dimensions: {width: number; length: number; height: number } | null;
    setDimensions: () => void;

    qualityLevel: {} | null;
    setQualityLevel: () => void;

    location: {} | null;
    setLocation: () => void;

    hasElevator: boolean | null;
    setHasElevator: () => void;

    attachments: File[] | null;
    setAttachments: () => void;
};

export const useBathroomPlannerStore = create<BathroomPlannerState>((set) => ({
    step: 0,
    incrementStep: () => set((state) => ({ step: state.step + 1 })),
    decrementStep: () => set((state) => ({ step: state.step - 1 })),

    style: null,
    setStyle: (item: basicType) => set({ style: item }),

    equipment: null,
    setEquipment: () => set({ equipment: {} }),

    projectType: null,
    setProjectType: () => set({ projectType: {} }),

    bathroomAge: null,
    setBathroomAge: () => set({ bathroomAge: {} }),

    dimensions: null,
    setDimensions: () => set({ dimensions: null }),

    qualityLevel: null,
    setQualityLevel: () => set({ qualityLevel: {} }),

    location: null,
    setLocation: () => set({ location: {} }),

    hasElevator: null,
    setHasElevator: () => set({ hasElevator: null }),

    attachments: null,
    setAttachments: () => set({ attachments: null }),
}));

