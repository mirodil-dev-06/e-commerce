import { instance } from "../api/axios";
import { useEffect, useRef, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });

  const asideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (asideRef.current && !asideRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await instance("/products/categories");
        setCategories(res.data);
        setStatus({ loading: false, error: null });
      } catch (err) {
        setStatus({
          loading: false,
          error: "Kategoriya ma'lumotlarini olishda xatolik yuz berdi",
        });
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative" ref={asideRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 py-2 px-6 bg-[#f6f6f6] text-[#807D7E] 
        rounded-[5px] text-[18px] cursor-pointer hover:bg-[#8A33FD] 
        hover:text-white transition"
      >
        <BiSolidCategory
          className={`text-[29px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        Category
      </button>

      <ul
        className={`absolute top-full left-0 mt-2 bg-white shadow-md rounded-[5px]
        max-h-[300px] overflow-y-auto z-10 origin-top transition-all duration-300
        ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
      `}
      >
        {status.loading && (
          <li className="py-3 px-4 text-gray-500 text-center">Yuklanmoqda...</li>
        )}

        {status.error && (
          <li className="py-3 px-4 text-red-500 text-center">{status.error}</li>
        )}

        {!status.loading &&
          !status.error &&
          categories.map((item) => (
            <Link
              key={item.name}
              to={`/maincategory/${item.name.replaceAll(" ", "-")}`}
            >
              <li className="py-4 px-3 hover:bg-gray-100 cursor-pointer capitalize">
                {item.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Aside;
