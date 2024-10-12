import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Goods } from "./goods";

interface Cart {
  goods: Goods[];
  category: [];
  sumOfCart: number;

  addToCart: (good: Goods) => void;
  deleteFromCart: (id: number) => void;
}

export const useCart = create<Cart>()(
  persist(
    immer((set) => ({
      goods: [],
      category: [],
      sumOfCart: 0,

      addToCart: (good: Goods) => {
        set((state) => {
          if (state.goods.some((item) => item.id === good.id)) {
            state.goods = state.goods.filter(item => item.id !== good.id);
            state.goods.unshift(good);
            state.sumOfCart = state.goods.reduce((accumulator, item) => accumulator + item.price, 0)
          } else {
            state.goods.unshift(good)
            state.sumOfCart = state.goods.reduce((accumulator, item) => accumulator + item.price, 0)
          }
        })
      },

      deleteFromCart: (id: number) => {
        set((state) => {
          state.goods = state.goods.filter((goodItem) => goodItem.id !== id)
          state.sumOfCart = state.goods.reduce((accumulator, item) => accumulator + item.price, 0)
        })
      },
    })),
    { name: "cart", version: 1 }
  )
);
