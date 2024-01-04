export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type Products = ReadonlyArray<Product>;

// NAVIGATION TYPES
export type PublicStackParamList = {
  Login: undefined;
};

export type ProtectedStackParamList = {
  Home: undefined;
  Product: {productId: number};
};
