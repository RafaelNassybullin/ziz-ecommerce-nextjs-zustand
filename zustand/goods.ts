import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface Goods {
  id: number,
  name: string,
  category: string,
  price: number,
  image: string
}

interface useGoodsState {
  loading: boolean
  goods: Goods[]
  categories: any
  categoryData: []
  setCategories: (category: string) => void
  getData: (categories?: string, sort?: string, page?: string) => void
}

export const useGoods = create<useGoodsState>()(
  immer((set) => ({
    loading: false,
    goods: [],
    categories: [],
    categoryData: [],
    setCategories: (category: string) => {
      set((state) => {
        state.categories.push(category)
      })
      set((state) => {
        const count: any = {};
        for (const item of state.categories) {
          count[item] = (count[item] || 0) + 1;
        }
        state.categories = state.categories.filter((item: any) => count[item] === 1);
      })
    },
    getData: async (categories?: string, sort?: string, page?: string) => {
      set((state) => {
        state.loading = true
      })
      const result = await fetch(`/api/getGoods?categories=${categories}&sort=${sort}&page=${page}`);
      const json = await result.json();
      set({
        goods: json.data,
        categoryData: json.categoryData
        // loading: false
      });
    },

  }))
);