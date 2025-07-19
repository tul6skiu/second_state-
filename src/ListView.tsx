import React from 'react';
import type { Product } from './types/Product';
import ShopItem from './ShopItem';
import './ListView.css'

function ListView({ items }: { items: Product[] }) {
  return (
  	<div>
     <ul className="list-view">
      {(items ?? []).map(item => (
        <ShopItem key={item.name} product={item} />
      ))}
    </ul>
    </div>
  );
}

export default ListView