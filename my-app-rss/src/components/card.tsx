import React, { Component } from 'react';

interface CartItem {
  name: string;
  price: number;
  collection: number;
  stock: number;
  color: string;
  size: number;
  category: string;
  images: string;
}

export class Card extends Component<CartItem> {
  render() {
    const { name, price, stock, collection, color, size, category, images } = this.props;
    return (
      <div data-testid="card" className="card">
        <img className="card__img" src={process.env.PUBLIC_URL + `img/${images}`} alt={name} />
        <h3>{name}</h3>
        <div className="card__info">
          <div>
            Price - <span>{price}</span> $
          </div>
          <div>
            Collection - <span>{collection}</span>
          </div>
          <div>
            Stock - <span>{stock}</span>
          </div>
          <div>
            Color - <span>{color}</span>
          </div>
          <div>
            Size - <span>{size}</span> cm
          </div>
          <div>
            Category - <span>{category}</span>
          </div>
        </div>
      </div>
    );
  }
}
