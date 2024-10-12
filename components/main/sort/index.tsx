"use client"
import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"
import { useSearchParams } from 'next/navigation'
export default function Sort() {
  const setSortModal = useModals((state) => state.setSortModal)
  const setCategoryModal = useModals((state) => state.setCategoryModal)
  const sortModal = useModals((state) => state.sortModal)
  const sortStatus = useModals((state) => state.sortStatus)
  const setSortStatus = useModals((state) => state.setSortStatus)
  const getData = useGoods(state => state.getData)
  const categories = useGoods(state => state.categories)
  const searchValue = useGoods(state => state.searchValue);

  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const sortingArray = ["Не сортировать", "По возрастанию", "По убыванию"]

  function openModal() {
    setSortModal(true)
  }

  function closeModal() {
    setSortModal(false)
  }

  function sortResponce(status: string) {
    setSortStatus(status)
    getData(categories, status, searchValue, Number(page))
  }

  return (
    <>
      <div className="container w-full justify-end h-[64px] mx-auto flex max-[1280px]:justify-between  items-center max-[515px]:px-[20px] max-[768px]:px-[55px]">
        <div onClick={() => setCategoryModal(true)} className="hidden max-[1280px]:block">
          <svg className="w-[30px] cursor-pointer h-[30px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M74-159v-135h304v135H74Zm0-255v-134h558v134H74Zm0-254v-135h812v135H74Z" /></svg>
        </div>
        <div className="flex items-center">
          <p className="mr-[15px] max-[450px]:hidden">По цене:</p>
          <div onClick={openModal} className="w-[250px] max-[450px]:text-[12px] max-[450px]:w-[180px] h-[44px] px-[20px] cursor-pointer font-bold flex justify-between items-center rounded-[10px] shadow">
            <p>{sortStatus}</p>
            <svg className="fill-black  w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M286-436v-230l-76 76-96-95 240-241 240 241-96 95-76-76v230H286ZM606-34 366-275l96-95 76 76v-230h136v230l76-76 96 95L606-34Z" /></svg>
          </div>
        </div>
        {sortModal && <div onClick={closeModal} className="w-[100%] h-[100vh]  bg-[#000000CC] fixed top-0 right-0">
          <div className="w-full h-full container max-[768px]:px-[55px] max-[515px]:px-[20px] mx-auto flex justify-end">
            <div className="w-[250px] rounded-[10px] p-[7px] cursor-pointer mt-[130px] bg-white h-[174px]">
              {
                sortingArray.map((status) => (
                  <div onClick={() => sortResponce(status)} className="w-full h-[50px] mb-[5px] shadow font-bold flex items-center justify-start rounded-[7px]">
                    <p className="px-[15px]">{status}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}