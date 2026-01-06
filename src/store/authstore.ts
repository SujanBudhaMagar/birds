import { create } from "zustand";

interface AuthStore {
  role: string | null;
  setRole: (role: string) => void;
  clearRole: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
  clearRole: () => set({ role: null }),
}));
