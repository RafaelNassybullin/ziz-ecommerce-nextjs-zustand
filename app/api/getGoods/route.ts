import { data } from "@/data";
import { arraySearch } from "@/functions";
import { Goods } from "@/zustand/goods";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  const categories = request.nextUrl.searchParams.get('categories') || "";
  const sort = request.nextUrl.searchParams.get('sort') || "";
  const search = request.nextUrl.searchParams.get('search') || " ";
  const page = parseInt(request.nextUrl.searchParams.get('page') as string) || 1;
  const limit = parseInt(request.nextUrl.searchParams.get('limit') as string) || 9;

  try {
    //получение доступных категорий
    const categoryData = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index).sort()
    let goods: Goods[] = data;
    //живой поиск
    if (search !== "" || search !== undefined || sort !== "undefined") {
      goods = arraySearch(goods, search)
    }
    //сортировка по ID
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
    const totalItems = goods.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = goods.slice(startIndex, endIndex);

    //если категории не заданы то вернуть все данные 
    if (categories === "" || categories === undefined || categories === "undefined") {
      return NextResponse.json({
        categoryData,
        data: paginatedData,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      });
    }
    
    //если категории заданы вернуть отфильтрованные данные
    if (categories !== "") {
      let categoriesArray = categories.split(",")
      const filteredItems = goods.filter((item => categoriesArray.includes(item.category)))
      const total = filteredItems.length
      return NextResponse.json({
        categoryData,
        data: filteredItems.slice(startIndex, endIndex),
        totalItems,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      });
    }

  } catch {
    return NextResponse.json({
      categoryData: [],
      data: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: page
    });
  }
}
