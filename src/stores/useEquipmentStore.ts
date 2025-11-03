import { create } from "zustand";
import { equipmentType } from "@/types/content";

type EquipmentStateType = {
        equipment: equipmentType[];
        addEquipment: (item: equipmentType) => void;
        removeEquipment: (item: equipmentType) => void;
        clearEquipment: () => void;
        resetVariants: () => void;
        equipmentCompleted: boolean;
        setEquipmentCompleted: (completed: boolean) => void;
};

export const useEquipmentStore = create<EquipmentStateType>((set) => ({
equipment: [] as equipmentType[],
    addEquipment: (item: equipmentType) =>
        set((state) => {
            const exists = state.equipment.find((eq) => eq.name === item.name);

            // Wenn bereits drin → nur updaten (z. B. selectedVariant oder Preis)
            if (exists) {
                return {
                    equipment: state.equipment.map((eq) =>
                        eq.name === item.name ? { ...eq, ...item } : eq
                    ),
                };
            }

            // Neu hinzufügen
            return { equipment: [...state.equipment, item] };
        }),
    removeEquipment: (item) =>
        set((state) => ({
            equipment: state.equipment.filter((eq) => eq.name !== item.name),
        })),
    clearEquipment: () => set({ equipment: [] }),
    resetVariants: () =>
        set((state) => ({
            equipment: state.equipment.map((eq) => ({
                ...eq,
                selectedVariant: null,
            })),
        })),
    equipmentCompleted: false,
    setEquipmentCompleted: (completed) => set(() => ({
        equipmentCompleted: completed,
    })),
}));