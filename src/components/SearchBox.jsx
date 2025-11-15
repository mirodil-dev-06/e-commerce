import { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { instance } from "../api/axios";
import { Link } from "react-router-dom";
import noresult from "../images/no-result.png";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      instance(`products/search?q=${query}`)
        .then((res) => {
          setResults(res.data.products || []);
          setIsOpen(true);
        })
        .catch(() => {
          setResults([]);
          setIsOpen(false);
        });
    }, 300); 

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-80">
      <div className="flex justify-between items-center gap-3 bg-[#f6f6f6] px-4 py-2.5 rounded-md text-[#807D7E]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        <button className="text-[20px] cursor-pointer">
          <IoSearchSharp />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-2 rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                key={item.id}
                to={`/product-view/${item.id}`}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <h4 className="text-sm text-[#000] line-clamp-1">{item.title}</h4>
              </Link>
            ))
          ) : (
            <div className="flex justify-center p-4">
              <img src={noresult} alt="No result" className="w-40 opacity-80" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
