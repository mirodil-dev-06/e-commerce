import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link to={`/product-vied/${productData.id}`}>
      <img
        src={productData.thumbnail}
        alt={productData.title}
        className="w-full h-48 object-contain mb-3"
      /></Link>
      <h3 className="text-lg font-medium line-clamp-1">{productData.title}</h3>
      <p className="text-gray-600">${productData.price}</p>
    </div>
  );
};

export default ProductCard;
