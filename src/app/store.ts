import { create } from 'zustand';
import type {Comment} from '../types/Comment.ts'

type Store = {
  isJoinFormOpen: boolean;
  toggleJoinFormOpen: (value: boolean) => void;
  menuStatus: 'open' | 'close';
  changeMenuStatus: (status: 'open' | 'close') => void;
  waitingFormDone: boolean;
  setWaitingFormDone: (value: boolean) => void;
  comments: Comment[];
  setInitialComments: (value: Comment[]) => void;
  addComment: (value: Comment) => void;
};

export const useStore = create<Store>((set) => ({
  isJoinFormOpen: false,
  toggleJoinFormOpen: (value) => set({ isJoinFormOpen: value }),
  menuStatus: 'close',
  changeMenuStatus: (status) => set({ menuStatus: status }),
  waitingFormDone: false,
  setWaitingFormDone: (value) => set({ waitingFormDone: value }),
  comments: [],
  setInitialComments: (initialComments: Comment[]) => set({ comments: initialComments }),
  addComment: (value) => set((state) => ({ comments: [value,...state.comments] })),
}));
