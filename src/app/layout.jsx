
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/layouts/Navbar";
import Footer from "@/Components/layouts/Footer";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add more weights if needed
  variable: "--font-poppins",
});

export const metadata = {
  title: "Care.xyz - Trusted Care Services",
  description: "Book babysitting, elderly care, and special care services easily and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>

        <header className="sticky top-0 z-50 w-full bg-base-100 shadow-sm">
          <div className="py-2 md:w-11/12 mx-auto">
            <Navbar />
          </div>
        </header>

        {/* Main content */}
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
