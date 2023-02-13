import { create } from 'zustand';

const useModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export const useToolbarStore = create((set) => ({
  isToolbarOpen: false,
  openToolbar: () => set({ isToolbarOpen: true }),
  closeToolbar: () => set({ isToolbarOpen: false }),
}));

export const useCollapsed = create((set) => ({
  isCollapsed: false,
  openCollapsed: () => set({ isCollapsed: true }),
  closeCollapsed: () => set({ isCollapsed: false }),
}));

export const useInputValue = create((set) => ({
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
}));

export default useModalStore;
