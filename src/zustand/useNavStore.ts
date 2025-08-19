import { NavItems } from "@/features/navbar/navItems";
import { create } from "zustand";

interface NavStore {
  currentNav: NavItems;
  seCurrentNav: (nav: NavItems) => void;
}

const initNavStore = {
  currentNav: NavItems.Home,
};

export const useNavStore = create<NavStore>()((set) => ({
  ...initNavStore,
  seCurrentNav: (nav) => set(() => ({ currentNav: nav })),
}));
