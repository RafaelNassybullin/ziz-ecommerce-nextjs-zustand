import { useCart } from "@/zustand/cart"

export default function Card({ id, name, category, price, image }: any) {
  const addToCart = useCart(state => state.addToCart)

  function addToBasket() {
    addToCart({ id, name, category, price, image })
  }

  return (
    <div className="w-full  flex flex-col shadow bg-white cursor-pointer hover:border-black h-[410px] p-[20px] pb-[13px] rounded-[15px] border-[1px] border-solid border-white mb-[20px]">
      <div className="w-full h-[55%]">
        <img className="w-full h-full object-contain" src={image} alt={name} />
      </div>
      <div className="w-full h-[40%] pt-[15px]">
        <div className="flex justify-between">
          <p className="w-fit h-fit px-[15px] py-[2px] font-bold text-[13px] rounded-[25px] bg-orange-200">{category}</p>
          <p className="font-bold text-[21px]">{price.toLocaleString('ru')} ₸</p>
        </div>
        <p className="text-gray-700 mt-[13px] text-[18px] font-bold cut-text">{name}</p>
      </div>
      <button onClick={addToBasket} className="w-full bg-black hover:bg-[#0275FF] py-[5px] font-bold text-white rounded-full ">Добавить в корзину</button>
    </div>
  )
}