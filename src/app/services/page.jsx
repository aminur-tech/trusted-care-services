import { GetServices } from "@/actions/server/services";
import ServiceCard from "@/Components/cards/ServiceCard";

const ServicesPage = async () => {
  const services = await GetServices();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
