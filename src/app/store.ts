import { create } from 'zustand';

// type Comment = {
//   name: string; comment: string
// }

type Store = {
  isJoinFormOpen: boolean;
  toggleJoinFormOpen: (value: boolean) => void;
  menuStatus: 'open' | 'close';
  changeMenuStatus: (status: 'open' | 'close') => void;
  waitingFormDone: boolean;
  setWaitingFormDone: (value: boolean) => void;
  // comments: {
  //   artistId: string;
  //   comments: Comment[]
  // }[];
  // addComment: (comment: Comment) => void;
};

export const useStore = create<Store>((set) => ({
  isJoinFormOpen: false,
  toggleJoinFormOpen: (value) => set({ isJoinFormOpen: value }),
  menuStatus: 'close',
  changeMenuStatus: (status) => set({ menuStatus: status }),
  waitingFormDone: false,
  setWaitingFormDone: (value) => set({ waitingFormDone: value }),
}));
