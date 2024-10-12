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
  totalPages: number
  currentPage: number
  searchValue: string

  isEmpty: boolean


  setCurrentPage: (page: number) => void
  setSearchValue: (value: string) => void
  setCategories: (category: string) => void
  getData: (categories?: string, sort?: string, search?: string, page?: number) => void
}

export const useGoods = create<useGoodsState>()(
  immer((set) => ({
    loading: false,
    goods: [],
    categories: [],
    categoryData: [],
    totalPages: 1,
    currentPage: 1,
    setCurrentPage: (page: number) => {
      set((state) => {
        state.currentPage = page
      })
    },
    searchValue: "",
    isEmpty: false,
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
    getData: async (categories?: string, sort?: string, search?: string, page?: number) => {
      set((state) => {
        state.loading = true
        state.isEmpty = false
      })

      const result = await fetch(`/api/getGoods?categories=${categories}&sort=${sort}&search=${search}&page=${page}`);
      const json = await result.json();

      if (json.data.length === 0) {
        set({ isEmpty: true })
      }

      set({
        goods: json.data,
        categoryData: json.categoryData,
        totalPages: json.totalPages,
        loading: false
      });
    },
  }))
);