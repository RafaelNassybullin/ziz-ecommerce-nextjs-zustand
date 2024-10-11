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
  searchValue: string
  setSearchValue: (value:string) => void
  setCategories: (category: string) => void
  getData: (categories?: string, sort?: string, search?: string) => void
}

export const useGoods = create<useGoodsState>()(
  immer((set) => ({
    loading: false,
    goods: [],
    categories: [],
    categoryData: [],
    searchValue: "",
    setSearchValue: (value: string) => {
      set((state) => {
        state.searchValue = value
      })
    },


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

    getData: async (categories?: string, sort?: string, search?: string) => {
      set((state) => {
        state.loading = true
      })
      const result = await fetch(`/api/getGoods?categories=${categories}&sort=${sort}&search=${search}`);
      const json = await result.json();
      set({
        goods: json.data,
        categoryData: json.categoryData
      });
    },

  }))
);