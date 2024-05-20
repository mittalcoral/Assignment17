import React, { useContext } from 'react';
import { ProductContext } from './ProductContext.jsx';
import ProductCard from './ProductCard.jsx';

const ProductList = () => {
  const {products} = useContext(ProductContext);

  return (
    <div className="product-list">
      {products.map((product)=>{
        return <ProductCard {...product} key={product.id} />
})}
    </div>
  );
};

export default ProductList
