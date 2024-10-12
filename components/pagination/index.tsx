"use client"
import { useGoods } from "@/zustand/goods";
import { useModals } from "@/zustand/modals";
import { Pagination } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

export default function Paginations() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const totalPages = useGoods(state => state.totalPages)
  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const searchValue = useGoods(state => state.searchValue);
  const getData = useGoods(state => state.getData)
  function pageChange(pages: number) {
    getData(categories, sortStatus, searchValue, Number(pages))
    router.push(`?page=${pages}`)
  }
  return (
    <div className="w-full max-[768px]:mt-[25px] flex justify-center h-[64px]">
      {totalPages >= 2 && <Pagination
        loop
        onChange={(pages) => pageChange(pages)}
        classNames={{
          cursor: "bg-black font-bold text-white",
          wrapper: "gap-[7px]"
        }}
        showControls
        size="lg"
        total={totalPages}
        page={Number(page) || 1}
        initialPage={Number(page) || 1}
      />}
    </div>
  )
}