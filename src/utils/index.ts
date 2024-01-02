import {Product, Products} from '../types';

export type GroupedProducts = {
  category: string;
  products: Product[];
}[];

export function groupProducts(products?: Products) {
  return products?.reduce((grouped, product) => {
    let categoryGroup = grouped.find(g => g.category === product.category);

    if (!categoryGroup) {
      categoryGroup = {
        category: product.category,
        products: [],
      };
      grouped.push(categoryGroup);
    }

    categoryGroup.products.push(product);

    return grouped;
  }, [] as GroupedProducts);
}
