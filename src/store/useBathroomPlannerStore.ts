import { ageType, equipmentType, hasElevatorType, locationType, projectType, qualityType, styleType } from "@/types/content";
import { create } from "zustand";
import { dimensionsType } from "@/types/content";

type BathroomPlannerState = {
    step: number;
    incrementStep: () => void;
    decrementStep: () => void;

    style: styleType | null;
    setStyle: (item: styleType) => void;

    equipment: equipmentType[]; // Array, kein Objekt und kein null
    addEquipment: (item: equipmentType) => void;
    removeEquipment: (item: equipmentType) => void;
    clearEquipment: () => void;

    projectType: projectType | null;
    setProjectType: (item: projectType) => void;

    bathroomAge: ageType | null;
    setBathroomAge: (item: ageType) => void;
    resetBathroomAge: () => void;

    dimensions: dimensionsType | null;
    setDimensions: (dimensions: Partial<dimensionsType>) => void;

    qualityLevel: { item: qualityType } | null;
    setQualityLevel: (item: qualityType) => void;

    location: { item: locationType } | null;
    setLocation: (item: locationType) => void;

    hasElevator: hasElevatorType | null;
    setHasElevator: (hasElevator: hasElevatorType) => void;
    resetHasElevator: () => void;

    attachments: File[]; // direkt Array, kein null, macht das Leben leichter
    setAttachments: (files: File[]) => void;
    addAttachment: (file: File) => void;
    removeAttachment: (fileName: string) => void;
    clearAttachments: () => void;
};

export const useBathroomPlannerStore = create<BathroomPlannerState>((set) => ({
    step: 0,
    incrementStep: () => set((state) => ({ step: state.step + 1 })),
    decrementStep: () => set((state) => ({ step: state.step - 1 })),

    style: null,
    setStyle: (item) => set({ style: item }),

    equipment: [] as equipmentType[],
    addEquipment: (item) =>
        set((state) => ({
            equipment: [...state.equipment, item],
        })),
    removeEquipment: (item) =>
        set((state) => ({
            equipment: state.equipment.filter((eq) => eq.name !== item.name),
        })),
    clearEquipment: () => set({ equipment: [] }),

    projectType: null,
    setProjectType: (item) => set({ projectType: item }),

    bathroomAge: null,
    setBathroomAge: (item) => set({ bathroomAge: item }),
    resetBathroomAge: () => set({ bathroomAge: null }),

    dimensions: null,
    setDimensions: (dimensions) =>
        set((state) => ({
            dimensions: { ...state.dimensions, ...dimensions },
        })),

    qualityLevel: null,
    setQualityLevel: (item: qualityType) => set({ qualityLevel: { item } }),

    location: null,
    setLocation: (item: locationType) => set({ location: { item } }),

    hasElevator: null,
    setHasElevator: (hasElevator: hasElevatorType) => set({ hasElevator }),
    resetHasElevator: () => set({ hasElevator: null }),

    attachments: [],
    setAttachments: (files) => set({ attachments: files }),
    addAttachment: (file) =>
        set((state) => ({ attachments: [...state.attachments, file] })),
    removeAttachment: (fileName) =>
        set((state) => ({
            attachments: state.attachments.filter((f) => f.name !== fileName),
        })),
    clearAttachments: () => set({ attachments: [] }),
}));

