import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface useModalsState {
  cartModal: boolean
  sortModal: boolean
  sortStatus: string

  categoryModal: boolean
  setCategoryModal: (value: boolean) => void


  setSortStatus: (status: string) => void
  setCartModal: (value: boolean) => void
  setSortModal: (value: boolean) => void
}

export const useModals = create<useModalsState>()(
  immer((set) => ({
    cartModal: false,
    
    sortModal: false,
    sortStatus: "Не сортировать",

    categoryModal: false,
    setCategoryModal: (value) => {
      set((state) => {
        state.categoryModal = value
      })
    },
    setCartModal: (value: boolean) => {
      set((state) => {
        state.cartModal = value
      })
    },

    setSortStatus: (status: string) => {
      set((state) => {
        state.sortStatus = status
      })
    },

    setSortModal: (value: boolean) => {
      set((state) => {
        state.sortModal = value
      })
    },
  }))
);