import { data } from "@/data";
import { Goods } from "@/zustand/goods";
import { NextRequest, NextResponse } from "next/server";

const arraySearch = (array: any, keyword: any) => {
  const searchTerm = keyword.toLowerCase()
  return array.filter((value: any) => {
    return value.name.toLowerCase().match(new RegExp(searchTerm, 'g'))
  })
}

export async function GET(request: NextRequest) {

  const categories = request.nextUrl.searchParams.get('categories') || "";
  const sort = request.nextUrl.searchParams.get('sort') || "";
  const page = request.nextUrl.searchParams.get('page') || "";
  const search = request.nextUrl.searchParams.get('search') || " ";

  try {
    //получение доступных категорий
    const categoryData = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index).sort()
    let goods: Goods[] = data;

    console.log(search, "7688")
    if (search !== "" || search !== undefined || sort !== "undefined") {
      goods = arraySearch(goods, search)
    }

    if (sort === "" || sort === undefined || sort === "undefined" || sort === "Не сортировать") {
      goods = goods.sort((a, b) => a.id - b.id)
    }
    //сортировка по возрастанию цены
    if (sort === "По возрастанию") {
      goods = goods.sort((a, b) => a.price - b.price)
    }
    //сортировка по убыванию цены
    if (sort === "По убыванию") {
      goods = goods.sort((a, b) => b.price - a.price);
    }

    //если категории не заданы то вернуть все данные 
    if (categories === "" || categories === undefined || categories === "undefined") {
      return NextResponse.json({
        data: goods,
        categoryData
      });
    }
    //если категории заданы вернуть отфильтрованные данные
    if (categories !== "") {
      let categoriesArray = categories.split(",")
      const filteredItems = goods.filter((item => categoriesArray.includes(item.category)))
      return NextResponse.json({
        data: filteredItems,
        categoryData
      });
    }

    // return NextResponse.json({
    //   data: goods,
    //   categoryData
    // });

  } catch {
    return NextResponse.json({
      data: [],
      categoryData: []
    });
  }
}