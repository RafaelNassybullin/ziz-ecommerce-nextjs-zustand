"use client"
import { useCart } from "@/zustand/cart"
import { useModals } from "@/zustand/modals"
import BasketCard from "../basket-card"

export default function BasketModal() {
  const cartModal = useModals(state => state.cartModal)
  const setCartModal = useModals(state => state.setCartModal)
  const goods = useCart(state => state.goods)
  const sumOfCart = useCart(state => state.sumOfCart)

  return (
    <>
      {cartModal && <>
        <div onClick={() => setCartModal(false)} className="w-[100%] h-[100vh] bg-black opacity-80 fixed top-0 right-0"></div>
        <div className="w-[33%] h-[100vh] bg-white fixed p-[25px] pt-[70px] top-0 right-0">
          <svg onClick={() => setCartModal(false)} className="absolute cursor-pointer top-[20px] left-[20px] w-[34px] h-[34px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m254-159-94-95 225-226-225-226 94-96 226 226 226-226 94 96-225 226 225 226-94 95-226-226-226 226Z" /></svg>
          <div className="flex justify-between">
            <p className="text-[27px] font-bold mb-[15px]">Корзина товаров:</p>
            <p className="text-[27px] font-bold mb-[15px]">{goods.length} шт.</p>
          </div>
          <div className="w-full h-[80%] overflow-y-auto">
            {goods.map(({ id, name, price, image }) => (
              <BasketCard
                key={id}
                id={id}
                name={name}
                price={price}
                image={image}
              />
            ))}
          </div>
          <button disabled={sumOfCart === 0} className={`w-full bg-black ${sumOfCart === 0 && "bg-gray-200 text-black hover:bg-gray-200"} text-white text-[23px] hover:bg-[#0275FF] py-[10px] mt-[15px] rounded-full font-bold `}>Оформить за {sumOfCart.toLocaleString("ru")} ₸</button>
        </div>
      </>
      }
    </>
  )
}