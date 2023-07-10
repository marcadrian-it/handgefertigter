import { computed, map } from 'nanostores';

export const $cart = map<Record<string, CartProduct>>({});

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

export const subtotal = computed($cart, (entries) => {
  let subtotal = 0;
  Object.values(entries).forEach((entry) => {
    if (!entry) return;
    subtotal += entry.product.price * entry.quantity;
  });
  return subtotal;
});
