import { create } from 'zustand';

type Store = {
  menuStatus: 'open' | "close";
  changeMenuStatus: (status: 'open' | 'close') => void
}

export const useStore = create<Store>(set => ({
  menuStatus: 'close',
  changeMenuStatus: status => set({menuStatus: status}),
}))