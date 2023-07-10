import { useStore } from '@nanostores/react';
import { $cart as cart, removeProductFromCart, subtotal } from '../stores/cart';
import { formatCurrency } from '../util/formatCurrency';

const EmptyState = () => {
  return (
    <>
      <p>
        <span role="img" aria-label="garnrolle">
          🧵
        </span>
      </p>
      <p>Dein Warenkorb ist leer.</p>
    </>
  );
};

export const Cart = () => {
  const $subtotal = useStore(subtotal);
  const $cart = useStore(cart);
  const shippingCost = 5;

  return (
    <div className="">
      <h2>Dein Warenkorb</h2>
      {Object.values($cart).length > 0 ? (
        <>
          <ul>
            {Object.values($cart).map((entry) => {
              if (!entry) {
                return null;
              }

              return (
                <li>
                  <span>{entry.quantity}</span>
                  <span>{entry.product.name}</span>
                  <span>
                    <button title="remove item">×</button>
                  </span>
                  <span>{formatCurrency(entry.product.price)}</span>
                </li>
              );
            })}
          </ul>
          <div>Summe: {formatCurrency($subtotal)}</div>
          <div>Versand: {formatCurrency(shippingCost)}</div>
          <div>Gesamtsumme: {formatCurrency($subtotal + shippingCost)}</div>
          <button>Zur Kasse</button>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
