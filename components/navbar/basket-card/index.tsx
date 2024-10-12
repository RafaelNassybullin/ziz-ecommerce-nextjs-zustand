"use client"
import { useCart } from "@/zustand/cart"

export default function BasketCard({ id, name, price, image }: any) {
  const deleteFromCart = useCart(state => state.deleteFromCart)

  function deleteFromBasket(id: number) {
    deleteFromCart(id)
  }

  return (
    <div key={id} className="w-full cursor-pointer mb-[25px] flex justify-between items-center h-[90px]  select-none">
      <div className="w-[80%] flex h-full">
        <div className="w-[35%] h-full">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
        <div className="w-[90%] flex flex-col justify-between pl-[10px]">
          <p className="text-[18px] cut-text">{name}</p>
          <p className="text-[16px] font-bold ">Цена: {price.toLocaleString("ru")} ₸</p>
        </div>
      </div>
      <div onClick={() => deleteFromBasket(id)} className="w-[37px] h-[37px] hover:bg-gray-100 cursor-pointer grid place-items-center rounded-full">
        <svg className="w-[24px] h-[24px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  ><path d="M267-74q-57 0-96.5-39.5T131-210v-501H68v-136h268v-66h287v66h269v136h-63v501q0 57.12-39.44 96.56Q750.13-74 693-74H267Zm426-637H267v501h426v-501ZM334-279h113v-363H334v363Zm180 0h113v-363H514v363ZM267-711v501-501Z" /></svg>
      </div>
    </div>
  )
}

