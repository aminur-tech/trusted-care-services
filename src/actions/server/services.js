"use server";
import { collections, dbConnect } from "@/lib/dbConnect";

export const GetServices = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();

  return services.map(service => ({
    ...service,
    _id: service._id.toString(), 
  }));
};
