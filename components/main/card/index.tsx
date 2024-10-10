export default function Card() {
  return (
    <div className="w-full  flex flex-col shadow bg-white cursor-pointer hover:border-black h-[370px] p-[20px] pb-[13px]  rounded-[15px] border-[1px] border-solid border-white  mb-[20px]">
      <div className="w-full h-[50%] ">
        <img className="w-full h-full object-cover" src="/1.jpg" alt="" />
      </div>
      <div className="w-full h-[40%]  pt-[15px]">
        <div className="flex justify-between">
          <p className="w-fit h-fit px-[15px] py-[2px] font-bold text-[13px] rounded-[25px] bg-orange-200">Одежда</p>
          <p className="font-bold text-[21px]">73 000 ₸</p>
        </div>
        <p className="text-gray-700 mt-[13px] text-[18px] font-bold ">Кроссовки Nike Blazer 77 Pro Club White Black</p>
      </div>
      <button className="w-full bg-black hover:bg-[#0275FF] py-[5px] font-bold text-white rounded-full ">Добавить в корзину</button>
    </div>
  )
}