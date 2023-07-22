import { useStore } from '@nanostores/react';
import {
  $cart as cart,
  removeProductFromCart,
  subtotal,
  clearCart,
} from '../stores/cart';
import { formatCurrency } from '../util/formatCurrency';
import { loadStripe } from '@stripe/stripe-js';

const createCheckout = async (data: any) => {
  const response = await fetch('/.netlify/functions/createCheckoutSession', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return await response.json();
};

const EmptyState = () => {
  return (
    <div className="text-gray-600 font-semibold">
      <p>
        <span className="text-4xl" role="img" aria-label="garnrolle">
          🧵
        </span>
      </p>
      <p className="text-lg">Ihr Warenkorb ist leer.</p>
    </div>
  );
};

export const Cart = () => {
  const $subtotal = useStore(subtotal);
  const $cart = useStore(cart);
  const shippingCost = 5.5;

  return (
    <div className="rounded-xl px-4 py-4 drop-shadow-xl border-crimson-200 border-2 bg-white">
      <div className="flex justify-end">
        <div className="text-sm mr-2 flex flex-col w-[300px]">
          <h2 className="font-semibold text-2xl">Ihr Warenkorb</h2>
          {Object.values($cart).length > 0 ? (
            <>
              <ul>
                {Object.values($cart).map((entry, index) => {
                  if (!entry) {
                    return null;
                  }

                  return (
                    <li key={`${entry.product._id}-${index}`}>
                      <div className="grid grid-cols-5 items-center gap-0 border-b border-gray-300 py-4">
                        <span className="font-bold text-gray-600 col-auto">
                          {entry.quantity}x
                        </span>
                        <span className="font-semibold col-span-2">
                          {entry.product.name}
                        </span>
                        <span className="font-bold text-gray-600 text-right col-auto">
                          {formatCurrency(entry.product.price)}
                        </span>
                        <span className="text-crimson-600 font-bold pl-5 col-auto">
                          <button
                            title="remove item"
                            onClick={() => removeProductFromCart(entry.product)}
                          >
                            X
                          </button>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4">
                <p className="text-gray-900 font-semibold">
                  Summe: {formatCurrency($subtotal)}
                </p>
                <p className="text-gray-400 font-semibold">
                  Versand: {formatCurrency(shippingCost)}
                </p>
                <p className="text-black font-bold">
                  Gesamtsumme: {formatCurrency($subtotal + shippingCost)}
                </p>
                <button
                  className="bg-crimson-800 text-white font-bold rounded-md px-4 py-2 mt-2 hover:bg-crimson-600  drop-shadow-xl"
                  onClick={async () => {
                    // Call the createCheckout function
                    const response = await createCheckout({
                      cart: $cart,
                      shippingCost,
                    });
                    console.log(response);

                    const id = response.id;
                    console.log(id);
                    const stripePromise = loadStripe(
                      'pk_test_51NTRaWDHxrj2HWGrQTV8SuI4SdAwmKyF9OLXXdpOwgZi9qgHp9xRxYSo9XnnXn6ghcYo2BIdXRs7a0vIfqncv050006Rp34e5M'
                    );
                    const stripe = await stripePromise;
                    console.log(stripe);
                    stripe?.redirectToCheckout({ sessionId: id });
                    clearCart();
                  }}
                >
                  Zur Kasse
                </button>
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};
