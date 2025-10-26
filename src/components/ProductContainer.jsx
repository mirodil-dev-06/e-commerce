import React from 'react'
import ProductCard from './ProductCard'

const ProductContainer = ({ categoryData }) => {
  console.log(categoryData)


  return (
    <div className="grid grid-cols-4 gap-4">

      {
        categoryData?.allRefinedProducts?.map(product => (
  <ProductCard key={product.id} productData={product} />
))


      }

    </div>
  )
}

export default ProductContainer
