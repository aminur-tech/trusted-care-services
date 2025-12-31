import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getServiceById } from "@/actions/server/services";


// Next.js 14+ app router: params is passed as prop to the page
const ServicesDetails = async ({ params }) => {
    
  // Destructure serviceId from params
  const { serviceId } = await params;
  const service = await getServiceById(serviceId);

  // Check login session
  const session = await getServerSession(authOptions);

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image */}
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={350}
          className="rounded-lg"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-600 mb-4">{service.description}</p>

          <p className="text-xl font-semibold mb-6">
            Price: ${service.price}
          </p>

          {/* Book Button */}
          {session ? (
            <Link
              href={`/booking/${service._id}`}
              className="px-6 py-3 bg-primary text-white rounded-lg "
            >
              Book Service
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login to Book
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default ServicesDetails;
