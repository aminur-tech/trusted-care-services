import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-base-100 text-base-content">
      <BiSolidErrorAlt size={100} className="text-primary" />

      <h2 className="text-4xl font-bold">Page Not Found</h2>

      <Link href="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
