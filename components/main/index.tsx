"use client"
import Card from "./card";
import { useEffect } from "react";
import { useGoods } from "@/zustand/goods";
import { useModals } from "@/zustand/modals";
import { useSearchParams } from 'next/navigation'
import { div, p } from "framer-motion/client";
export default function Main() {
  const goods = useGoods(state => state.goods);
  const getData = useGoods(state => state.getData);

  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const searchValue = useGoods(state => state.searchValue);
  const isEmpty = useGoods(state => state.isEmpty);

  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  useEffect(() => {
    getData(categories, sortStatus, searchValue, Number(page))
  }, [searchValue])

  return (
    <main className={`w-[75%] max-[1280px]:w-[100%] max-[360px]:px-[10px] max-[768px]:px-[55px] max-[515px]:px-[20px] max-[768px]:min-h-[50vh] min-h-[70vh] max-[1024px]:grid-cols-2 grid grid-cols-3 max-[768px]:gap-[10px] gap-[15px]`}>
      <>
        {
          goods.map(({ id, name, category, price, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              category={category}
              price={price}
              image={image}
            />))
        }
      </>
      {isEmpty && goods.length === 0 &&
        <div className="w-full h-full">
          <p className="text-[20px] font-bold">Ничего не найдено...</p>
        </div>
      }
    </main>
  )
}