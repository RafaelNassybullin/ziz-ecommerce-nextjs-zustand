import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />


      <div className="container w-full h-[64px] mx-auto flex justify-end items-center">
        <p className="mr-[15px]">По цене:</p>
        <div className="w-[250px] h-[44px] px-[20px] cursor-pointer font-bold flex justify-between items-center rounded-[10px] shadow">
          <p>Не сортировать</p>
          <svg className="fill-black w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M286-436v-230l-76 76-96-95 240-241 240 241-96 95-76-76v230H286ZM606-34 366-275l96-95 76 76v-230h136v230l76-76 96 95L606-34Z" /></svg>
        </div>



        {/* <div className="w-[100%] h-[100vh] bg-[#000000CC] fixed top-0 right-0">
          <div className="w-full h-full container mx-auto flex justify-end">
            <div className="w-[250px] rounded-[10px] p-[7px] cursor-pointer mt-[130px] bg-white h-[174px]">

              <div className="w-full h-[50px] mb-[5px] shadow font-bold flex items-center justify-start rounded-[7px]">
                <p className="px-[15px]">Не сортировать</p>
              </div>
              <div className="w-full h-[50px] mb-[5px] shadow font-bold flex items-center justify-start rounded-[7px]">
                <p className="px-[15px]">По возрастанию</p>
              </div>
              <div className="w-full h-[50px] mb-[5px] shadow font-bold flex items-center justify-start rounded-[7px]">
                <p className="px-[15px]">По убываю</p>
              </div>
            </div>
          </div>
        </div> */}




      </div>


      <div className="container mx-auto flex justify-between ">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}
