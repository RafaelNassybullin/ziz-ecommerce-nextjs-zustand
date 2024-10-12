import Link from "next/link";
import BasketIcon from "./basket-icon";
import BasketModal from "./basket-modal";
import Search from "./search";

export default function Navbar() {

  return (
    <nav className={`w-full h-[64px] shadow bg-black fixed top-0 left-0`}>
      <div className="container px-[15px] mx-auto h-full w-full flex justify-between items-center">
        <Link href={"/"} className="text-[40px] text-white max-[768px]:text-[25px] font-bold font-antonRegular">Rafael's</Link>
        <Search />
        <BasketIcon />
        <BasketModal />
      </div>
    </nav>
  )
}