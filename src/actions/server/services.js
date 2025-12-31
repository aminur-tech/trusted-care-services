"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GetServices = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();

  return services.map(service => ({
    ...service,
    _id: service._id.toString(), 
  }));
};




export const getServiceById = async (id) => {
  const service = await dbConnect(collections.SERVICES)
    .findOne({ _id: new ObjectId(id) });

  if (!service) return null;

  return {
    ...service,
    _id: service._id.toString(), 
  };
};

