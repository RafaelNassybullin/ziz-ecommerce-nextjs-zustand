"use client"
import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"

export default function Sort() {
  const setSortModal = useModals((state) => state.setSortModal)
  const sortModal = useModals((state) => state.sortModal)
  const sortStatus = useModals((state) => state.sortStatus)
  const setSortStatus = useModals((state) => state.setSortStatus)
  const getData = useGoods(state => state.getData)
  const categories = useGoods(state => state.categories)

  const sortingArray = ["Не сортировать", "По возрастанию", "По убыванию"]

  function openModal() {
    setSortModal(true)
  }

  function closeModal() {
    setSortModal(false)
  }

  function sortResponce(status: string) {
    setSortStatus(status)
    getData(categories, status)
  }

  return (
    <>
      <div className="container w-full h-[64px] mx-auto flex justify-end items-center">
        <p className="mr-[15px]">По цене:</p>
        <div onClick={openModal} className="w-[250px] h-[44px] px-[20px] cursor-pointer font-bold flex justify-between items-center rounded-[10px] shadow">
          <p>{sortStatus}</p>
          <svg className="fill-black w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M286-436v-230l-76 76-96-95 240-241 240 241-96 95-76-76v230H286ZM606-34 366-275l96-95 76 76v-230h136v230l76-76 96 95L606-34Z" /></svg>
        </div>
        {sortModal && <div onClick={closeModal} className="w-[100%] h-[100vh] bg-[#000000CC] fixed top-0 right-0">
          <div className="w-full h-full container mx-auto flex justify-end">
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