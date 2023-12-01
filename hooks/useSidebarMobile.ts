import { create } from "zustand";

type SidebarMobileStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSidebarMobile = create<SidebarMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
