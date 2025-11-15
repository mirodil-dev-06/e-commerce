import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductContainer = ({ categoryData }) => {
  const products = categoryData?.allRefinedProducts || [];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 35;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="w-full">
     <div
  className="
    grid 

    max-[450px]:grid-cols-1     

    grid-cols-2                 
    sm:grid-cols-3          
    md:grid-cols-4           
    lg:grid-cols-5           

    gap-x-3 gap-y-6 
    sm:gap-x-4 sm:gap-y-8 
    md:gap-x-6 md:gap-y-10
  "
>
  {currentProducts.map((product) => (
    <ProductCard key={product.id} productData={product} />
  ))}
</div>


      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
