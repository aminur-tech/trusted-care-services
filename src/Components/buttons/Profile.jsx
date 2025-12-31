"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();

  console.log("Status:", status);
  console.log("Session Data:", session);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>You are not logged in!</p>;

  return <div>Welcome {session?.user?.name}</div>;
};

export default Profile;