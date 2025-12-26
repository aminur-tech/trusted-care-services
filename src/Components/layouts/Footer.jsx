import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-primary">CARE.IO</h2>
          <p className="opacity-80">
            Trusted care services for children, elderly, and special care at home.
            Making caregiving easy, secure, and accessible.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/my-bookings" className="hover:text-primary">My Bookings</Link></li>
            <li><Link href="/login" className="hover:text-primary">Login</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <Link href="#" className="hover:text-primary">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-primary">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-primary">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm opacity-60">
        &copy; {new Date().getFullYear()} Care.xyz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
