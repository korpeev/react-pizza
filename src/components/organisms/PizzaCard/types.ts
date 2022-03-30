export type PizzaCard = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type Props = {
  pizzas: PizzaCard;
  isCartPage?: boolean;
};
