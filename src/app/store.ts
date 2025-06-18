import { create } from 'zustand';

type Store = {
  isJoinFormOpen: boolean;
  toggleJoinFormOpen: (value: boolean) => void;
  menuStatus: 'open' | 'close';
  changeMenuStatus: (status: 'open' | 'close') => void;
};

export const useStore = create<Store>((set) => ({
  isJoinFormOpen: false,
  toggleJoinFormOpen: (value) => set({ isJoinFormOpen: value }),
  menuStatus: 'close',
  changeMenuStatus: (status) => set({ menuStatus: status }),
}));
