import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/coffee_logo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/" }, // Changed from "/#" to "/"
  { id: 2, name: "Menu", link: "#" },
  { id: 3, name: "Products", link: "/products" },
  { id: 4, name: "Location", link: "/location" },
  { id: 5, name: "About", link: "/about" },
];

const DropdownMenu = [
  { id: 1, name: "Blog", link: "/blog" },
  { id: 2, name: "Events", link: "/events" },
  { id: 3, name: "Gifts", link: "/gifts" },
  { id: 4, name: "Gallery", link: "/gallery" },
  { id: 5, name: "Reviews", link: "/reviews" },
];

const mobileMenu = [
  { id: 1, name: "Home", link: "/" },
  { id: 3, name: "Products", link: "/products" },
  { id: 4, name: "Location", link: "/location" },
  { id: 5, name: "About", link: "/about" },
  { id: 6, name: "Blog", link: "/blog" },
  { id: 7, name: "Events", link: "/events" },
  { id: 8, name: "Gifts", link: "/gifts" },
  { id: 9, name: "Gallery", link: "/gallery" },
  { id: 10, name: "Reviews", link: "/reviews" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 shadow-md text-white relative">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo Section - Changed from <a> to <Link> */}
        <Link
          to="/"
          className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
        >
          <img src={Logo} alt="Coffee Café Logo" className="w-14 h-auto" />
          Bean Vantage
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6 z-50">
          {Menu.map((menu) =>
            menu.name === "Menu" ? (
              <li key={menu.id} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-block text-lg py-2 px-3 text-gray-300 hover:text-white transition-all duration-200"
                >
                  {menu.name}
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-md">
                    {DropdownMenu.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.link}
                          className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="inline-block text-lg py-2 px-3 text-gray-300 hover:text-white transition-all duration-200"
                >
                  {menu.name}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden sm:flex">
          <Link to="/orders">
            <button className="bg-primary hover:bg-primary/80 transition duration-200 text-white px-4 py-2 rounded-full flex items-center gap-2">
              Order now
              <FaCoffee className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="sm:hidden bg-gray-800 text-center absolute top-16 left-0 w-full z-50 shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {mobileMenu.map((menu) =>
              menu.name === "Menu" ? (
                <li key={menu.id} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="block text-lg py-2 px-4 text-gray-300 hover:text-white"
                  >
                    {menu.name}
                  </button>
                </li>
              ) : (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="block text-lg py-2 px-4 text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link to="/orders">
            <button className="bg-primary hover:bg-primary/80 transition duration-200 text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto mb-4">
              Order now
              <FaCoffee className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;