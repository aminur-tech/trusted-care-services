import About from "@/Components/home/About";
import Banner from "@/Components/home/Banner";
import Testimonials from "@/Components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Banner />
        <About />
        <Testimonials />
      </div>
    </>
  );
}
