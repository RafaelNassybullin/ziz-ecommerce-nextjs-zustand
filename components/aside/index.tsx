"use client"
import { useRouter } from 'next/navigation';
import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"
import { useEffect } from "react"
import { useSearchParams } from 'next/navigation'

export default function Aside() {
  const categoryData = useGoods(state => state.categoryData)
  const setCategories = useGoods(state => state.setCategories)
  const getData = useGoods(state => state.getData)
  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const searchValue = useGoods(state => state.searchValue);
  const router = useRouter();
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const categoryModal = useModals((state) => state.categoryModal)
  const setCategoryModal = useModals((state) => state.setCategoryModal)

  useEffect(() => {
    getData(categories, sortStatus, searchValue, Number(page))
  }, [categories, page])
  
  function filterCategoryArray(category: string) {
    setCategories(category)
    router.push(`/`)
  }

  return (
    <>
      <aside className="w-[23%] rounded-[15px] max-[1280px]:hidden shadow p-[25px] bg-white border-solid  border-[#E3E3E3] pt-[15px] h-full">
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
      {
        <>
          <aside className={`${categoryModal ? "left-0" : "left-[-100%]"} fixed top-0 z-10 max-[1280px]:block hidden max-[1280px]:rounded-none w-[73%] rounded-[15px] shadow p-[25px] bg-white border-solid  border-[#E3E3E3] pt-[15px] h-full`}>
            <div className='flex items-center justify-between w-full'>
              <p className="text-[27px] font-bold">
                Категории
              </p>
              <svg onClick={() => setCategoryModal(false)} className="cursor-pointer w-[26px] h-[26px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m254-159-94-95 225-226-225-226 94-96 226 226 226-226 94 96-225 226 225 226-94 95-226-226-226 226Z" /></svg>
            </div>
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
          {categoryModal && <div onClick={() => setCategoryModal(false)} className={` w-[100%] h-[100vh] hidden max-[1280px]:block bg-black opacity-80 fixed top-0 right-0`}></div>}
        </>
      }
    </>

  )
}