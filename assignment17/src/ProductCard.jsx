
import React from 'react';
import './ProductCard.css';

function ProductCard(){
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="product-image" />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p><strong>${product.price}</strong></p>
  </div>
);
}
export default ProductCard;
