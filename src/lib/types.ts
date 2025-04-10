export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryType;
  images: string[];
};
