import BasketIcon from "./basket-icon";
import BasketModal from "./basket-modal";
import Search from "./search";

export default function Navbar() {




  return (
    <nav className={`w-full h-[64px] shadow bg-black fixed top-0 left-0`}>
      <div className="container px-[15px] mx-auto h-full w-full flex justify-between items-center">
        <p className="text-[40px] text-white font-bold font-antonRegular">Rafael's</p>
        <Search />
        <BasketIcon />
        <BasketModal />
      </div>
    </nav>
  )
}