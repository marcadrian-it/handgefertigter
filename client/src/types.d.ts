type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  archived?: boolean;
};

type CartProduct = {
  quantity: number;
  product: Product;
};
