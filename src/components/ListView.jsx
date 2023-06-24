import React from 'react';
import ShopItem from './ShopItem';

function ListView({view, items}) {
  const container = !view ? 'container-list' : 'no_view';
  return (
    <div className={container}>
      {items.map((item) => {
        return  (
          <ShopItem key={item.img} item={item} />
        )
      })}
    </div>
  )
}

export default ListView