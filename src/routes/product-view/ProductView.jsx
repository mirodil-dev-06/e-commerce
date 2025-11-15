import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import { Container } from "../../utils/Utils";
import { GoCheck } from "react-icons/go";
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../../assets/css/ProductView.css";
import QuantityButton from "../../components/QuantityButton";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [itemCount, setItemCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const defaultTitle = document.title;

  // --- LocalStorage Helpers ---
  const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  // --- Fetch product ---
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await instance(`/products/${id}`);
        setProduct(data);
        setMainImage(data.thumbnail);
        document.title = data.title || defaultTitle;

        const favorites = getStorage("favorites");
        setIsFavorite(favorites.some((item) => item.id === Number(id)));
      } catch (err) {
        console.error("Mahsulotni olishda xato:", err);
      }
    };

    fetchProduct();

    return () => {
      document.title = defaultTitle;
    };
  }, [id]);

  // --- Toggle Favorite ---
  const toggleFavorite = () => {
    const favorites = getStorage("favorites");
    const updatedFavorites = isFavorite
      ? favorites.filter((item) => item.id !== product.id)
      : [...favorites, product];

    setIsFavorite(!isFavorite);
    setStorage("favorites", updatedFavorites);
  };

  // --- Add to Cart ---
  const handleAddToCart = () => {
    const cart = getStorage("cart");
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += itemCount;
    } else {
      cart.push({ ...product, quantity: itemCount });
    }

    setStorage("cart", cart);
    alert("Mahsulot savatga qo‘shildi 🛒");
  };

  // --- Quantity Control ---
  const changeCount = (type) => {
    setItemCount((prev) => {
      if (type === "inc" && prev < product.minimumOrderQuantity) return prev + 1;
      if (type === "dec" && prev > 1) return prev - 1;
      return prev;
    });
  };

  // --- Extra Info ---
  const extraInfo = useMemo(
    () => [
      {
        icon: <GoCheck />,
        text: `${product?.minimumOrderQuantity} dona xarid qilish mumkin`,
      },
      {
        icon: <TbShoppingBagCheck />,
        text: `Bu haftada ${product?.stock} kishi sotib oldi`,
      },
    ],
    [product]
  );

  if (!product) {
    return (
      <Container>
        <div className="loader"></div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-7 gap-6 mt-6 py-5">

        {/* --- Thumbnails --- */}
        <div className="col-span-1 grid gap-4">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setMainImage(img)}
              className={`w-[170px] h-[140px] object-cover rounded cursor-pointer ${
                mainImage === img ? "bg-[#d2d2d2]" : "bg-[#f5f5f5]"
              }`}
            />
          ))}
        </div>

        {/* --- Main Image --- */}
        <div className="col-span-3">
          <img
            src={mainImage}
            alt={product.title}
            className="rounded mb-4 w-[550px] h-[450px] object-contain bg-[#f5f5f5]"
          />
        </div>

        {/* --- Details --- */}
        <div className="col-span-3 flex flex-col gap-3">
          <h1 className="text-[34px] font-medium text-[#3C4242]">{product.title}</h1>
          <p className="text-lg font-semibold text-[#8A33FD]">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          <hr />

          {/* --- Quantity & Favorites --- */}
          <div className="grid grid-cols-5 gap-5 items-center">
            <div className="col-span-2">
              <QuantityButton
                count={itemCount}
                maxCount={product.minimumOrderQuantity}
                onIncrease={() => changeCount("inc")}
                onDecrease={() => changeCount("dec")}
              />
            </div>

            <div className="col-span-2">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#8A33FD] text-white font-semibold py-2 rounded cursor-pointer hover:opacity-85 transition"
              >
                Add to Cart
              </button>
            </div>

            <div
              onClick={toggleFavorite}
              className="col-span-1 text-center text-2xl cursor-pointer transition"
            >
              {isFavorite ? (
                <FaHeart className="text-[#D10024]" />
              ) : (
                <FaRegHeart className="text-gray-500 hover:text-[#d10023d5]" />
              )}
            </div>
          </div>

          {/* --- Extra Info --- */}
          {extraInfo.map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="p-2 border-2 rounded-md border-[#8A33FD] bg-[#8b33fda7] text-[18px]">
                {icon}
              </span>
              <p className="text-[16px] text-gray-500 mt-1">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
