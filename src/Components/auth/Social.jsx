"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Social = () => {
   const params = useSearchParams();

  const handleGoogleSignIn = async () => {
    const result = await signIn("google", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  const handleGithubSignIn = async () => {
    const result = await signIn("github", {
      // redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      
      <button
        onClick={ handleGoogleSignIn}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FaGoogle className="text-error" />
        Continue with Google
      </button>

      <button
        onClick={ handleGithubSignIn}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FaGithub />
        Continue with GitHub
      </button>

    </div>
  );
};

export default Social;
