import React,  { useState } from 'react';
import products from '../data/products.js';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store() {
  const [view, setView] = useState(false);

  const handleButtonView = () => {
    setView(prev => prev = !view);
  }

  return (
    <div>
      <IconSwitch icon={view} onSwitch={handleButtonView}/>
      <CardsView view={view} cards={products} />
      <ListView view={view} items={products} />
    </div>
  )
}

export default Store
