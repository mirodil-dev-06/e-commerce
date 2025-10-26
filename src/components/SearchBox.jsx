import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import search_icon from '../images/Search.svg'

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  // tashqariga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={searchRef}
      className="flex items-center gap-2 relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 bg-[#f4f5f8] rounded-[5px] cursor-pointer hover:bg-gray-200 transition"
      >
        <img src={search_icon} alt="" />
      </button>

      <input
        type="text"
        placeholder="Search..."
        className={`absolute right-0 top-0 h-full px-4 py-2 rounded-[5px] border border-gray-300 outline-none bg-white transition-all duration-300 
        ${open ? "opacity-100 w-64 translate-x-0" : "opacity-0 w-0 translate-x-5 pointer-events-none"}`}
      />
    </div>
  );
};

export default SearchBox;
