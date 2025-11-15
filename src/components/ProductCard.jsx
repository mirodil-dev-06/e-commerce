import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import FavoriteButton from "../components/FavoriteButton";

const ProductCard = ({ productData }) => {
  return (
    <div className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">

      <Link to={`/product-view/${productData.id}`}>
        <div className="w-full h-48 bg-[#E4E7ED] mb-3 overflow-hidden">
          <img
            src={productData.thumbnail}
            alt={productData.title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-2">
        <h3 className="text-[16px] line-clamp-1">{productData.title}</h3>
        <h2 className="text-[18px] font-bold text-[#111] pt-3">{productData.price} $</h2>

        {productData.discountPercentage && (
          <span className="flex items-center gap-2 text-[#D10024] mt-1">
            <del>{productData.discountPercentage}%</del> Discount
          </span>
        )}

        <Link
          to={`/product-view/${productData.id}`}
          className="my-2 p-2 rounded-lg flex justify-center items-center gap-2 bg-[#8A33FD] text-white hover:opacity-85 transition-opacity duration-200"
        >
          <FiShoppingCart /> Savatga qo'shish
        </Link>

        <FavoriteButton productData={productData} />
      </div>
    </div>
  );
};

export default ProductCard;
