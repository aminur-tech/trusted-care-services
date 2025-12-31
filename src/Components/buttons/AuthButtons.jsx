"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButtons = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {session?.status == "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-primary ">
            Log Out
          </button>
        </>
      ) : (
        <>
          {" "}
          <div className=" space-x-2">
            <Link href="/login" className="btn btn-primary btn-outline">
              Sign In
            </Link>
            <Link href="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
