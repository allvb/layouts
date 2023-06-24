import React from 'react';
import Card from './Card';

function CardsView({view, cards}) {
  const container = view ? 'container_cards' : 'no_view';
  return (
    <div className={container}>
      {cards.map((card) => {
        return  (
          <Card key={card.img} item={card} />
        )
      })}
    </div>
  )
}

export default CardsView