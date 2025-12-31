"use client";

import { signOut, useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AuthButtons = () => {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="flex items-center gap-4" ref={dropdownRef}>
      {status === "authenticated" ? (
        <div className="relative">
          {/* Profile Trigger */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1 pr-3 rounded-full border border-base-300 hover:bg-base-200 transition-all duration-300 active:scale-95"
          >
            <div className="avatar">
              <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img
                  src={session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="User"
                />
              </div>
            </div>
            <span className="hidden md:inline-block text-sm font-semibold text-base-content">
              {session.user.name?.split(" ")[0]}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Professional Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-base-100 border border-base-200 rounded-2xl shadow-2xl z-[100] py-2 animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-3 border-b border-base-200">
                <p className="text-sm font-bold truncate text-base-content">{session.user.name}</p>
                <p className="text-xs text-base-content/60 truncate">{session.user.email}</p>
              </div>
              
              <ul className="p-2 space-y-1">
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-primary hover:text-primary-content transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile 
                  </Link>
                </li>
              </ul>

              <div className="px-2 pt-2 border-t border-base-200">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm text-error rounded-lg hover:bg-error/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/login" className="btn btn-ghost btn-sm md:btn-md hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20">
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;