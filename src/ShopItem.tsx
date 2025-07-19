import React from 'react';
import type { Product } from './types/Product';
import './ListView.css'

function ShopItem({ product }: { product: Product }) {
  return (
  	<li className="shop-item">
      <img src={product.img} alt={product.name} width={50} height={50} />
      <div>
        <h3>{product.name}</h3>
        <p className="product-color">{product.color}</p>
        <p className="price">${product.price}</p>
        <button className="btn-cart">add to cart</button>
      </div>
    </li>
  );
}

export default ShopItem;