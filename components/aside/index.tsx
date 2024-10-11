export default function Aside() {
  return (
    <aside className="w-[23%] rounded-[15px] shadow p-[25px]  bg-white border-solid border-[#E3E3E3] pt-[15px] h-full">
      <p className="text-[27px] font-bold">
        Категории
      </p>
      <div className="flex flex-col mt-[15px]">
        {
          ["Показать все", 
            "Электроника", 
            "Книги",
             "Одежда", 
             "Обувь", 
             "Аксессуары", 
             "Косметика и парфюмерия", 
             "Дом и сад",
              "Спорт", 
              "Игрушки", 
              "Техника для кухни", 
              "Мебель", 
              "Здоровье и уход", 
              "Автотовары",
              "Автотовары",
              "Подарки и сувениры",
              "Кухонные принадлежности",
            
            
            
            ].map((item) => (
            <label className="flex cursor-pointer mt-[5px] items-center">
              <input className="cursor-pointer w-[17px] h-[17px]" type="checkbox" name="checkbox" value="value" />
              <p className="ml-[7px]">{item}</p>
            </label>
          ))
        }
      </div>
    </aside>
  )
}