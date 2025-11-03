import { create } from "zustand";
import { styleType } from "@/types/content";

type StyleStateType = {
    style: styleType | null;
    setStyle: (item: styleType) => void;
    styleCompleted: boolean;
    setStyleCompleted: (completed: boolean) => void;
};

export const useStyleStore = create<StyleStateType>((set) => ({
    style: null,
    setStyle: (item) => set({ style: item }),
    styleCompleted: false,
    setStyleCompleted: (completed: boolean) => set({ styleCompleted: completed })
}));