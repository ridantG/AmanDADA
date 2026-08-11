import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[#737874] mb-4">Page Not Found</h1>
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
