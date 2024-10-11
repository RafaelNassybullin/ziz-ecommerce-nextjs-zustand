import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface useModalsState {
  cartModal: boolean
  sortModal: boolean
  setCartModal: (value: boolean) => void
  setSortModal: (value: boolean) => void
}

export const useModals = create<useModalsState>()(
  immer((set) => ({
    cartModal: false,
    sortModal: false,
    setCartModal: (value: boolean) => {
      set((state) => {
        state.cartModal = value
      })
    },
    setSortModal: (value: boolean) => {
      set((state) => {
        state.sortModal = value
      })
    },
  }))
);