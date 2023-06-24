import React from 'react'

function Card({item}) {
  return (
    <div
      className="card"
      style={{ backgroundImage: "url(" + item.img + ")" }}
    >
      <div className="title">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="add-bucket">
        <div className="price">$ {item.price}</div>
        <div className="bth">Add to cart</div>
      </div>
    </div>
  )
}

export default Card