import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex justify-between ">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}
