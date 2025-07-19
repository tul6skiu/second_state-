import React from 'react';
import type { Product } from './types/Product';
import "./CardView.css";
import CardItem from './CardItem';
 


function CardView({ items }: { items: Product[] }) {
	return (
		<div className="cart-view">
			{(items ?? []).map(item => (
        		<CardItem key={item.name} product={item} />
      		))}
		</div>

	);
}

export default CardView