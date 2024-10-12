import { useCart } from "@/zustand/cart"

export default function Card({ id, name, category, price, image }: any) {
  const addToCart = useCart(state => state.addToCart)

  function addToBasket() {
    addToCart({ id, name, category, price, image })
  }

  return (
    <div className="w-full flex max-[768px]:h-[310px] max-[380px]:h-[290px] h-[410px] max-[515px]:h-[350px] flex-col shadow bg-white max-[768px]:rounded-[10px] cursor-pointer hover:border-black  max-[768px]:hover:border-white  max-[768px]:p-[10px] max-[768px]:pb-[6px] p-[20px] pb-[13px] rounded-[15px] border-[1px] border-solid border-white mb-[20px] max-[768px]:mb-[5px]">
      <div className="w-full h-[55%] ">
        <img className="w-full h-full object-contain" src={image} alt={name} />
      </div>
      <div className="w-full h-[40%] pt-[15px]">
        <div className="flex justify-between max-[515px]:flex-col">
          <p className="w-fit h-fit max-[768px]:px-[10px] px-[15px] py-[2px] font-bold text-[13px] max-[768px]:text-[10px] rounded-[25px] bg-orange-200">{category}</p>
          <p className="font-bold max-[768px]:text-[15px] max-[515px]:w-full max-[515px]:mt-[10px] text-[21px]">{price.toLocaleString('ru')} ₸</p>
        </div>
        <p className="text-gray-700 mt-[13px] max-[768px]:text-[12px] text-[18px] font-bold cut-text">{name}</p>
      </div>
      <button onClick={addToBasket} className="w-full bg-black max-[515px]:mt-[10px] max-[380px]:text-[10px] max-[768px]:hover:bg-black hover:bg-[#0275FF] py-[5px] max-[768px]:text-[12px] font-bold text-white rounded-full ">Добавить в корзину</button>
    </div>
  )
}