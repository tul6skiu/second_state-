import React, { useState } from 'react';
import './Store.css'
import type { ViewMode } from './types/Product';
import type { Product } from './types/Product';
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardView from './CardView'


const viewModeToIcon: Record<ViewMode, string> = {
  card: 'view_module',
  list: 'view_list',
};

function Store() {
  const [viewMode, setViewMode] = useState<ViewMode>('card');

  function toggleViewMode() {
    setViewMode(prev => (prev === 'card' ? 'list' : 'card'));
  }


  const products: Product[] = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

  return (
    <div className="store-container">
      <div className="icon-switch-wrapper">
        <IconSwitch icon={viewModeToIcon[viewMode]} onSwitch={toggleViewMode} />
      </div>  
       {viewMode === 'card' ? (
          <CardView items={products} />
        ) : (
          <ListView items={products} />
        )}
    </div>
    );

}

export default Store
