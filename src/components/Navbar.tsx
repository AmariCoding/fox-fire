import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-orange-500/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="FOXFIRE Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/games"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Games
              </Link>
              <Link
                to="/players"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Players
              </Link>
              <Link
                to="/tournaments"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Tournaments
              </Link>
              <Link
                to="/news"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                News
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-3 pt-2">
          <div className="px-2 space-y-1">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/games"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Games
            </Link>
            <Link
              to="/players"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Players
            </Link>
            <Link
              to="/tournaments"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tournaments
            </Link>
            <Link
              to="/news"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 px-3">
              <Button
                variant="default"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
