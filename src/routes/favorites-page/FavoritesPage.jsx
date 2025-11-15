import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Container } from "../../utils/Utils";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    dispatch({ type: "LOAD_FAVORITES" });
  }, [dispatch]);

  return (
    <Container>
      <section className="py-8">
        <h1 className="text-2xl font-bold text-[#3F4646] mb-5">Sevimlilar</h1>
        <hr className="mb-6" />

        {favorites.length > 0 ? (
          <div
            className="
              grid
              max-[450px]:grid-cols-1 
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-4 sm:gap-6
            "
          >
            {favorites.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))}
          </div>
        ) : (
          <div className="h-[500px] flex flex-col justify-center items-center gap-8 text-center">
            <div className="w-[160px] h-[160px] bg-[#F0F9F4] rounded-full flex items-center justify-center shadow-sm">
              <FaRegHeart className="text-[#28A642] text-[75px]" />
            </div>

            <h1 className="text-[#3C4242] text-2xl sm:text-[34px] font-bold">
              Your wishlist is empty.
            </h1>

            <p className="max-w-[450px] text-[#807D7E] text-sm sm:text-[16px]">
              You don’t have any products in your wishlist yet. Start exploring
              our Shop page to add products you love.
            </p>

            <Link
              to="/"
              className="
                py-3 px-10 sm:px-12 
                bg-[#8A33FD] 
                rounded-lg 
                text-white 
                hover:opacity-80 
                transition
              "
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </section>
    </Container>
  );
};

export default FavoritesPage;
