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
      <p>Ihr Warenkorb ist leer.</p>
    </>
  );
};

export const Cart = () => {
  const $subtotal = useStore(subtotal);
  const $cart = useStore(cart);
  const shippingCost = 5;

  return (
    <div className="">
      <h2>Ihr Warenkorb</h2>
      {Object.values($cart).length > 0 ? (
        <>
          <ul>
            {Object.values($cart).map((entry) => {
              if (!entry) {
                return null;
              }

              return (
                <li>
                  <span className="font-bold">{entry.quantity}x</span>
                  <span className="ml-2 font-semibold">
                    {entry.product.name}
                  </span>
                  <span className="ml-2 font-bold">
                    {formatCurrency(entry.product.price)}
                  </span>
                  <span className="ml-2 text-crimson-600 font-semibold">
                    <button
                      title="remove item"
                      onClick={() => removeProductFromCart(entry.product)}
                    >
                      X
                    </button>
                  </span>
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
