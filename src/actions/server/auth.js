"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  try {
    const { email, password, name } = payload;

    if (!email || !password) {
      return { success: false, message: "Missing credentials" };
    }

    const usersCollection = await dbConnect(collections.USERS);

    const isExist = await usersCollection.findOne({ email });
    if (isExist) {
      return { success: false, message: "User already exists" };
    }

    const newUser = {
      provider: "credentials",
      name,
      email,
      password: await bcrypt.hash(password, 14),
      role: "user",
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return {
      success: true,
      message: "User registered successfully",
    };

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return {
      success: false,
      message: "Server error",
    };
  }
};



export const loginUser = async ({ email, password }) => {
  const usersCollection = await dbConnect(collections.USERS);
  const user = await usersCollection.findOne({ email });

  if (!user) return null;

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) return null;

  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
    role: user.role,
  };
};

