"use client";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      
      <button
        onClick={() => signIn("google")}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FaGoogle className="text-error" />
        Continue with Google
      </button>

      <button
        onClick={() => signIn("github")}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FaGithub />
        Continue with GitHub
      </button>

    </div>
  );
};

export default Social;
