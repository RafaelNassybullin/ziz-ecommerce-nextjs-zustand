import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Main from "@/components/main";
import Sort from "@/components/main/sort";
import Navbar from "@/components/navbar";
import Paginations from "@/components/pagination";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sort />
      <div className="container mx-auto flex justify-between ">
        <Aside />
        <Main />
      </div>
      <Paginations />
      <Loader/>
      <Footer />
    </>
  );
}
