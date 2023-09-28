import { addProductToCart } from '../stores/cart';

export const AddToCart = ({ product }: { product: Product }) => {
  const gradientStyle = {
    background: `linear-gradient(75deg, var(--color-crimson-200), var(--color-crimson-600))`,
  };

  return (
    <button
      style={gradientStyle}
      className="bg-crimson-800 text-white rounded-md px-4 py-2 mt-2 hover:opacity-80 hover:scale-105 font-bold shadow-lg sm:font-semibold sm:text-base focus:outline transition duration-300 outline-black outline-offset-2"
      onClick={() => addProductToCart(product)}
    >
      In den Warenkorb
    </button>
  );
};
