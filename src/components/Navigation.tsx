import { Link } from "react-router-dom";
import { useState } from "react";
import SideCart from "./SideCart";

const Navigation = () => {
  // State to open and close mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State to control the SideCart visibility
  const [openCart, setOpenCart] = useState<boolean>(false);

  // Function to toggle the SideCart
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Navbar Start (Brand & Mobile Menu) */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Toggle Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <ul
              className="fixed inset-0 flex flex-col justify-center items-center z-50 p-5 w-screen h-screen lg:hidden bg-white"
              onClick={() => setMenuOpen(false)}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-3xl font-bold"
              >
                &times;
              </button>

              <li className="mb-8 text-xl">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="mb-8 text-xl">
                <Link to="/productlist" onClick={() => setMenuOpen(false)}>
                  Shop
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Brand Name */}
        <Link to="/" className="btn btn-ghost text-2xl">
          NovaStore
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/productlist" className="text-lg font-semibold">
              Shop
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End (Cart Icon) */}
      <div className="navbar-end mr-5">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleCart}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Conditionally render the SideCart */}
              <span className="badge badge-sm indicator-item">10</span>
            </div>
          </div>
        </div>
      </div>

      {/* SideCart slides out */}
      <SideCart isOpen={openCart} toggleCart={toggleCart} />
    </div>
  );
};

export default Navigation;

