import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const FavoriteButton = ({ productData }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = useMemo(
    () => favorites.some((item) => item.id === productData.id),
    [favorites, productData.id]
  );

  const toggleFavorite = () => {
    dispatch({
      type: isFavorite ? "REMOVE_FROM_FAVORITES" : "ADD_TO_FAVORITES",
      payload: isFavorite ? productData.id : productData,
    });
  };

  return (
    <button
      onClick={toggleFavorite}
      aria-label="Toggle Favorite"
      className="absolute top-3 right-3 text-xl text-[#D10024] cursor-pointer"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
