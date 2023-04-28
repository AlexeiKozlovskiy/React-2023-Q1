import { CartItem } from '../types';

export function Card({
  name,
  price,
  collection,
  color,
  availableColors,
  category,
  image,
}: Partial<CartItem>) {
  return (
    <div data-testid="card" className="card">
      <img className="card__img" src={image} alt={name} />
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
