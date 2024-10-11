import { data } from "@/data";
import { removeDuplicatesInPlace } from "@/functions";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

  const categories = request.nextUrl.searchParams.get('categories') || "";
  const sort = request.nextUrl.searchParams.get('sort');
  const page = request.nextUrl.searchParams.get('page');
  const search = request.nextUrl.searchParams.get('search');


  try {
    const categoryData = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index)


    if (categories === "" || categories === undefined || categories === "undefined") {
      return NextResponse.json({
        data,
        categoryData
      });
    }


    if (categories !== "") {
      let categoriesArray = categories.split(",")
      // console.log(categoriesArray)

      const filteredItems = data.filter((item => categoriesArray.includes(item.category)))

      // console.log(filteredItems)
      return NextResponse.json({
        data: filteredItems,
        categoryData
      });
    }

    return NextResponse.json({
      data,
      categoryData
    });

  } catch {
    return NextResponse.json({
      data: [],
      categoryData: []
    });
  }
}