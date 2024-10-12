"use client"
import { useGoods } from "@/zustand/goods";

export default function Loader() {

  const loading = useGoods(state => state.loading);

  return (
    <>
      {
        loading && <div className="w-full h-[100vh] fixed top-0 left-0 grid place-items-center">
          <div className="border-[4px] animate-spin w-[100px] h-[100px] border-t-transparent border-[#000000] rounded-full"></div>
        </div>
      }
    </>
  )
}