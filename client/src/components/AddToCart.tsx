import { addProductToCart } from '../stores/cart';

export const AddToCart = ({ product }: { product: Product }) => {
  return (
    <button
      className="bg-crimson-100 text-black font-bold rounded-md px-4 py-2 mt-2 hover:bg-crimson-200  drop-shadow-xl"
      onClick={() => addProductToCart(product)}
    >
      In den Warenkorb
    </button>
  );
};
