"use client"

import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"
import { useEffect } from "react"

export default function Aside() {

  const categoryData = useGoods(state => state.categoryData)
  const setCategories = useGoods(state => state.setCategories)
  const getData = useGoods(state => state.getData)


  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const searchValue = useGoods(state => state.searchValue);

  
  useEffect(() => {
    getData(categories, sortStatus, searchValue)
  }, [categories])

  function filterCategoryArray(category: string) {
    setCategories(category)
  }

  return (
    <aside className="w-[23%] rounded-[15px] shadow p-[25px]  bg-white border-solid border-[#E3E3E3] pt-[15px] h-full">
      <p className="text-[27px] font-bold">
        Категории
      </p>
      <div className="flex flex-col mt-[15px]">
        {
          categoryData.map((item) => (
            <label key={item} className="flex cursor-pointer select-none mt-[5px] items-center">
              <input onChange={(e) => filterCategoryArray(e.target.value)} value={item} className="cursor-pointer w-[17px] h-[17px]" type="checkbox" name="checkbox" />
              <p className="ml-[7px]">{item}</p>
            </label>
          ))
        }
      </div>
    </aside>
  )
}