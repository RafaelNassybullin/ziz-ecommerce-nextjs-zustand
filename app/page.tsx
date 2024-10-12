import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Main from "@/components/main";
import Sort from "@/components/main/sort";
import Navbar from "@/components/navbar";
import Paginations from "@/components/pagination";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <Suspense>
        <Sort />
      </Suspense>

      <div className="container mx-auto flex justify-between ">

        <Suspense>
          <Aside />
        </Suspense>

        <Suspense>
          <Main />
        </Suspense>

      </div>
      <Suspense>
        <Paginations />
      </Suspense>


      <Loader />
      <Footer />
    </>
  );
}
