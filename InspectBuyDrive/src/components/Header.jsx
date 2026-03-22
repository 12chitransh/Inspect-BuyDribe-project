import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { getTotalItems } = useContext(CartContext);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://inspectbuydrive.com.au/wp-content/uploads/2025/03/Untitled-design-40.png.webp"
            alt="Brand"
            className="h-10 w-auto ml-2 rounded"
          />
          <span className="text-xl font-bold text-gray-800">
            CarMarket
          </span>
        </div>
        <nav className="flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/cars"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Cars
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 font-semibold relative"
          >
            Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Contact
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name || user.email}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
