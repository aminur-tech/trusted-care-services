import { GetServices } from "@/actions/server/services";
import ServiceCard from "@/Components/cards/ServiceCard";
import About from "@/Components/home/About";
import Banner from "@/Components/home/Banner";
import Testimonials from "@/Components/home/Testimonials";


export default async function Home() {
  const services = await GetServices();
  return (
    <>
      <div className="space-y-20">
        <Banner />
        <About />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
        <Testimonials />
      </div>
    </>
  );
}
