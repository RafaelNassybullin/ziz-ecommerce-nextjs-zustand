"use client"
import Card from "./card";
import { useEffect } from "react";
import { useGoods } from "@/zustand/goods";

export default function Main() {
  const goods = useGoods(state => state.goods)
  const getData = useGoods(state => state.getData)

  useEffect(() => {
    getData()
  }, [])

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