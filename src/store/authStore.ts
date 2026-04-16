import { create } from 'zustand';
import type { User, Location } from '../types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  activeLocation: Location | null;
  setAuth: (user: User) => void;
  logout: () => void;
  setLocation: (location: Location) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  activeLocation: null,
  setAuth: (user) => set({ isAuthenticated: true, user, activeLocation: user.activeLocation || null }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setLocation: (location) => set({ activeLocation: location })
}));
