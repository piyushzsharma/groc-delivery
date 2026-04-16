import { create } from 'zustand';

interface AppState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  favoriteIds: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useAppStore = create<AppState>((set, get) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  favoriteIds: [],
  toggleFavorite: (productId) => set((state) => ({
    favoriteIds: state.favoriteIds.includes(productId)
      ? state.favoriteIds.filter(id => id !== productId)
      : [...state.favoriteIds, productId]
  })),
  isFavorite: (productId) => get().favoriteIds.includes(productId)
}));
