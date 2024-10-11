"use client"
import { useCart } from "@/zustand/cart"
import { useModals } from "@/zustand/modals"

export default function BasketModal() {
  const cartModal = useModals(state => state.cartModal)
  const setCartModal = useModals(state => state.setCartModal)
  const goods = useCart(state => state.goods)
  const sumOfCart = useCart(state => state.sumOfCart)
  const deleteFromCart = useCart(state => state.deleteFromCart)

  function deleteFromBasket(id: number) {
    deleteFromCart(id)
  }

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
              <div key={id} className="w-full cursor-pointer mb-[25px] flex justify-between items-center h-[90px]  select-none">
                <div className="w-[80%] flex h-full">
                  <div className="w-[35%] h-full">
                    <img className="w-full h-full object-contain" src={image} alt="" />
                  </div>
                  <div className="w-[65%] flex flex-col justify-between pl-[10px]">
                    <p className="text-[18px] cut-text">{name}</p>
                    <p className="text-[16px] font-bold ">Цена: {price.toLocaleString("ru")} ₸</p>
                  </div>
                </div>
                <div className="w-[25px]">
                  <div className="w-[25px] h-[25px] cursor-pointer grid place-items-center font-bold bg-black rounded-full text-white">+</div>
                  <div className="w-[25px] h-[25px] grid place-items-center">1</div>
                  <div className="w-[25px] h-[25px] cursor-pointer grid place-items-center font-bold bg-black rounded-full text-white">-</div>
                </div>
                <div onClick={() => deleteFromBasket(id)} className="w-[37px] h-[37px] hover:bg-gray-100 cursor-pointer grid place-items-center rounded-full">
                  <svg className="w-[24px] h-[24px] fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  ><path d="M267-74q-57 0-96.5-39.5T131-210v-501H68v-136h268v-66h287v66h269v136h-63v501q0 57.12-39.44 96.56Q750.13-74 693-74H267Zm426-637H267v501h426v-501ZM334-279h113v-363H334v363Zm180 0h113v-363H514v363ZM267-711v501-501Z" /></svg>
                </div>
              </div>
            ))}
          </div>
          <button disabled={sumOfCart === 0} className={`w-full bg-black ${sumOfCart === 0 && "bg-gray-200 text-black hover:bg-gray-200"} text-white text-[23px] hover:bg-[#0275FF] py-[10px] mt-[15px] rounded-full font-bold `}>Оформить за {sumOfCart.toLocaleString("ru")} ₸</button>
        </div>
      </>
      }
    </>
  )
}