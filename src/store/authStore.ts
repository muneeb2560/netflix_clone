import { create } from 'zustand';

type User = { id: string; name: string; email: string; image?: string } | null;

export const useAuthStore = create((set) => ({
    user: null as User,
    loading: false,
    login: (u: User) => set({ user: u }),
    logout: () => set({ user: null }),
}));
