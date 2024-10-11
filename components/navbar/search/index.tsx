"use client"
import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"

export default function Search() {
  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const getData = useGoods(state => state.getData);
  const searchValue = useGoods(state => state.searchValue);
  const setSearchValue = useGoods(state => state.setSearchValue);

  function onChange(e: any) {
    setSearchValue(e.target.value)
    getData(categories, sortStatus, searchValue);
  }

  return (
    <div className="w-[70%] relative h-[60%] border-[#E3E3E3] border-[1px] border-solid rounded-full overflow-hidden">
      <svg className="absolute w-[27px] h-[27px] top-[5px] left-[11px] fill-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-ppui="true"><path fillRule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clipRule="evenodd" data-ppui="true"></path></svg>
      <input type="text" onChange={onChange} value={searchValue} placeholder="Введите для поиска товаров в магазине..." className="w-full h-full bg-white outline-none px-[48px]" />
      <div className="absolute top-[3px] right-[4px] cursor-pointer bg-gray-200 grid place-items-center w-[30px] rounded-full h-[30px] ">
        <svg className="fill-black w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" data-ppui="true"><path fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.111 9.171L10.94 12l-2.83 2.829a.75.75 0 0 0 1.06 1.06L12 13.061l2.828 2.828a.75.75 0 0 0 1.06-1.06L13.061 12l2.828-2.828a.75.75 0 1 0-1.06-1.061L12 10.939 9.172 8.111a.75.75 0 0 0-1.06 1.06z" clipRule="evenodd" data-ppui="true"></path></svg>
      </div>
    </div>
  )
}