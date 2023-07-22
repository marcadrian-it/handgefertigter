import { computed } from 'nanostores';
import { persistentMap } from '@nanostores/persistent';

export const $cart = persistentMap<Record<string, CartProduct>>(
  'cart:',
  {},
  {
    encode: (value) => JSON.stringify(value),
    decode: (value) => JSON.parse(value),
  }
);

export function addProductToCart(product: Product) {
  const cartProduct = $cart.get()[product._id];
  const quantity = cartProduct ? cartProduct.quantity : 0;

  $cart.setKey(product._id, {
    product,
    quantity: quantity + 1,
  });
}

export function removeProductFromCart(product: Product) {
  $cart.setKey(product._id, undefined as unknown as CartProduct);
}

export function clearCart() {
  $cart.set({});
}

export const subtotal = computed($cart, (entries) => {
  let subtotal = 0;
  Object.values(entries).forEach((entry) => {
    if (!entry) return;
    subtotal += entry.product.price * entry.quantity;
  });
  return subtotal;
});
