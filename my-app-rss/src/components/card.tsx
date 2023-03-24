import React, { Component } from 'react';
import { CartItem } from './types';

export class Card<T> extends Component<Partial<CartItem<T>>> {
  render() {
    const { name, price, collection, color, availableColors, category, image } = this.props;
    return (
      <div data-testid="card" className="card">
        <img className="card__img" src={process.env.PUBLIC_URL + `${image}`} alt={name} />
        <h3>{name}</h3>
        <div className="card__info">
          <div>
            Price - <span>{price}</span> $
          </div>
          <div>
            Collection - <span>{String(collection)}</span>
          </div>
          <div>
            Color - <span>{color}</span>
          </div>
          <div>
            Available colors -{' '}
            <span>
              {availableColors?.map((el, index) =>
                index !== availableColors.length - 1 ? el + ', ' : el
              )}
            </span>
          </div>
          <div>
            Category - <span>{category}</span>
          </div>
        </div>
      </div>
    );
  }
}
