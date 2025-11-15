import React, { useState, useEffect } from "react";
import { Container } from "../utils/Utils";
import { NavLink, Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import Aside from "./Aside";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const navIcons = [
  { path: "/wishes", icon: <FaRegHeart /> },
  { path: "/cart", icon: <MdOutlineShoppingCart /> },
  { path: "/login", icon: <FiUser /> },
];

const Search = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    updateCartCount();

    const handleStorageChange = (e) => {
      if (e.key === "cart") updateCartCount();
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="py-6 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          <Link to="/" className="text-2xl font-bold text-[#8A33FD]">
            ShopLine
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">

            <Aside />

            <SearchBox />

            <ul className="flex items-center gap-3 sm:gap-4">
              {navIcons.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                    ${isActive ? "bg-[#8A33FD] text-white relative" : "bg-gray-100 text-gray-700 relative"}`
                  }
                >
                  {item.icon}

                  {item.path === "/cart" && cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] px-[5px] py-[1px] rounded-full font-medium">
                      {cartCount}
                    </span>
                  )}
                </NavLink>
              ))}
            </ul>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
