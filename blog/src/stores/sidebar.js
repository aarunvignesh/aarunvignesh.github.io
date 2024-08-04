import {createStore} from 'zustand';

export const updateSidebarState = createStore((set) => ({
  isSidebarVisible: false,
  toggleSidebar: () => set((state) => ({ isSidebarVisible: state.isSidebarVisible })),
}));

