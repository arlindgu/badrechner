import { projectType } from "@/types/content";
import { create } from "zustand";

type ProjectTypeStateType = {
    projectType: projectType | null;
    setProjectType: (item: projectType) => void;
    projectTypeCompleted: boolean;
    setProjectTypeCompleted: (completed: boolean) => void;
};

export const useProjectTypeStore = create<ProjectTypeStateType>((set) => ({
    projectType: null,
    setProjectType: (item) => set({ projectType: item }),
    projectTypeCompleted: false,
    setProjectTypeCompleted: (completed) => set((state) => ({
        projectTypeCompleted: completed && state.projectType !== null,
    })),
}));