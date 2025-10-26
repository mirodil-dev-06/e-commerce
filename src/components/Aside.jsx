import { instance } from "../api/axios";
import { useEffect, useRef, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Aside = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const openRef = useRef(null);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tashqariga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openRef.current && !openRef.current.contains(event.target)) {
        setOpenCategory(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // Barcha kategoriyalarni olish
  useEffect(() => {
    setLoading(true);
    instance("/products/categories")
      .then((res) => {
        setCategoryData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Kategoriya ma'lumotlarini olishda xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative" ref={openRef}>
      <p
        className="flex justify-center items-center gap-2 py-2 px-4 bg-[#eee] rounded-[5px] text-[18px] cursor-pointer hover:bg-gray-200 transition"
        onClick={() => setOpenCategory((prev) => !prev)}
      >
        <BiSolidCategory
          className={`transition-transform duration-300 text-[29px] ${openCategory ? "rotate-180" : "rotate-0"
            }`}
        />
        Category
      </p>

      <ul
        className={`absolute left-0 top-18 mt-2 bg-white shadow-md rounded-[5px] z-10 overflow-hidden origin-top transition-all duration-300 ease-in-out h-[370px] overflow-y-scroll
        ${openCategory
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {loading && (
          <li className="py-3 px-4 text-gray-500 text-center">Yuklanmoqda...</li>
        )}
        {error && (
          <li className="py-3 px-4 text-red-500 text-center">{error}</li>
        )}
        {!loading &&
          !error &&
          categoryData.map((categoryItem) => (
            <Link key={uuidv4()} to={`/maincategory/${categoryItem.name.replaceAll(' ', '-')}`}>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer capitalize">
                {categoryItem.name}
              </li>
            </Link>

          ))}
      </ul>
    </div>
  );
};

export default Aside;
