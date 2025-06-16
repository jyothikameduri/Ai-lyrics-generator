import { Link } from "react-router-dom"; 
export default function Header() {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-purple-100 shadow mb-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-purple-800" style={{ fontFamily: `'Playfair Display', serif` }}>
        AI Lyrics Generator
      </h1>

      {/* Navigation */}
      <div className="space-x-4">
        <Link to="/" className="text-purple-700 hover:underline font-medium">
          Home
        </Link>
        <Link to="/about" className="text-purple-700 hover:underline font-medium">
          About Us
        </Link>
      </div>
    </div>
  );
}
