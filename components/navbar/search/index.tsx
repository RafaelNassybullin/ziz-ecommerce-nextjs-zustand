"use client"
import { useGoods } from "@/zustand/goods"
import { useModals } from "@/zustand/modals"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function Search() {
  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const getData = useGoods(state => state.getData);
  const searchValue = useGoods(state => state.searchValue);
  const setSearchValue = useGoods(state => state.setSearchValue);
  
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const router = useRouter();

  function onChange(e: any) {
    router.push(`/`)
    setSearchValue(e.target.value)
    getData(categories, sortStatus, searchValue, Number(page));
  }

  return (
    <div className="w-[70%] text-black max-[768px]:w-[55%] relative h-[60%] border-[#E3E3E3] border-[1px] border-solid rounded-full overflow-hidden">
      <svg className="absolute w-[27px] h-[27px] top-[5px] left-[11px] fill-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-ppui="true"><path fillRule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clipRule="evenodd" data-ppui="true"></path></svg>
      <input type="text" onChange={onChange} value={searchValue} placeholder="Введите для поиска товаров в магазине..." className="w-full h-full bg-white outline-none pl-[48px] pr-[10px]" />
    </div>
  )
}