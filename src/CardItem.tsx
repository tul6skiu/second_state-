import React from 'react';
import type { Product } from './types/Product';
import "./CardView.css";

function CardItem({ product }: { product: Product }) {
  return (
	<div class="product-card">
	  <div class="product-info">
	    <div class="product-title">{product.name}</div>
	    <div class="product-color color-red">{product.color}</div>
	    <div class="product-image">
	      <img src={product.img} alt={product.name} width={260} height={200}/>
	    </div>
	    <div class="product-bottom-row">
	      <div class="product-price">${product.price}</div>
	      <button class="btn-cart">add to cart</button>
	    </div>
	  </div>
	</div>

	);
}

export default CardItem