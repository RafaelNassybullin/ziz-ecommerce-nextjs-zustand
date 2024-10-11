"use client"
import Card from "./card";
import { useEffect } from "react";
import { useGoods } from "@/zustand/goods";
import { useModals } from "@/zustand/modals";

export default function Main() {
  const goods = useGoods(state => state.goods);
  const getData = useGoods(state => state.getData);

  const categories = useGoods(state => state.categories);
  const sortStatus = useModals((state) => state.sortStatus);
  const searchValue = useGoods(state => state.searchValue);

  useEffect(() => {
    getData(categories, sortStatus, searchValue)
  }, [searchValue])

  return (
    <main className="w-[75%] min-h-[70vh] grid grid-cols-3 gap-[15px]">
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
    </main>
  )
}